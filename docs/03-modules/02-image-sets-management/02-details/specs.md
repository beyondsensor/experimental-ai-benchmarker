# Specification: Image Set Details (Multi-Tab)

## Visual Assets
- **Interactive Layout:** [details-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/02-details/stitch_ui/details-light.html)
- **High-Resolution Preview:** [details-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/02-details/stitch_ui/details-light.png)

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
- **Asset Grid:** A 4-6 column responsive grid of image thumbnails.
- **Metadata Overlay:** Hovering over an image reveals filename and dimensions.
- **Selection:** Ability to multi-select images for batch actions.

### 3. Upload Tab
- **Drag-and-Drop Zone:** Large, dashed-border area (Slate 900) for file selection.
- **Queue Manager:** Real-time upload progress bars with "Benchmark Pulse" styling.

### 4. Settings Tab
- **Configuration:** Form fields for Privacy settings (Private/Global), Encryption toggles, Tonal optimization, and Tagging.
- **Actions:** "Save Changes" and "Archive Set" buttons.

## Interaction Rules
- **Tab Switching:** Instantaneous state change without full page reload.
- **Consistency:** All tabs must maintain the "Kinetic Intelligence" aesthetic (rounded 24px cards, editorial spacing).
