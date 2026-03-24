# Requirement: 2FA (MFA) Verification

## Visual Assets
- **Interactive Layout (Light):** [mfa-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/02-mfa/stitch_ui/mfa-light.html) | [mfa-light.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/02-mfa/stitch_ui/mfa-light.png)
- **Interactive Layout (Dark):** [mfa-dark.html](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/02-mfa/stitch_ui/mfa-dark.html) | [mfa-dark.png](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/02-mfa/stitch_ui/mfa-dark.png)


## Overview

A secondary layer of security for the AI Benchmarker, required for all administrator and high-compute accounts.

## Functional Requirements

- **Verification Method:** 6-digit PIN (Digit-only code).
- **Logic:**
  - Automatically focus the first input box on load.
  - Auto-submit when all 6 digits are entered.
- **Actions:**
  - **Verify:** Validates the pin; redirects to the intended destination on success.
  - **Resend Code:** Triggers a new PIN delivery; implements a 60-second cooldown timer.

## Visual Specifications

- **Layout:** [Auth Layout (Split-screen)](file:///d:/dev/experimental-ai-benchmarker/docs/02-layouts/auth-layout/specs.md)
- **PIN Input:** Specialized 6-box numeric input group.
- **CTA:** "Verify" (Vivid Orange #EA580C).

## Traceability

- **Parent Module:** [Access Control](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/manifest.json)
- **Layout Reference:** [stitch_ui/auth-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/02-layouts/auth-layout/stitch_ui/auth-light.html)
