# Page Specification: AI Benchmarker Dashboard

## Overview

High-fidelity dashboard for the AI Benchmarker system, designed for high-density data visualization and agentic monitoring.

## Visual Assets

- **Interactive Layout:** [dashboard-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/02-layouts/dashboard-layout/dashboard-light.html)
- **High-Resolution Preview:** [dashboard-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/02-layouts/dashboard-layout/dashboard-light.png)
- **Component Library (Light):** [component-library.html](file:///d:/dev/experimental-ai-benchmarker/docs/02-layouts/dashboard-layout/component-library.html) | [component-library.png](file:///d:/dev/experimental-ai-benchmarker/docs/02-layouts/dashboard-layout/component-library.png)
- **Component Library (Dark):** [component-library-dark.html](file:///d:/dev/experimental-ai-benchmarker/docs/02-layouts/dashboard-layout/component-library-dark.html) | [component-library-dark.png](file:///d:/dev/experimental-ai-benchmarker/docs/02-layouts/dashboard-layout/component-library-dark.png)

## Design System

- **Primary Accent:** Vivid Orange (`#EA580C`)
- **Background Layer:** Slate 50 (`#F8FAFC`)
- **Surface Layer:** White (`#FFFFFF`) with 1px border elevation (`#E2E8F0`).
- **Typography:** Inter / Sans-serif.
- **Rounding:** 24px (Large Cards), 12px (Medium Elements).

## Layout Architecture

- **Global Gap:** 24px consistent spacing.
- **Sidebar:** Fixed 280px width, organized into three distinct navigation groups:
  1. **Platform:** Tests
  2. **Data Management:** Image Sets, Test Plan, Compute.
  3. **Account:** Settings, Billing, API Keys, Web Hooks.
- **Grid Sections:**
  - **Stat Metrics:** 4-column horizontal flex row.
  - **Main Analytics:** 2:1 ratio (Project Analytics : Reminders).
  - **Utility Widgets:** 1:1 ratio (Team Collaboration : Project Progress Gauge).

## Component Logic

- **Trend Indicators:** Dynamic color coding (Green/Red) within stat cards.
- **Progress Gauge:** Semi-circular visualization showing 78% fill.
- **Team List:** Individual avatars with status identifiers (Active, Offline, Busy).

---
