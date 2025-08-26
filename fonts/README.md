# Fonts Directory

This directory contains font files and documentation for the Delta State CNG Mass Transit Initiative presentation.

## Font Usage

The presentation uses the following font stack:

### Primary Fonts (Google Fonts)
- **Inter**: Used for body text and general content
- **Poppins**: Used for headings and titles

### Fallback Fonts
- Segoe UI (Windows)
- Tahoma
- Geneva
- Verdana
- sans-serif

## Font Loading

Fonts are loaded via Google Fonts CDN in the HTML head section:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## CSS Font Variables

Font families are defined in CSS variables for easy maintenance:

```css
:root {
  --font-primary: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-heading: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

## Font Weights

- **Inter**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Poppins**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

## Performance Considerations

- Fonts are preconnected for faster loading
- Fonts are loaded with `display=swap` for better performance
- Fallback fonts ensure content is visible while custom fonts load

## Accessibility

- Font sizes are responsive and meet accessibility guidelines
- High contrast mode support for better readability
- Reduced motion support for users with vestibular disorders
