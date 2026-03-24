# Stitch Export Workflow Rule

This rule defines the mandatory post-generation steps after creating a UI screen in Google Stitch.

## Post-Generation Checklist

Every screen generated in Stitch must be exported as follows:

1.  **High-Resolution Image Download**
    -   Retrieve the screenshot `downloadUrl` from the Stitch API.
    -   **Action:** Append `=s0` to the end of the URL to fetch the original, high-resolution source.
    -   **Storage:** Save the file as `[page-name].png` in the relevant documentation folder.
    -   **Command Example:** `curl -L "[URL]=s0" -o "[path].png"`

2.  **HTML/CSS Code Download**
    -   Retrieve the `htmlCode.downloadUrl` from the Stitch API.
    -   **Action:** Download the full raw HTML content.
    -   **Storage:** Save the file as `[page-name].html` in the relevant documentation folder.
    -   **Command Example:** `curl -L "[URL]" -o "[path].html"`

3.  **Manifest Update**
    -   Every layout and module folder must contain a `manifest.json`.
    -   **Action:** Add/Update the layout entry in the `items` array. Combine assets (HTML, preview image) under a single named object with the project and screen IDs.
    -   **Storage:** Ensure `lastUpdated` timestamp reflects the most recent generation.

## Rationale
Ensuring consistent high-quality asset storage and manifest-based tracking allows for easier design audits, variant comparison, and rapid prototyping from the generated codebases.
