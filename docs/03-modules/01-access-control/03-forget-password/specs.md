# Requirement: Forget Password

## Visual Assets
- **Interactive Layout (Light):** [forget-password-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/03-forget-password/stitch_ui/forget-password-light.html) | [forget-password-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/03-forget-password/stitch_ui/forget-password-light.png)
- **Interactive Layout (Dark):** [forget-password-dark.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/03-forget-password/stitch_ui/forget-password-dark.html) | [forget-password-dark.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/03-forget-password/stitch_ui/forget-password-dark.png)


## Overview
Enables users to recover access to their accounts via secure email verification.

## Functional Requirements
- **Input:** Registered email address.
- **Logic:** 
    - Sanity check that the email exists in the system (without leaking security info).
    - Trigger a secure reset token to the primary email.
- **Actions:**
    - **Reset Password:** Sends the recovery email.
    - **Back to Login:** Redirects to the Sign In page.

## Visual Specifications
- **Layout:** [Auth Layout (Split-screen)](file:///d:/dev/experimental-ai-benchmarker/docs/02-layouts/auth-layout/specs.md)
- **Content:** Minimalist form focusing on the email input.
- **Success State:** Swap form for "Check your email" confirmation message on success.

## Traceability
- **Parent Module:** [Access Control](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/manifest.json)
- **Layout Reference:** [stitch_ui/auth-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/02-layouts/auth-layout/stitch_ui/auth-light.html)
