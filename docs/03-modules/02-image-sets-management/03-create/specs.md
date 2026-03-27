## Visual Assets
- **Interactive Layout:** [create-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/03-create/stitch_ui/create-light.html)
- **High-Resolution Preview:** [create-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/03-create/stitch_ui/create-light.png)
- **Filled State Layout:** [create-filled-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/03-create/stitch_ui/create-filled-light.html)
- **Filled State Preview:** [create-filled-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/03-create/stitch_ui/create-filled-light.png)
- **Loading State Layout:** [create-loading-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/03-create/stitch_ui/create-loading-light.html)
- **Loading State Preview:** [create-loading-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/03-create/stitch_ui/create-loading-light.png)
- **Success State Layout:** [create-success-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/03-create/stitch_ui/create-success-light.html)
- **Success State Preview:** [create-success-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/03-create/stitch_ui/create-success-light.png)

## Overview
A streamlined entry form for initializing new Image Test Sets. This page acts as the first step in the data ingestion pipeline, focusing on core metadata before redirecting to the multi-tab management workspace.

## Visual Requirements
- **Layout:** Dashboard Layout (Fixed Sidebar + Top Navigation).
- **Sidebar State:** Highlight "Image Sets" menu item (**Vivid Orange #EA580C**).
- **Breadcrumb:** `Home` > `Image Sets` > `Create`
- **Tone:** Kinetic Intelligence (Slate 50/950 foundation, Vivid Orange accents, No-Line rule).

## Functional Components

### 1. Basic Information
- **Name Field:** Text input for the set's display name (Required).
- **Description Area:** Multi-line text area for contextual notes.

### 2. Classification
- **Set Type (Dropdown):** Options include "Benchmark", "Validation", "Training", and "Specialized".
- **Source Module:** Attribution to specific AI modules if applicable.

### 3. Permissions & Visibility
- **Visibility Toggle:** Private (Owner-only) vs. Global (Shared with team).
- **Encryption Opt-in:** Toggle for high-security data handling.

## Interaction Rules
- **Primary CTA:** Clicking "Create & Upload Assets" navigates the user to the **Details** page for the newly created set, with the **Images** tab active by default to encourage immediate asset population via the drag-and-drop zone.
- **Secondary CTA:** Clicking "Cancel" redirects back to the **Image Sets Listing** page.
