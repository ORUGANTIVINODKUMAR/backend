
import io
import fitz  # PyMuPDF
from PIL import Image, ImageOps, ImageEnhance, ImageFilter

def pdf_page_to_image(path: str, page_index: int, dpi: int = 400) -> Image.Image:
    """
    Convert a PDF page to a preprocessed PIL image optimized for OCR.
    Steps (no OpenCV):
      - High DPI render
      - Convert to grayscale
      - Auto-contrast & brightness boost
      - Sharpen twice
      - Adaptive dual-thresholding (light & dark)
      - Rescale small text images
    """
    doc = fitz.open(path)
    page = doc.load_page(page_index)

    # Render with high DPI
    zoom = dpi / 72
    mat = fitz.Matrix(zoom, zoom)
    pix = page.get_pixmap(matrix=mat, alpha=False)
    doc.close()

    # Base grayscale image
    img = Image.open(io.BytesIO(pix.tobytes("png"))).convert("L")

    # Normalize brightness & contrast
    img = ImageOps.autocontrast(img)
    img = ImageEnhance.Brightness(img).enhance(1.2)   # brighten slightly
    img = ImageEnhance.Contrast(img).enhance(1.5)     # increase contrast

    # Double sharpen
    img = img.filter(ImageFilter.SHARPEN)
    img = img.filter(ImageFilter.UnsharpMask(radius=1, percent=150, threshold=3))

    # Rescale if image is small (OCR likes ~3000px width for full page)
    w, h = img.size
    if w < 2000:
        scale = 2000 / w
        img = img.resize((int(w * scale), int(h * scale)), Image.LANCZOS)

    # Try two threshold passes: light and dark
    def threshold(im, cutoff):
        return im.point(lambda x: 0 if x < cutoff else 255, "1")

    light = threshold(img, 160)
    dark = threshold(img, 200)

    # Heuristic: choose the version with more black pixels (more likely text-heavy)
    black_ratio_light = sum(light.getdata()) / (255 * light.size[0] * light.size[1])
    black_ratio_dark = sum(dark.getdata()) / (255 * dark.size[0] * dark.size[1])

    img_final = light if black_ratio_light < black_ratio_dark else dark

    return img_final

def extract_text(path: str, page_index: int) -> str:
    text = ""
    # OCR fallback
    if len(text.strip()) < OCR_MIN_CHARS:
        try:
        # 🔹 Use only 300 DPI for sharper OCR
            dpi = 300
            img = pdf_page_to_image(path, page_index, dpi=dpi)

        # 🔹 Preprocess: convert to grayscale + threshold (binarization)
            gray = img.convert("L")
            bw = gray.point(lambda x: 0 if x < 180 else 255, '1')  # simple binarization

        # 🔹 OCR with stronger settings
            t_ocr = pytesseract.image_to_string(
                bw,
                lang="eng",
                config="--oem 3 --psm 6"   # OEM 3 = default LSTM, PSM 6 = block of text
            ) or ""

            print(f"[OCR dpi={dpi}]\n{t_ocr}", file=sys.stderr)

            if len(t_ocr.strip()) > len(text):
                text = t_ocr

        except Exception:
            traceback.print_exc()


    # PDFMiner
    try:
        t1 = pdfminer_extract(path, page_numbers=[page_index], laparams=PDFMINER_LA_PARAMS) or ""
        print(f"[PDFMiner full]\n{t1}", file=sys.stderr)
        if len(t1.strip()) > len(text): text = t1
    except Exception:
        traceback.print_exc()
    # PyPDF2 fallback
    if len(text.strip()) < OCR_MIN_CHARS:
        try:
            reader = PdfReader(path)
            t2 = reader.pages[page_index].extract_text() or ""
            print(f"[PyPDF2 full]\n{t2}", file=sys.stderr)
            if len(t2.strip()) > len(text): text = t2
        except Exception:
            traceback.print_exc()
   
    return text


# ── OCR for images
def extract_text_from_image(file_path: str) -> str:
    text = ""
    try:
        img = Image.open(file_path)
        if img.mode!='RGB': img = img.convert('RGB')
        et = pytesseract.image_to_string(img)
        if et.strip():
            print_phrase_context(et)
            text = f"\n--- OCR Image {os.path.basename(file_path)} ---\n" + et
        else: text = f"No text in image: {os.path.basename(file_path)}"
    except Exception as e:
        logger.error(f"Error OCR image {file_path}: {e}")
        text = f"Error OCR image: {e}"
    return text
