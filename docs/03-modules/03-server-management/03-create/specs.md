## Visual Assets
- **Layout:** [create-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/03-server-management/03-create/stitch_ui/create-light.html)
- **High-Resolution Preview:** [create-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/03-server-management/03-create/stitch_ui/create-light.png)

## Overview
A streamlined entry form for connecting a new AI Server (Ollama Instance). This page acts as the initialization step, focusing on establishing the endpoint connection before redirecting to the detailed management workspace.

## Visual Requirements
- **Layout:** Dashboard Layout (Fixed Sidebar + Top Navigation).
- **Sidebar State:** Highlight "Compute" menu item (**Vivid Orange #EA580C**).
- **Breadcrumb:** `Home` > `Compute` > `Add`
- **Tone:** Kinetic Intelligence (Slate 50 background, 24px Surface cards).

## Functional Components

### 1. Connection Details Card
- **Server Alias/Name Field:** Text input for a friendly display name (Required).
- **Endpoint URL:** Text input (e.g., `http://127.0.0.1:11434`) (Required).
- **API Key / Token:** Ghost-bordered text input (Optional, for secured nodes).

### 2. Hardware Specifications Card
- **GPU Configuration:** Dynamic list or text area to allow multiple GPU entries (e.g., `2x NVIDIA RTX 4090 24GB` or adding separate rows for heterogeneous setups).
- **Total System RAM:** Text or number input (e.g., `64GB DDR5`).
- **CPU Configuration:** Text input (e.g., `AMD Ryzen 9 7950X`).
- **Auto-Detect Option:** A Ghost button to "Auto-Detect via API" allowing the system to pull specs directly from the endpoint hardware if possible.

### 3. Advanced Settings Card (Optional Toggle)
- **Timeout Threshold:** Dropdown or number input for max connection timeout.
- **Concurrent Request Limit:** Numeric configuration.

## Interaction Rules
- **Primary CTA:** "Test Connection & Save" (Vivid Orange). Clicking this routes the user to the new Server's **Details** page upon a successful ping, or shows an inline error if the node is unreachable.
- **Secondary CTA:** "Cancel" (Ghost text), routing back to the Servers Listing page.
- As this is a pure configuration form, omit any Tab Navigation.
