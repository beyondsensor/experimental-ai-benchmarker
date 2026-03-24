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

## Layout Preservation Rules

To maintain architectural consistency across the application, follow these mandatory preservation rules during UI generation:

1.  **Immutable Global Shell**
    -   **Sidebar:** Preserve all existing navigation links, icons, and branding. Only update the 'Active' state to reflect the current module.
    -   **Header:** Retain all utility components (e.g., User Profile, Notifications, Global Search, Logo).

2.  **Structural Stability**
    -   **Fixed Positioning:** Once a "Fixed" layout (e.g., Fixed Header/Sidebar) is established, it must not be reverted to standard/absolute positioning in subsequent edits.

3.  **Targeted Content Transformation**
    -   Always instruct the generation agent to transform **ONLY** the "Main Content Window" or "Module Pane" while keeping the "Global Chrome" (Sidebar/Header) intact.

## Specification Durability Rules

To ensure module documentation remains durable and platform-agnostic:

1.  **Exclude Volatile Identifiers**
    -   **No Screen IDs:** Never include Stitch Screen IDs (e.g., `58fd5f52...`) directly in `specs.md` files. These are volatile and subject to frequent change.
    -   **Centralized Tracking:** All Screen IDs must be managed exclusively in the relevant `manifest.json` at the module or layout root.

2.  **Focus on Requirements**
    -   `specs.md` should focus on **Functional Requirements** (logic), **Visual Specifications** (design tokens/layouts), and **Traceability** (file paths), rather than transient platform metadata.

## Rationale
Ensuring consistent high-quality asset storage and manifest-based tracking allows for easier design audits, variant comparison, and rapid prototyping from the generated codebases.
