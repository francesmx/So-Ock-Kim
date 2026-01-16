# So-Ock Kim

A personal portfolio website for So-Ock Kim, concert violinist.

## Overview

A single-page portfolio featuring:

- **Hero** – Full-screen concert photography with animated intro
- **Biography** – Background and career highlights
- **Repertoire** – Performance repertoire
- **Reviews** – Press quotes and testimonials
- **Contact** – Booking inquiries

## Tech Stack

- React 19 with TypeScript
- Vite for development and bundling
- Tailwind CSS v4 for styling
- Framer Motion for animations

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | TypeScript type checking |

## Project Structure

```
├── client/
│   ├── public/           # Static assets
│   │   └── attached_assets/  # Images
│   └── src/
│       ├── components/   # React components
│       ├── lib/          # Utilities
│       └── pages/        # Page components
└── dist/                 # Production build output
```

## Deployment

Build the site and deploy the `dist` folder to any static hosting:

```bash
npm run build
```

Works with Vercel, Netlify, GitHub Pages, or any static file host.

## License

MIT
