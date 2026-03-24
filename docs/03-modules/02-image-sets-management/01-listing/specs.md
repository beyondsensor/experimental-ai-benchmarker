## Visual Assets
- **Interactive Layout:** [listing-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/01-listing/stitch_ui/listing-light.html)
- **High-Resolution Preview:** [listing-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/02-image-sets-management/01-listing/stitch_ui/listing-light.png)

## Overview
The primary repository view for all Image Test Sets registered in the AI Benchmarker system. This page allows administrators to browse, search, and manage experimental data collections.

## Visual Requirements
- **Layout:** Dashboard Layout (Fixed Sidebar + Top Navigation).
- **Sidebar State:** Highlight "Image Sets" menu item (**Vivid Orange #EA580C**).
- **Breadcrumb:** `Home` > `Image Sets`
- **Tone:** Kinetic Intelligence (Slate 50/950 foundation, Vivid Orange accents, No-Line rule).

## Functional Components

### 1. Header & Actions
- **Search Bar:** Full-width input for filtering by set name or ID.
- **Filter Gallery:** Multi-select pill-based filter or dropdown for searching by specific image properties (e.g., Format, Label, Attribution).
- **CTA:** "Create New Set" primary button (Vivid Orange).

### 2. Image Sets Table
A data-heavy table utilizing the "No-Line" rule (tonal row separation):
- **ID:** Primary identifier.
- **Name:** Descriptive title of the image set.
- **Created Date:** Timestamp of creation.
- **Image Count:** Numeric value of assets within the set.
- **Actions:** Consolidated "Actions" button with a dropdown menu (View Details, Edit, Delete).

## Interaction Rules
- Clicking a row or the "View Details" icon redirects to the **Image Set Details** page.
- Hover states on rows use `surface-container-low` for subtle highlighting.
