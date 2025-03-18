# Styles Directory

This directory contains global styles, theme configurations, and styling utilities for the application.

## Structure

- `global.css`: Global CSS styles
- `index.js`: Font exports and other style utilities
- `theme.js`: MUI theme configuration
- `ThemeRegistry.js`: MUI theme provider with Emotion cache setup

## Styling Approach

This project uses a combination of:

1. **MUI Components**: For consistent UI elements following Material Design principles
2. **Emotion Styled Components**: For custom styling with the power of CSS-in-JS
3. **Global CSS**: For base styles and resets

## Best Practices

1. Use MUI's styled API for component styling when possible
2. Keep global CSS minimal and focused on resets and base styles
3. Use the theme for consistent colors, spacing, and typography
4. Create reusable styled components for common patterns
5. Use the sx prop for one-off styling needs