# Component: Navbar

## What it does
Sticky responsive navbar with mobile hamburger toggle using CSS media queries.

## Fix applied
- Inline styles cannot handle media queries
- Moved to external CSS file (Navbar.css)
- Hamburger now shows on screens under 768px
- Mobile menu toggles with .open class

## Files
- Navbar.js  — component logic
- Navbar.css — responsive styles

## Breakpoint
- Mobile: max-width 768px → shows hamburger
- Desktop: min-width 769px → shows horizontal menu

## Reference links
- https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries
- https://nextjs.org/docs/app/building-your-application/styling/css

## Date saved
2024-06-01