
    # --- 2️⃣ Apex Clearing: account on next line ---
    apex_match = re.search(
        r"Apex\s+Clearing[^\n\r]*\n\s*([A-Z0-9\-]{4,})",
        text,
        re.IGNORECASE
    )
    apex_nextline = apex_match.group(1).strip() if apex_match else None

    # --- 3️⃣ Apex Clearing: account on same line ---
    apex_inline = re.search(
        r"Apex\s+Clearing[^\n\r]{0,60}?([A-Z0-9\-]{4,})",
        text,
        re.IGNORECASE
    )
    apex_inline_acc = apex_inline.group(1).strip() if apex_inline else None

    # --- 4️⃣ Combine and normalize ---
    found = {std_account, apex_nextline, apex_inline_acc}
    found = {a for a in found if a}  # remove None

    detected_account = None
    if found:
        normalized = {a.replace("-", "").upper() for a in found}
        if len(normalized) == 1:
            detected_account = list(found)[0]
        else:
            detected_account = std_account or apex_nextline or apex_inline_acc
