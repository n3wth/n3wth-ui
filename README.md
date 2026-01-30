# @n3wth/ui

[![npm version](https://img.shields.io/npm/v/@n3wth/ui.svg)](https://www.npmjs.com/package/@n3wth/ui)
[![npm downloads](https://img.shields.io/npm/dm/@n3wth/ui.svg)](https://www.npmjs.com/package/@n3wth/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Atomic design system for Newth sites. Flat, minimal, iOS-inspired. No shadows, no glows, just clean glass morphism.

**Demo**: [ui.newth.ai](https://ui.newth.ai)

## Installation

```bash
npm install @n3wth/ui
```

### Peer Dependencies

Requires React 18+ and React DOM:

```bash
npm install react react-dom
```

## Quick Start

```tsx
import { Button, Card, Nav } from '@n3wth/ui'
import '@n3wth/ui/styles'
```

### Tailwind CSS Preset

Include the design tokens in your Tailwind config:

```js
// tailwind.config.js
export default {
  presets: [require('@n3wth/ui/tailwind')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@n3wth/ui/dist/**/*.js'
  ]
}
```

## Components

### Atoms

| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, ghost, glass variants with loading state |
| `Badge` | Default, sage, coral, mint, gold, outline variants |
| `Input` | Text input with glass variant, icons, and error state |
| `Icon` | SVG icons via iconoir-react |
| `AnimatedText` | Text with entrance animations |
| `HamburgerIcon` | Animated menu icon |
| `NoiseOverlay` | Subtle noise texture overlay |
| `ScrollIndicator` | Scroll progress indicator |

### Molecules

| Component | Description |
|-----------|-------------|
| `Card` | Container with header, content, footer. Glass/interactive variants |
| `NavLink` | Navigation link with underline/pill styles |
| `CommandBox` | Copy-to-clipboard code display |
| `ThemeToggle` | Dark/light mode toggle |
| `MobileDrawer` | Slide-out mobile navigation |

### Organisms

| Component | Description |
|-----------|-------------|
| `Nav` | Fixed navigation with mobile menu and theme toggle |
| `Hero` | Hero section with badge, title, description, CTAs |
| `Section` | Content section wrapper with header |
| `Footer` | Multi-column footer with sections |

## Hooks

| Hook | Description |
|------|-------------|
| `useTheme` | Dark/light theme management with system preference detection |
| `useMediaQuery` | Responsive breakpoint detection |
| `useKeyboardShortcuts` | Keyboard shortcut handler |
| `useReducedMotion` | Respects user's motion preferences |

## Development

```bash
npm run dev          # Watch mode for library
npm run demo         # Run demo app at localhost:5173
npm run build        # Build library to dist/
npm run demo:build   # Build demo for Vercel
npm run lint         # Lint
```

## Publishing

```bash
npm run release:patch   # 0.3.2 → 0.3.3
npm run release:minor   # 0.3.2 → 0.4.0
npm run release:major   # 0.3.2 → 1.0.0
```

Single command: bumps version, commits, pushes, tags, creates GitHub release. GitHub Actions publishes to npm via OIDC.

## Project Structure

```
src/
  atoms/        # Button, Badge, Input, Icon, etc.
  molecules/    # Card, NavLink, CommandBox, etc.
  organisms/    # Nav, Hero, Footer, Section
  hooks/        # useTheme, useMediaQuery, etc.
  tokens/       # Design tokens (colors, typography)
demo/           # Demo app (ui.newth.ai)
```

## License

MIT
