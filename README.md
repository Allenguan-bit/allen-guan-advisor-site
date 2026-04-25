# Allen Guan - Enoch Wealth Advisor Website

A professional static website for Allen Guan, Private Market Investment Product Sales Consultant at Enoch Wealth.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Professional Branding**: Navy blue and gold color scheme reflecting financial industry standards
- **Product Showcase**: Featured investment products (REITs and MICs) with detailed information pages
- **Contact Integration**: Direct email and phone contact options
- **Enoch Wealth Integration**: Prominent links to the main Enoch Wealth website

## Project Structure

```
client/
  ├── public/          # Static files (favicon, robots.txt)
  ├── src/
  │   ├── pages/       # Page components (Home, Product pages)
  │   ├── components/  # Reusable UI components
  │   ├── App.tsx      # Main app with routing
  │   ├── main.tsx     # React entry point
  │   └── index.css    # Global styles and design tokens
  └── index.html       # HTML template

server/               # Server placeholder (not used in static deployment)
shared/              # Shared types placeholder
package.json         # Project dependencies
vite.config.ts       # Vite build configuration
tsconfig.json        # TypeScript configuration
```

## Getting Started

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
pnpm dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
# or
pnpm build
```

The built files will be in the `dist/` directory.

## Deployment

### Vercel (Recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New → Project"
4. Import your GitHub repository
5. Set Framework Preset to "Other" or "Static"
6. Click "Deploy"

Your site will be live at a `*.vercel.app` URL.

### Other Static Hosts

This is a pure static site (HTML/CSS/JS) and can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

## Customization

### Colors

Edit `client/src/index.css` to modify the color palette:
- Primary (Navy Blue): `oklch(0.35 0.15 260)`
- Accent (Gold): `oklch(0.62 0.2 60)`

### Content

Edit the following files to customize content:
- `client/src/pages/Home.tsx` - Homepage
- `client/src/pages/REITProduct.tsx` - REIT product page
- `client/src/pages/MICProduct.tsx` - MIC product page

### Contact Information

Update contact details in:
- `client/src/pages/Home.tsx`
- `client/src/pages/REITProduct.tsx`
- `client/src/pages/MICProduct.tsx`

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Vite** - Build tool
- **Wouter** - Client-side routing
- **shadcn/ui** - Component library

## License

© 2026 Allen Guan. All rights reserved.
