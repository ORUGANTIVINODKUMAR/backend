<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Document Merger &amp; OCR</title>

  <!-- Bootstrap CSS -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <!-- Bootstrap Icons -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
    rel="stylesheet"
  />
  <!-- Your custom CSS -->
  <link rel="stylesheet" href="style.css"/>
</head>
<body>
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
      <button id="logout-btn" class="btn btn-outline-danger rounded-pill px-3">
        <i class="bi bi-box-arrow-right me-1"></i> Logout
      </button>
    </div>
                </header>

  <!-- tsParticles background -->
  <div id="tsparticles"></div>

  <!-- Main container -->
  <div class="container py-5">
    <div class="card text-white bg-dark mx-auto" style="max-width: 600px;">
      

      <!-- Header -->
      <div class="card-header border-bottom">
        <i class="bi bi-file-earmark-pdf-fill headline-icon"></i>
        <span class="headline-text">Document Merger &amp; OCR</span>
        <p class="headline-sub">
          Upload documents, merge them into a single PDF, and extract text using OCR
        </p>
      </div>

      <div class="card-body">

        <!-- Select Documents Label -->
        <h5 class="select-label">
          <i class="bi bi-cloud-upload-fill"></i>
          Select Documents
        </h5>

        <!-- Drop Zone -->
        <div id="drop-zone" class="drop-zone">
          <i class="bi bi-cloud-upload"></i>
          <p>Drag and drop files here or click to select</p>
          <small>
            Supports PDF, PNG, JPG, JPEG, GIF, BMP, TIFF (Max 16 MB each)
          </small>
          <input
            type="file"
            id="file-input"
            multiple
            accept="application/pdf,
                    image/png,
                    image/jpeg,
                    image/gif,
                    image/bmp,
                    image/tiff"
          />
        </div>
        <!-- Delete button for the docs uploaded -->
         <!-- File List Preview with delete -->
        <div id="file-list"></div>
        <!-- Merge Button -->
        <button id="merge-btn" class="btn btn-merge mt-4">
          <i class="bi bi-upload me-2"></i>
          Upload &amp; Merge Documents
        </button>
        <!-- ✅ Progress Bar goes here -->
        <div class="progress mt-3" style="height: 25px; display: none;" id="progress-container">
          <div id="progress-bar"
               class="progress-bar progress-bar-striped progress-bar-animated"
               role="progressbar" style="width: 0%">0%</div>
        </div>
        <p id="progress-msg" class="mt-2 text-info"></p>
<!-- ✅ End of progress bar block -->
        <!-- Features Grid -->
        <div class="features mt-4">
          <i class="bi bi-info-circle"></i>
          <strong>Features:</strong>
          <div class="features-grid mt-2">
            <ul class="list-unstyled mb-0">
              <li><i class="bi bi-check2-circle"></i>Upload multiple documents</li>
              <li><i class="bi bi-check2-circle"></i>Merge into single PDF</li>
              <li><i class="bi bi-check2-circle"></i>OCR text extraction</li>
            </ul>
            <ul class="list-unstyled mb-0">
              <li><i class="bi bi-check2-circle"></i>Drag &amp; drop interface</li>
              <li><i class="bi bi-check2-circle"></i>Console text output</li>
              <li><i class="bi bi-check2-circle"></i>Multiple file formats</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Bootstrap JS Bundle -->
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"
  ></script>
  <!-- tsParticles -->
  <script src="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js"></script>
  <!-- Your custom JS -->
  <script src="script.js"></script>
  
</body>
</html>
