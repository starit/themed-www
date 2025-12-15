# Themed Labs Website

Official website for Themed Labs — a research studio connecting content creators with mechanism designers.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Typography**: IBM Plex Mono, IBM Plex Sans
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Design System

### Colors

The site uses a strict neutral palette:

| Token | Hex | Usage |
|-------|-----|-------|
| `surface-000` | `#0a0a0a` | Background |
| `surface-050` | `#111111` | Elevated surfaces |
| `surface-100` | `#1a1a1a` | Cards |
| `surface-300` | `#2e2e2e` | Borders |
| `text-primary` | `#e8e8e8` | Primary text |
| `text-secondary` | `#a0a0a0` | Secondary text |
| `text-tertiary` | `#6b6b6b` | Muted text |

### Typography

- **Display**: 4rem / 1.1 line-height
- **Heading 1**: 2.5rem / 1.2 line-height
- **Heading 2**: 1.5rem / 1.3 line-height
- **Body**: 1rem / 1.6 line-height
- **Small**: 0.875rem / 1.5 line-height
- **Caption**: 0.75rem / 1.5 line-height + tracking

### Grid

12-column editorial grid with `1.5rem` gaps. Responsive breakpoints:
- Mobile: 4 columns
- Tablet: 8 columns
- Desktop: 12 columns

## Project Structure

```
src/
└── app/
    ├── globals.css    # Global styles + Tailwind directives
    ├── layout.tsx     # Root layout with fonts
    └── page.tsx       # Main page with all sections
```

## Sections

1. **Hero** — Name, slogan, minimal supporting text
2. **What We Do** — Core activities and services
3. **What We Don't Do** — Clear boundaries
4. **Projects** — Modular project cards
5. **About** — Philosophy statement
6. **Footer** — Navigation and contact

## License

All rights reserved.


