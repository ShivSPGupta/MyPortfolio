# Shiv Shankar Gupta Portfolio

A modern React portfolio built with Vite, Tailwind CSS, Motion, Material UI, EmailJS, and a production-style component/data architecture.

## Features

- Responsive portfolio sections for hero, about, skills, experience, projects, education, and contact
- Categorized skills with icon-based cards
- Project cards with tech stack tags, key features, live previews, and fallback image handling
- Resume modal with PDF viewer, zoom controls, fullscreen mode, and download action
- EmailJS-powered contact form
- SEO metadata, sitemap, robots file, and Vercel SPA rewrite config
- Data-driven structure for easier updates and future scaling

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- Motion
- Material UI
- React Icons
- EmailJS
- React PDF Viewer
- ESLint

## Project Structure

```txt
src/
  components/
    cards/        Reusable card components
    common/       Shared UI components
    layout/       Header, footer, and background layout
    sections/     Main page sections
  data/           Portfolio content and structured data
  hooks/          Reusable React hooks
  utils/          Helper functions
  App.jsx
  main.jsx
```

## Main Data Files

- `src/data/projects.js` controls project cards
- `src/data/skills.jsx` controls skills and icons
- `src/data/experience.js` controls work history
- `src/data/education.js` controls education and certification
- `src/data/socialLinks.jsx` controls social links
- `src/data/hero.js` controls animated hero phrases

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Environment Variables

The contact form uses EmailJS. Create a `.env` file with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Updating Content

Most portfolio content is data-driven. To update projects, skills, experience, education, or social links, edit the matching file in `src/data/`.

Project preview screenshots are generated through Microlink in `src/utils/projectImages.js`. If previews are cached, update:

```js
PROJECT_SCREENSHOT_VERSION
```

## Deployment

This project is ready for Vercel deployment.

- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrite config: `vercel.json`
- SEO files: `index.html`, `public/robots.txt`, `public/sitemap.xml`

After changing your live domain, update the canonical URL, Open Graph URL, robots sitemap URL, and sitemap location.

## Notes

The production build may show warnings from `pdfjs-dist` and large chunks because the resume viewer uses PDF rendering dependencies. The resume modal is lazy-loaded to keep the initial app structure cleaner.
