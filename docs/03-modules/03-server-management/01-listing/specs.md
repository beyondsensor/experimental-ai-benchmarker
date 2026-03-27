## Visual Assets
- **Layout (Data Table):** [listing-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/03-server-management/01-listing/stitch_ui/listing-light.html) | [listing-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/03-server-management/01-listing/stitch_ui/listing-light.png)
- **Layout (Side Sheet Overlay):** [listing-sheet-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/03-server-management/01-listing/stitch_ui/listing-sheet-light.html) | [listing-sheet-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/03-server-management/01-listing/stitch_ui/listing-sheet-light.png)

## Overview
The Listing page provides a high-level view of all configured AI Servers (Ollama Instances) available to run benchmarking tests. It acts as the command center for monitoring server health and initiating new connections.

## Visual Requirements
- **Layout:** Dashboard Layout (Fixed Sidebar + Top Navigation).
- **Sidebar State:** Highlight "Compute" menu item (**Vivid Orange #EA580C**).
- **Breadcrumb:** `Home` > `Compute`
- **Tone:** Kinetic Intelligence (Slate 50 background, 24px rounded Surface cards, No-Line rule).

## Functional Components

### 1. Page Header
- **Title:** Servers
- **Description:** Manage your connected Ollama instances for benchmark execution.
- **Global Action:** Primary button labeled "Add Server" (Vivid Orange).

### 2. Status Overview (Optional Top Row)
- **Metrics Group:** Quick statistics on health (e.g., "2 Online / 1 Offline").

### 3. Server Inventory Grid/Table
- **Data Display:** A list or table representing configured servers.
- **Columns/Data Points:**
  - **Server Name:** A friendly identifier (e.g., "Local GPU Cluster").
  - **Endpoint URL:** The HTTP/IP address, visibly **masked** for security (e.g., `http://192.***.***.100:11434` or `••••••••••`).
  - **Hardware Pipeline:** A sub-label or badge displaying the primary compute power (e.g., "RTX 4090 • 64GB RAM").
  - **Status:** A dynamic chip indicating connection health ("Online" in tertiary Gold/Green, or "Offline" in error Red).
  - **Loaded Models:** A simple numeric count (e.g., "2 Models").
- **Row Actions:**
  - "Ping" (Ghost Icon)
  - "Details" (Ghost Icon - Triggers the Side Sheet)
  - "Disconnect" (Ghost Icon, destruct action)

## Interaction Rules
- Clicking on a server row or "Details" explicitly slides open the **Details Side Sheet** overlay without navigating away from the page.
- The Side Sheet includes Node Telemetry, Installed Models list, and an explicit **Pull New Model** input field to enter a model identifier (e.g., `llama3:8b`) prior to fetching.
- Clicking "Add Server" routes the user to the **Create** page.
