# Requirement: Sign In Page

## Visual Assets
- **Interactive Layout (Light):** [sign-in-light.html](file:///D:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/01-sign-in/stitch_ui/sign-in-light.html) | [sign-in-light.png](file:///D:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/01-sign-in/stitch_ui/sign-in-light.png)
- **Interactive Layout (Dark):** [sign-in-dark.html](file:///D:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/01-sign-in/stitch_ui/sign-in-dark.html) | [sign-in-dark.png](file:///D:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/01-sign-in/stitch_ui/sign-in-dark.png)


## Functional Requirements
- **Authentication:** Standard Email and Password authentication.
- **Validation:** 
    - Email: Must be a valid email format.
    - Password: Required field.
- **Actions:**
    - **Sign In:** Submits credentials and redirects to Dashboard on success.
    - **Forgot Password?:** Redirects to the Forget Password module.
    - **Create Account:** Redirects to the registration flow.

## Visual Specifications
- **Layout:** [Auth Layout (Split-screen)](file:///d:/dev/experimental-ai-benchmarker/docs/02-layouts/auth-layout/specs.md)
- **Primary CTA:** "Sign In" (Vivid Orange #EA580C).
- **Secondary CTA:** "Create account" (Tertiary link).
- **Branding:** Left panel must show active optimization metrics (Llama-3-70B-Instruct).

## Traceability
- **Parent Module:** [Access Control](file:///d:/dev/experimental-ai-benchmarker/docs/03-modules/01-access-control/manifest.json)
- **Layout Reference:** [stitch_ui/auth-light.html](file:///d:/dev/experimental-ai-benchmarker/docs/02-layouts/auth-layout/stitch_ui/auth-light.html)
