# Bug 2: Light Mode Text Not Visible — Dark Mode Conflict

## 📋 Summary
Text in the Hero section and other components was invisible or very hard to read when the site was switched to Light Mode.

## 🔍 How to Find It
- Toggle the theme from Dark to Light using the navbar toggle button.
- Hero text (name, title, description) appeared nearly invisible — white text on a white/light background.
- The issue persisted even after setting explicit light-mode text colors.

## 🐛 Root Cause
Two separate causes were found:

### Cause 1 — `MantineProvider` Overriding CSS Variables
`MantineProvider` was imported in `app/layout.tsx` and it globally injected its own CSS custom properties (e.g., `--mantine-color-text`) that were overriding Tailwind's dark mode color variables. This caused text colors to be forced dark even in light mode contexts.

### Cause 2 — Tailwind v4 Custom Variant for Dark Mode
Tailwind CSS v4 uses `prefers-color-scheme` media queries by default for dark mode. However, `next-themes` controls dark mode via a `.dark` **class** on `<html>`. The two systems were in conflict — Tailwind would apply dark styles based on OS preference, not the user's toggle.

```css
/* ❌ Tailwind v4 default — responds to OS preference */
@media (prefers-color-scheme: dark) { ... }

/* ✅ Fix — respond to .dark class set by next-themes */
@custom-variant dark (&:where(.dark, .dark *));
```

## 🛠️ Approach to Fix
1. **Remove `MantineProvider`** from `app/layout.tsx` and `ColorSchemeScript` — these were not needed and were polluting global CSS.
2. **Add the `@custom-variant`** directive in `globals.css` to make Tailwind's `dark:` prefix respond to the `.dark` class instead of the OS media query.

```css
/* globals.css */
@custom-variant dark (&:where(.dark, .dark *));
```

## ✅ Lesson Learned
- When using `next-themes` with **Tailwind CSS v4**, you must explicitly configure the dark mode variant to use class-based switching.
- Avoid installing UI component libraries (like Mantine) unless you fully understand how they inject global styles — they can silently override your design system.
