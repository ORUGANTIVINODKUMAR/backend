<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Upsilon | Login</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body class="login-page">

  <!-- HEADER -->
  <header class="upsilon-header d-flex justify-content-between align-items-center px-5 py-3 bg-white shadow-sm">
    <div class="logo">
      <h2 class="text-gradient m-0">Upsilon</h2>
    </div>

    <nav class="nav-links d-none d-md-flex gap-4">
      <a href="#">Design</a>
      <a href="#">Product</a>
      <a href="#">Plans</a>
      <a href="#">Business</a>
      <a href="#">Education</a>
      <a href="#">Help</a>
    </nav>

    <div class="auth-buttons">
      <button class="btn btn-outline-primary me-2 signup-btn">Sign Up</button>
      <button class="btn btn-primary login-btn">Log in</button>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="hero-section container-fluid py-5 px-4 px-md-5">
    <div class="row align-items-center">
      <!-- LEFT HERO -->
      <div class="col-lg-6 text-white text-center text-lg-start">
        <h1 class="display-4 fw-bold mb-3">Where ideas meet innovation</h1>
        <p class="lead mb-4">
          Upsilon makes it easy to create, manage, and share documents — merge PDFs, perform OCR, and organize files with ease.
        </p>
        <button id="openLogin" class="btn btn-light btn-lg px-4 py-2 rounded-pill fw-semibold shadow-sm">
          <i class="bi bi-arrow-right-circle me-2"></i>Sign in and start merging
        </button>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="col-lg-6 text-center mt-5 mt-lg-0">
        <img src="https://cdn.dribbble.com/users/1162077/screenshots/3874018/programmer.gif"
             alt="Illustration" class="img-fluid hero-img rounded-4 shadow-lg" />
      </div>
    </div>
  </section>

  <!-- POPUP LOGIN FORM -->
  <div id="loginModal" class="login-modal">
    <div class="login-modal-content p-4">
      <button class="close-btn">&times;</button>
      <h3 class="text-center text-white mb-3"><i class="bi bi-lock-fill me-2"></i>Login</h3>
      <form id="login-form">
        <div class="mb-3">
          <label for="username" class="form-label text-light">Username</label>
          <input type="text" class="form-control" id="username" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label text-light">Password</label>
          <input type="password" class="form-control" id="password" required />
        </div>
        <button type="submit" class="btn btn-merge w-100 mt-3">Login</button>
        <p id="login-msg" class="text-center mt-3 text-danger"></p>
      </form>
    </div>
  </div>

  <!-- JS -->
  <script src="login.js"></script>
  <script>
    // --- LOGIN MODAL LOGIC ---
    const modal = document.getElementById('loginModal');
    const openBtn = document.getElementById('openLogin');  // Hero button
    const closeBtn = document.querySelector('.close-btn');
    const navLoginBtn = document.querySelector('.login-btn'); // Navbar button

    // Helper functions
    const openModal = () => (modal.style.display = 'flex');
    const closeModal = () => (modal.style.display = 'none');

    // Event listeners
    if (openBtn) openBtn.addEventListener('click', openModal);
    if (navLoginBtn) navLoginBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Close when clicking outside
    window.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  </script>
  <!-- OUR BUSINESS FEATURES SECTION -->
  <section class="business-features py-5 text-center">
    <div class="container position-relative">
      <h2 class="fw-bold mb-3">Our Business Features</h2>
      <p class="text-muted mb-5">
        Power up your workflow with Upsilon’s next-gen automation tools — from smart OCR and secure collaboration to AI-driven reporting.
      </p>

      <div class="features-wrapper d-flex overflow-hidden">
        <div class="feature-card p-4 mx-3 flex-shrink-0">
          <div class="icon-wrapper mb-3">
            <i class="bi bi-search-heart"></i>
          </div>
          <h5 class="fw-semibold mb-3">AI-Powered OCR Extraction</h5>
          <p>Instantly turn images and scanned PDFs into searchable, editable text using our intelligent OCR engine.</p>
          <a href="#" class="btn btn-learn mt-3 rounded-pill px-4 py-1">Learn more</a>
        </div>

        <div class="feature-card p-4 mx-3 flex-shrink-0">
          <div class="icon-wrapper mb-3">
            <i class="bi bi-layers"></i>
          </div>
          <h5 class="fw-semibold mb-3">Smart Document Merging</h5>
          <p>Combine multiple files into one polished, organized PDF — complete with bookmarks and classification.</p>
          <a href="#" class="btn btn-learn mt-3 rounded-pill px-4 py-1">Learn more</a>
        </div>

        <div class="feature-card p-4 mx-3 flex-shrink-0">
          <div class="icon-wrapper mb-3">
            <i class="bi bi-cloud-check"></i>
          </div>
          <h5 class="fw-semibold mb-3">Secure Cloud Collaboration</h5>
          <p>Work together effortlessly with secure, cloud-based document sharing and version tracking.</p>
          <a href="#" class="btn btn-learn mt-3 rounded-pill px-4 py-1">Learn more</a>
        </div>

        <div class="feature-card p-4 mx-3 flex-shrink-0">
          <div class="icon-wrapper mb-3">
            <i class="bi bi-graph-up-arrow"></i>
          </div>
          <h5 class="fw-semibold mb-3">Automated Client Reports</h5>
          <p>Generate client-ready summaries and insights automatically — formatted and branded for your team.</p>
          <a href="#" class="btn btn-learn mt-3 rounded-pill px-4 py-1">Learn more</a>
        </div>

        <div class="feature-card p-4 mx-3 flex-shrink-0">
          <div class="icon-wrapper mb-3">
            <i class="bi bi-lightning-charge"></i>
          </div>
          <h5 class="fw-semibold mb-3">AI Workflow Automation</h5>
          <p>Save time by automating repetitive PDF handling tasks — merge, rename, tag, and file in seconds.</p>
          <a href="#" class="btn btn-learn mt-3 rounded-pill px-4 py-1">Learn more</a>
        </div>
      </div>

      <!-- Scroll Buttons -->
      <button class="scroll-btn left-btn">&#8249;</button>
      <button class="scroll-btn right-btn">&#8250;</button>
    </div>
  </section>

  <script>
  // Select elements
    const wrapper = document.querySelector('.features-wrapper');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

  // Scroll left & right when arrows clicked
    leftBtn.addEventListener('click', () => {
      wrapper.scrollBy({ left: -320, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
      wrapper.scrollBy({ left: 320, behavior: 'smooth' });
    });

  // Optional: add a little shadow animation while scrolling
    wrapper.addEventListener('scroll', () => {
      wrapper.style.scrollSnapType = 'x mandatory';
    });
  </script>

</body>
</html>
