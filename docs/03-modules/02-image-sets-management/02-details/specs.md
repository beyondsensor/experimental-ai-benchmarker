# Specification: Image Set Details (Multi-Tab)

## Visual Assets
- **Overview Tab Layout:** [details-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/02-details/stitch_ui/details-light.html)
- **Overview Tab Preview:** [details-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/02-details/stitch_ui/details-light.png)
- **Images Tab Layout:** [details-images-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/02-details/stitch_ui/details-images-light.html)
- **Images Tab Preview:** [details-images-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/02-details/stitch_ui/details-images-light.png)
- **Settings Tab Layout:** [details-settings-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/02-details/stitch_ui/details-settings-light.html)
- **Settings Tab Preview:** [details-settings-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/02-details/stitch_ui/details-settings-light.png)

## Overview
A high-performance workspace for managing specific Image Test Sets. This page leverages an editorial multi-tab structure to separate metadata management, asset browsing, and configuration.

## Visual Requirements
- **Layout:** Dashboard Layout (Fixed Sidebar + Top Navigation).
- **Sidebar State:** Highlight "Image Sets" menu item (**Vivid Orange #EA580C**).
- **Breadcrumb:** `Home` > `Image Sets` > `[Image Set Name]`
- **Tone:** Kinetic Intelligence (Slate 50/950 foundation, Vivid Orange accents, No-Line rule).

## Functional Components (Tabs)

### 1. Overview Tab
- **Metadata Card:** Displays Name, Description, and Creation details.
- **Classification:** Displays Set Type (Benchmark, Validation, etc.) and Source Module attribution.
- **Statistics:** High-level metrics for the set (Storage used, Processing status).

### 2. Images Tab
- **Upload Zone:** Compact drag-and-drop area (Slate 900 dashed border) for file selection that clearly indicates a maximum image size of 1MB, accompanied by a real-time queue manager with "Benchmark Pulse" styling.
- **Asset Grid:** A 4-6 column responsive grid of image thumbnails, featuring high-density data pagination.
- **Metadata Sheet:** Clicking on an image opens a side sheet revealing the filename, dimensions, and other details.
- **Selection:** Ability to multi-select images for batch actions.

### 3. Settings Tab
- **Configuration:** Form fields for Privacy settings (Private/Global), Encryption toggles, Tonal optimization, and Tagging.
- **Actions:** "Save Changes" and "Archive Set" buttons.

## Interaction Rules
- **Tab Switching:** Instantaneous state change without full page reload.
- **Consistency:** All tabs must maintain the "Kinetic Intelligence" aesthetic (rounded 24px cards, editorial spacing).
