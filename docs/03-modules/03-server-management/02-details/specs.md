## Visual Assets
- **Layout (Model Inventory):** [details-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/03-server-management/02-details/stitch_ui/details-light.html)
- **High-Resolution Preview (Models):** [details-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/03-server-management/02-details/stitch_ui/details-light.png)
- **Layout (Hardware & Telemetry):** [details-telemetry-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/03-server-management/02-details/stitch_ui/details-telemetry-light.html)
- **High-Resolution Preview (Hardware):** [details-telemetry-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/03-server-management/02-details/stitch_ui/details-telemetry-light.png)
- **Layout (Endpoint):** [details-endpoint-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/03-server-management/02-details/stitch_ui/details-endpoint-light.html)
- **High-Resolution Preview (Endpoint):** [details-endpoint-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/03-server-management/02-details/stitch_ui/details-endpoint-light.png)

## Overview

The Dedicated Details Page provides a comprehensive, full-screen workspace to manage a specific AI Server Node (Ollama Instance). It expands upon the quick-view Side Sheet by offering a deep Tabbed Navigation interface for configuration, health monitoring, and benchmark history.

## Visual Requirements

- **Layout:** Dashboard Layout (Fixed Sidebar + Top Navigation) with a unified Sub-Navigation Tab bar.
- **Sidebar State:** Highlight "Compute" menu item (**Vivid Orange #EA580C**).
- **Breadcrumb:** `Home` > `Compute` > `Primary Local RTX`
- **Tone:** Kinetic Intelligence (Slate 50 background, 24px Surface cards).

## Functional Components

### 1. Page Header (Persistent Context)

- **Title:** Primary Local RTX (Dynamic based on selected Node)
- **Subtext:** API Endpoint URL (e.g. http://192.168.1.100:11434)

### 2. Tab Navigation

A horizontal sub-header containing the following workspaces:

- **Model Inventory** (Default Active Tab)
- **Hardware & Telemetry**
- **Endpoint Configuration**

### 3. Model Inventory (Active Tab Layout)
- **Top Bar (Above Table):** A dedicated section holding an input field (placeholder `e.g. llama3:8b`) grouped directly with a "Pull New Model" action button.
- **Data Table (Installed Models):**
  - **Header:** Search input (left aligned).
  - **Model Name** (e.g., `llama3:8b`)
  - **Parameters** (e.g., `8B`)
  - **Size** (e.g., `4.7GB`)
  - **Actions** (`Delete` icon)
- **Design Rule:** The table should feel significantly more spacious and detailed than the side sheet variant.

## Interaction Rules

- Clicking on a tab smoothly swaps the active view.
- The "Pull New Model" interaction allows users to type the exact identifier natively on the page.

### 4. Hardware & Telemetry (Tab Layout)
- **Concept:** This view operates as an on-demand monitor. All hardware data (CPU, RAM, GPU capacity and utilization) is dynamically **fetched directly from the Client/Server instance API**.
- **Interactive Action Row:** A row sitting below the tabs and above the cards containing:
  - **Get Hardware Specs:** A button allowing the user to explicitly fetch the physical profile data.
  - **Refresh:** A button (e.g., standard ghost or primary-outline with a refresh icon) to fetch the latest utilization stats.
- **Visuals:** Real-time progress bars or charts illustrating `VRAM Load`, `RAM Load`, alongside a static map of the detected Hardware Profile.

### 5. Endpoint Configuration (Tab Layout)
- **Concept:** A secure form to update how the benchmark application connects to this specific node.
- **Layout:** Full-width cards (taking the entire main content area).
- **Card 1: Connection Details**
  - **Fields:** Node Name, Base URL, API Key/Token (Masked).
  - **Actions:** Test Connection, Save Changes.
- **Card 2: Danger Zone**
  - **Styles:** Distinct background shift or border treatment to signal danger.
  - **Description:** "Once you delete a compute node, all configuration and associated telemetry history will be permanently removed. This action cannot be undone."
  - **Action:** "Delete Compute Node" (Destructive red button).
