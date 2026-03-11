# CSE Department Events Website

A premium, professional Next.js + TypeScript + Tailwind website for Computer Science & Engineering department event discovery.

## Features

- **Snappy Tech Loading**: Fast word-switching sequence (1.1s) on the landing page.
- **Auto-Redirect**: Smooth 1s hold on "the future" before redirecting to `/events`.
- **Premium Dark Mode**: Built-in theme toggle with smooth animations (Sun/Moon).
- **Cinematic Gallery**: 9:16 portrait event posters with blur effects and detail overlays.
- **Responsive Registration**: Per-event registration buttons linked to custom URLs.
- **Dynamic Backgrounds**: Tech-inspired "Background Beams" for a state-of-the-art feel.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Gallery**: Swiper.js

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` (or `http://localhost:3001` if using the dev script).

## Deployment (Vercel)

This project is optimized for deployment on **Vercel**:

1. Push your code to GitHub.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New"** > **"Project"**.
4. Import the `CSE-Dept-Mindkraft` repository.
5. Click **"Deploy"**.

Your site will be live in minutes!

## How to Add/Edit Events

Edit `data/events.ts` and update the `events` array. All changes reflect instantly across the site.
