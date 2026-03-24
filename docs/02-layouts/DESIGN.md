# DESIGN.MD: Dashboard Implementation System

## 1. Vision & Identity

This document serves as the **Design DNA blueprint** for the Antigravity agentic workflow, sourcing visual tokens and component structures directly from **Google Stitch**.

- **Primary Brand Color:** `Vivid Orange` (#F97316)
- **Design Paradigm:** Card-based modularity with high-radius corners.
- **Engine:** Antigravity (Agentic Layout & IDE Orchestration).
- **Source:** Google Stitch Project Canvas.

---

## 2. Adaptive Theming (Light & Dark Mode)

The system must dynamically toggle tokens based on user preference or system settings.

| Token Group        | Light Mode (Default) | Dark Mode (Applied)  | Application                    |
| :----------------- | :------------------- | :------------------- | :----------------------------- |
| **$primary**       | #EA580C (Orange 600) | #F97316 (Orange 500) | Main CTAs, Active States       |
| **$primarySubtle** | #FFF7ED              | #431407              | Hover backgrounds, Active tabs |
| **$bg**            | #F8FAFC (Slate 50)   | #020617 (Slate 950)  | Main application backdrop      |
| **$surface**       | #FFFFFF              | #0F172A (Slate 900)  | Dashboard widgets, Sidebar     |
| **$text-main**     | #1E293B              | #F8FAFC              | Primary headlines/content      |
| **$text-muted**    | #64748B              | #94A3B8              | Subtitles, helper text         |

---

## 3. Layout Architecture (Antigravity Logic)

Antigravity handles the spatial distribution of the Stitch-defined components using a **Fluid-Flex Grid**.

### A. Global Shell

- **Sidebar (Fixed):** 280px width. Vertical flex container for Navigation links.
- **Main Content (Fluid):** `flex-1`. Contains the Dashboard header and widget grid.
- **Global Gap:** Consistent `24px` spacing between all widgets.

### B. Widget Specifications

1.  **Stat Row:** 4-column horizontal flex. Each card includes a `TrendIndicator` and a `CircularIcon`.
2.  **Analytics Section (2:1 Ratio):**
    - **Project Analytics:** Large bar chart using Orange gradients.
    - **Reminders:** Actionable list with `$primary` button accents.
3.  **Utility Row (1:1 Ratio):**
    - **Team Collaboration:** Vertical list of user avatars with status tags.
    - **Project Progress:** Semi-circular gauge (Orange fill) centered in a `$surface` card.

---

## 4. Component Definitions

Use these Stitch-mapped definitions for Antigravity code generation:

- **Corner Radius:** All cards and buttons must use `24px` (Large) or `12px` (Medium).
- **Elevation:** \* Light Mode: Soft 1px border (#E2E8F0).
  - Dark Mode: No border; 4% luminosity increase on `$surface` vs `$bg`.
- **Typography:** Sans-serif (Inter/Geist). Headlines at `Semi-Bold (600)`.

---

## 5. Implementation Workflow (Antigravity Prompts)

To initiate the build, provide the following instruction to your Antigravity Agent:

> "Agent: Access the Google Stitch Project. Initialize a dashboard UI using the blueprint in DESIGN.MD. Prioritize the **Vivid Orange** color system for all active states and progress indicators. Ensure the layout handles light/dark mode transitions via the `$surface` and `$bg` tokens. Implement the sidebar first, followed by the flex-grid stat cards."

---

## 6. Success Metrics

- **Accessibility:** All orange-on-white and orange-on-dark-slate text must pass WCAG AA contrast.
- **Fluidity:** Layout must remain functional from 1024px to 4K resolutions.
