# Test Plans - List View

## Overview
The List View provides a comprehensive overview of all created test plans within the BeyondSecure platform. Users can search, filter, and perform bulk actions on test plans.

## User Interface Elements

### 1. Header Section
- **Title:** Test Plans
- **Primary Action:** "Create Test Plan" button (Links to `/test-plans/create`)
- **Secondary Actions:** "Import Test Plan", "Export All"

### 2. Filter & Search Bar
- **Search:** Placeholder "Search by name, ID, or creator..."
- **Filters:**
    - **Status:** All, Active, Draft, Archived
    - **Created By:** Multi-select dropdown
    - **Date Range:** Date picker for creation date
- **View Toggle:** Table View (default), Grid View

### 3. Test Plans Table
| Column | Description | Sortable |
| --- | --- | --- |
| Name | Link to Details page with test plan icon | Yes |
| Focus Area | Module or server group the plan targets | Yes |
| Status | Badge (e.g., Green for Active, Grey for Draft) | Yes |
| Test Cases | Count of associated test cases | Yes |
| Last Executed | Date/Time of last run | Yes |
| Success Rate | Percentage (bar indicator) | Yes |
| Actions | Edit, Duplicate, Archive, Delete | No |

## User Interactions
- **Row Click:** Navigates to the Test Plan Details page.
- **Bulk Actions:** Select multiple rows to Batch Archive or Delete.
- **Hover:** Displays a quick preview tooltip with the description.

## Responsive Design
- **Mobile:** Horizontal scroll for table; Search and Filter collapse into a drawer.
