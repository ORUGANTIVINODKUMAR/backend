// =============================
//  Document Merger & OCR Server
//  with Secure Login (Express + Python integration)
// =============================

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// =============================
//  Middleware setup
// =============================
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(session({
  secret: 'super_secret_key_change_this', // ⚠️ Change this in production
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 2 * 60 * 60 * 1000 } // 2 hours
}));

// =============================
//  Authentication Setup
// =============================

// Simple in-memory user credentials
// (For production, replace this with DB or environment variables)
const USER = { username: 'admin', password: '1234' };

// --- Login Endpoint ---
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    req.session.authenticated = true;
    console.log(`✅ User '${username}' logged in.`);
    return res.json({ success: true });
  }
  console.log(`❌ Failed login attempt: ${username}`);
  res.status(401).json({ error: 'Invalid username or password' });
});

// --- Logout Endpoint ---
app.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

// --- Auth Middleware ---
function requireAuth(req, res, next) {
  if (req.session.authenticated) return next();
  res.redirect('/login.html');
}

// --- Protect Main Page ---
app.get('/index.html', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// =============================
//  Merge System Configuration
// =============================

let mergeProgress = { percent: 0, message: "Idle" };

const BASE_UPLOAD_DIR = path.join(__dirname, 'uploads');
const BASE_MERGED_DIR = path.join(__dirname, 'merged');

// Ensure directories exist
[BASE_UPLOAD_DIR, BASE_MERGED_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created missing directory: ${dir}`);
  }
});

// =============================
//  File Upload Configuration
// =============================

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!req.userTempDir) {
      const uniqueId = uuidv4();
      req.userTempDir = path.join(BASE_UPLOAD_DIR, uniqueId);
      fs.mkdirSync(req.userTempDir, { recursive: true });
    }
    cb(null, req.userTempDir);
  },
  filename: function (req, file, cb) {
    const safeName = `${Date.now()}-${file.originalname}`;
    cb(null, safeName);
  }
});

const upload = multer({ storage });

// =============================
//  Progress Updates (SSE)
// =============================

app.get('/progress', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const interval = setInterval(() => {
    res.write(`data: ${JSON.stringify(mergeProgress)}\n\n`);
  }, 1000);

  req.on('close', () => clearInterval(interval));
});

// =============================
//  Merge Endpoint
// =============================

app.post('/merge', requireAuth, upload.array('pdfs'), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No files uploaded');
  }

  const inputDir = req.userTempDir;
  const outputPath = path.join(BASE_MERGED_DIR, `merged_${uuidv4()}.pdf`);

  mergeProgress = { percent: 10, message: "Uploading files..." };

  console.log("📂 Uploaded files:");
  req.files.forEach(file => console.log(`  - ${file.path}`));

  // Call Python script for merging
  const pythonPath = process.platform === 'win32' ? 'python' : 'python3';
  const python = spawn(pythonPath, ['merge_with_bookmarks.py', inputDir, outputPath]);

  python.stdout.on('data', data => {
    const msg = data.toString().trim();
    console.log(`[PY-OUT] ${msg}`);

    if (msg.includes("Processing")) mergeProgress = { percent: 40, message: "Processing pages..." };
    if (msg.includes("Bookmark")) mergeProgress = { percent: 70, message: "Adding bookmarks..." };
    if (msg.includes("Merged PDF created")) mergeProgress = { percent: 100, message: "Finalizing..." };
  });

  python.stderr.on('data', data => {
    console.error(`[PY-ERR] ${data}`);
  });

  python.on('close', (code) => {
    if (code === 0) {
      mergeProgress = { percent: 100, message: "Done! Ready to download." };
      console.log(`✅ Merge completed: ${outputPath}`);
      res.download(outputPath, () => {
        try {
          fs.rmSync(inputDir, { recursive: true, force: true });
          console.log("🧹 Cleaned up temp files.");
        } catch (e) {
          console.error("Cleanup error:", e);
        }
      });
    } else {
      mergeProgress = { percent: 100, message: "Failed to merge." };
      console.error("❌ Python merge failed.");
      res.status(500).send('Failed to merge PDFs with bookmarks');
    }
  });
});

// =============================
//  Start Server
// =============================
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
