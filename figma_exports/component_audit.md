# Component & interaction audit – Dashboard Login

| Figma element | React component | Notes |
|---|---|---|
| Username field | `TextInput` / `TextField` | left icon, uppercase placeholder, focus ring |
| Password field | `TextInput` / `TextField` | left icon, password type |
| Login button | `Button` | primary, loading + disabled |
| Forgot password? | link | inline link button styled as link |
| Background | `login-bg.svg` | combined background SVG from exported shapes |

## Interaction states
- Inputs: default, focused, error, disabled
- Button: default, hover, active, disabled, loading
- Link: default + hover underline, focus visible outline

