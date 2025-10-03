# Copilot Instructions for Questlist Portfolio

## Project Overview

V### File Organization

- **Assets**: Project images in `src/assets/projectImgs/` (many auto-generated filenames)
- **Icons**: Custom SVG icons in `src/components/icons/` (hand-crafted, not icon library)
- **Fonts**: Custom font classes in `base.css` (sixtyfour-convergence-isr, tomorrow-\*)
- **Blog content**: Individual Vue components, not markdown files

### Brand Assets

- **Logo placement**: Sidebar (desktop) and header (mobile) with click-to-home functionality
- **Image assets**: Use `new URL('@/assets/projectImgs/filename', import.meta.url).href` pattern
- **Contact info**: Centralized in AboutView with support@con-save.com emailportfolio site for **Con-Save Customs** showcasing personal and professional projects. Features responsive design with Element Plus components, custom Tailwind styling, and embedded Godot games. Site serves as both portfolio and company storefront foundation.

## Architecture

### Core Structure

- **App.vue**: Main layout with responsive sidebar (desktop) and hamburger menu (mobile)
- **Router**: Simple file-based routing in `src/router/index.js` with lazy-loaded views
- **Views**: Page-level components (`HomeView`, `BlogPost`, `GameView`, `AboutView`, etc.)
- **Components**: Reusable UI components organized by feature (blog/, icons/, projects/)

### Content Management Pattern

- **Card-based homepage**: `cardWall.vue` implements custom masonry layout with dynamic component loading
- **Blog system**: Dynamic routing `/blog/:slug` loads components from `src/components/blog/` using `defineAsyncComponent`
- **Project cards**: Self-contained cards in `src/components/blog/cards/` that route to full blog posts

## Key Patterns

### Custom Masonry Layout

`cardWall.vue` implements manual masonry positioning with responsive breakpoints:

- Mobile: 100% width (1 column)
- Tablet: 50% width (2 columns)
- Desktop (>1081px): 33.33% width (3 columns)

Uses `layoutMasonry()` function with absolute positioning and column height tracking.

### Responsive Design

- **Custom breakpoint**: `lg: 1081px` instead of standard 1024px
- **Element Plus**: Uses `el-container`, `el-aside`, `el-header` for layout structure
- **Hidden/visible**: `hidden md:flex` and `lg:hidden` patterns for responsive navigation

### Styling System

- **CSS Variables**: Custom brand colors `--isr-c-red: #F93422` and `--isr-c-bg-red: #9C3F4D44`
- **Element Plus theming**: Imports dark theme variables, customizes dropdown styles
- **Tailwind + Element Plus**: Combines utility classes with component library

### Game Integration

- **Static hosting**: Godot games in `public/Lightsout/` directory
- **Iframe embedding**: `GameView.vue` embeds games with CORP headers in vite config
- **WASM Compression**:
  - Production builds use compressed `.wasm.gz` files for reduced download size
  - Client-side automatic decompression using browser's `DecompressionStream` API
  - Build process creates `.wasm.gz` from `.wasm` - only compressed files are deployed
  - Uncompressed `.wasm` files are never uploaded to production
  - Engine loading code in `lightsout.js` handles decompression transparently

### Image Zoom Modal System

- **Blog images**: Clickable images open in full-screen modal with zoom functionality
- **Mouse wheel zoom**: Scale from 0.5x to 5x with smooth transitions
- **Implementation**: `causeway_THT.vue` demonstrates the pattern with `selectedImage` ref and `handleWheel` function

### Brand Identity

- **Company**: Con-Save Customs (D&D reference - Constitution saving throw)
- **Contact**: support@con-save.com
- **Logo**: Custom SVG component `LogoConsave.vue` with extensive path data
- **Typography**: Sixtyfour Convergence font for headers, Tomorrow font family for body text

## Development Workflow

### Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint with auto-fix
npm run format       # Prettier formatting
```

### File Organization

- **Assets**: Project images in `src/assets/projectImgs/` (many auto-generated filenames)
- **Fonts**: Custom font classes in `base.css` (sixtyfour-convergence-isr, tomorrow-\*)
- **Blog content**: Individual Vue components, not markdown files

### Build Configuration

- **Vite**: Custom asset naming without hashes for consistent file names
- **CORP headers**: Required for embedded game content
- **Path aliases**: `@/` maps to `src/`

## Code Conventions

### Component Patterns

- Use `<script setup>` composition API exclusively
- Import components at component level, not globally registered
- Self-contained card components with embedded routing logic
- Custom SVG icons as Vue components rather than external icon libraries

### Image Handling

- Blog images: Clickable with zoom modal functionality (`selectedImage` ref pattern)
- Card thumbnails: Grid layouts with responsive image sizing
- Asset imports: Use `new URL('@/assets/...', import.meta.url).href` for dynamic imports

### Navigation

- Programmatic routing: `@click="$router.push('/')"` pattern
- Mobile menu: Element Plus dropdown with manual toggle state management
- Router-link styling: Custom active states with CSS variables

### Asset Management

- Project images use `@/assets/projectImgs/` imports with auto-generated filenames
- Custom logo and icons in main assets and components/icons directories
- Embedded game assets served from public directory

## External Dependencies

- **Element Plus**: Primary UI component library
- **Tailwind**: Utility-first styling with custom config
- **Vue Router**: SPA routing with lazy loading
- **Godot exports**: WebAssembly games in public directory
