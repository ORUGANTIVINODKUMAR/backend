/* =====================================================
   GLOBAL RESET & BASE STYLES
===================================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  position: relative;
  overflow: auto;
  background: linear-gradient(135deg, #8ec5fc 0%, #b97ffb 100%);
}

/* =====================================================
   HEADER (Canva-style Navigation)
===================================================== */
.upsilon-header {
  background: white;
  border-bottom: 2px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo .text-gradient {
  background: linear-gradient(90deg, #03c4ff, #7a3cff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.nav-links a {
  color: #333;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: #7a3cff;
}

.auth-buttons .btn {
  border-radius: 25px;
  font-weight: 500;
  padding: 6px 16px;
  transition: all 0.3s ease;
}
.auth-buttons .btn:hover {
  background-color: #7a3cff;
  color: #fff;
}

/* =====================================================
   CARD CONTAINER (Merger Tool Box)
===================================================== */
.container {
  position: relative;
  z-index: 1;
}

.card {
  border: none;
  border-radius: 12px;
  background-color: #1d1c1c;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

/* Card Header */
.card-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
}
.headline-icon {
  font-size: 1.5rem;
  vertical-align: middle;
  margin-right: 0.5rem;
}
.headline-text {
  font-size: 1.5rem;
  font-weight: 500;
  vertical-align: middle;
}
.headline-sub {
  color: #bbb;
  font-size: 0.9rem;
  margin-top: 0.25rem;
  margin-left: 2rem;
}

/* =====================================================
   FILE UPLOAD SECTION
===================================================== */
.select-label {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #fff;
  margin-bottom: 0.5rem;
}
.select-label i {
  font-size: 1.2rem;
  margin-right: 0.5rem;
}

/* Drop Zone */
.drop-zone {
  position: relative;
  padding: 2rem;
  border: 2px dashed #555;
  border-radius: 8px;
  text-align: center;
  color: #aaa;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
  min-height: 200px;
}
.drop-zone i {
  font-size: 3rem;
  color: #777;
  margin-bottom: 0.5rem;
}
.drop-zone p {
  margin-bottom: 0.25rem;
  font-weight: 500;
}
.drop-zone small {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.8rem;
  color: #888;
}
.drop-zone.dragover {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: #888;
}
.drop-zone input[type="file"] {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

/* =====================================================
   FILE LIST
===================================================== */
#file-list {
  margin-top: 1rem;
}
.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(40, 40, 40, 0.7);
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  color: #fff;
  font-size: 0.9rem;
}
.file-item .delete-btn {
  background: none;
  border: none;
  color: #ff6b6b;
  font-size: 1.2rem;
  cursor: pointer;
  line-height: 1;
}

/* =====================================================
   BUTTONS
===================================================== */
.btn-merge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem;
  font-size: 1.1rem;
  color: #5b55ea;
  border: 2px solid #5b55ea;
  background: transparent;
  border-radius: 50px;
  transition: all 0.2s;
}
.btn-merge i {
  font-size: 1.2rem;
  margin-right: 0.5rem;
}
.btn-merge:hover {
  background-color: rgba(91, 85, 234, 0.1);
}

/* =====================================================
   FEATURES LIST
===================================================== */
.features {
  color: #ccc;
}
.features > i {
  font-size: 1.2rem;
  vertical-align: middle;
  margin-right: 0.25rem;
}
.features > strong {
  font-size: 1rem;
  vertical-align: middle;
  margin-left: 0.25rem;
}

/* Features grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem 1.5rem;
  margin-top: 0.5rem;
}
.features-grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.features-grid li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}
.features-grid li i {
  color: #28a745;
  margin-right: 0.5rem;
  font-size: 1.1rem;
}

/* =====================================================
   PARTICLES BACKGROUND
===================================================== */
#tsparticles canvas {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  z-index: -1 !important;
  pointer-events: none !important;
}

/* =====================================================
   HERO / LOGIN PAGE SUPPORT
===================================================== */
body.login-page {
  background: linear-gradient(135deg, #8ec5fc 0%, #b97ffb 100%);
  min-height: 100vh;
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  min-height: calc(100vh - 80px);
}
.hero-section h1 {
  font-weight: 700;
  line-height: 1.2;
}
.hero-section p {
  font-size: 1.1rem;
  max-width: 500px;
}
.hero-img {
  max-width: 85%;
  border-radius: 20px;
}

/* =====================================================
   LOGIN MODAL (if used)
===================================================== */
.login-modal {
  display: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
}
.login-modal-content {
  background: #1d1c1c;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  position: relative;
}
.close-btn {
  position: absolute;
  top: 12px;
  right: 18px;
  color: #fff;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}
.close-btn:hover {
  color: #7a3cff;
}
/* =====================================================
   ENHANCED BUSINESS FEATURES SECTION
===================================================== */
.business-features {
  background: linear-gradient(135deg, #b49bff 0%, #8ec5fc 100%);
  color: #333;
  overflow: hidden;
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.business-features h2 {
  font-size: 2.4rem;
  color: #1c1c1c;
  font-weight: 700;
}

.business-features p {
  font-size: 1.05rem;
  color: #222;
  max-width: 700px;
  margin: 0 auto 3rem;
}

/* Scrollable container */
.features-wrapper {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 20px 0;
  gap: 20px;
  justify-content: flex-start;
}

.features-wrapper::-webkit-scrollbar {
  display: none;
}

/* Feature cards */
.feature-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  min-width: 280px;
  max-width: 300px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  transform: translateY(0);
  position: relative;
}

.feature-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Icon Circle */
.icon-wrapper {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7a3cff, #03c4ff);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  margin: 0 auto 15px;
}

/* Card Title & Text */
.feature-card h5 {
  color: #0a2e57;
  font-weight: 600;
  font-size: 1.1rem;
}

.feature-card p {
  color: #333;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Learn More button */
.btn-learn {
  border: 2px solid #7a3cff;
  color: #7a3cff;
  background: white;
  transition: all 0.3s;
  font-size: 0.9rem;
  font-weight: 500;
}

.btn-learn:hover {
  background: #7a3cff;
  color: white;
}

/* Scroll Arrows */
.scroll-btn {
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  background: white;
  border-radius: 50%;
  border: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  width: 45px;
  height: 45px;
  font-size: 1.6rem;
  color: #7a3cff;
  z-index: 5;
  transition: all 0.3s ease;
}

.scroll-btn:hover {
  background: #7a3cff;
  color: white;
  transform: translateY(-50%) scale(1.1);
}

.left-btn {
  left: 10px;
}

.right-btn {
  right: 10px;
}

/* Responsive */
@media (max-width: 768px) {
  .feature-card {
    min-width: 240px;
  }

  .scroll-btn {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }
}

