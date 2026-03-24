# Requirement: Reset Password (Update)

## Visual Assets
- **Interactive Layout (Light):** [reset-password-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/04-reset-password/stitch_ui/reset-password-light.html) | [reset-password-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/04-reset-password/stitch_ui/reset-password-light.png)
- **Interactive Layout (Dark):** [reset-password-dark.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/04-reset-password/stitch_ui/reset-password-dark.html) | [reset-password-dark.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/04-reset-password/stitch_ui/reset-password-dark.png)


## Overview
The secure landing page where users set their new account credentials after verifying their reset token.

## Functional Requirements
- **Inputs:** New Password, Confirm New Password.
- **Validation:** 
    - Strength: Minimum 10 characters, 1 special, 1 number.
    - Match: "Confirm" field must exactly match the "New" field.
- **Actions:**
    - **Update Password:** Finalizes the credential change and clears all active sessions.
    - **Back to Sign In:** Redirection link after successful update.

## Visual Specifications
- **Layout:** [Auth Layout (Split-screen)](file:///d:/dev/experimental-ai-benchmarker/docs/02-layouts/auth-layout/specs.md)
- **Content:** Double-password input form.

## Traceability
- **Parent Module:** [Access Control](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/manifest.json)
- **Layout Reference:** [stitch_ui/auth-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/02-layouts/auth-layout/stitch_ui/auth-light.html)
