# Create Test Plan - Specification

## Overview
The Create page allows users to define a new test plan by specifying its focus area, choosing relevant test cases, and setting execution parameters.

## User Interface Elements

### 1. Header Section
- **Title:** Create New Test Plan
- **Primary Actions:** "Save & Close", "Save & Run Now"
- **Secondary Actions:** "Cancel" (Confirmation dialog if form is dirty)

### 2. General Information Section (Card)
- **Name:** Text input (Required)
- **Description:** Text area (Optional)
- **Status:** Initialized to "Draft"

### 3. Module/Server Selection (Card)
- **Target Type:** Dropdown (Module, Individual Server, Server Group)
- **Select Target:** Dynamic select based on Target Type.

### 4. Test Case Selection (Card)
- **Searchable List:** Checkbox list of all available test cases.
- **Filter by Category:** Dropdown (Performance, Security, Reliability)
- **Total Selected:** Counter (e.g., "7 cases selected")

### 5. Advanced Settings (Accordion)
- **Execution Schedule:** CRON input (Optional)
- **Timeout:** Numeric input (ms)
- **Retry Count:** Numeric input (0-5)

## User Interactions
- **Live Validation:** Errors shown for missing name or no test cases selected.
- **Auto-Suggest:** Suggest similar test plans based on the target selection.
- **Progressive Disclosure:** Advanced settings are hidden by default.

## Responsive Design
- **Single Column Layout:** Cards stack vertically on mobile screens.
- **Sticky Actions:** Save/Cancel buttons remain visible at the bottom on smaller devices.
