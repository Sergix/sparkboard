# Sparkboard Changelog

This project adheres to semantic versioning.

## [Unreleased]

### Added

- Created CHANGELOG.md to keep up with changes
- Created `InputField` component for form fields
- `TextInput` component for form text input
- `RouteLink` for simple `<a>` elements
- `Label` for form input labels
- `Checkbox` for checkbox inputs
- `CheckboxField` for checkboxes with labels
- `Form` as a container for input elements
- `Login` form page view
- `SectionImage` for regular images loading from `assets/img`
- `Landing` home page
- `Card` as a basic card component
- Declarations for headings in `sass/base.sass`
- `PageFooter`
- Added Sentry integration

### Changed

- `_globals.sass` -> `globals.scss` for multi-line properties
- Images in `assets/` -> `assets/img`
- Broke up `Button` -> `FormButton` and `ActionButton`
- Moved global `html` style decleration -> `App.vue`
- Moved style imports -> `main.js` for Webpack building
- Moved Gelasio font import -> `fonts.scss`

### Removed
