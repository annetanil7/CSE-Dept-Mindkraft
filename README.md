# CSE Department Events Website

Next.js + TypeScript + Tailwind website for Computer Science & Engineering department event discovery via QR code flow.

## Features

- 10-second landing/loading screen with animated sentence:
  - `Welcome to Computer Science & Engineering Department — engineering [ideas | code | intelligence | innovation | the future]`
- Auto-redirect from `/` to `/events` after 10 seconds.
- Events page with poster carousel and poster grid.
- Hover poster effect and per-event **Register** button.
- Event detail pages at `/events/[slug]` with dedicated registration link.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn-style component structure in `components/ui`

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Project Structure

- `app/page.tsx`: 10-second loading screen and redirect.
- `app/events/page.tsx`: events listing + carousel + register buttons.
- `app/events/[slug]/page.tsx`: event detail page.
- `components/ui/animated-hero.tsx`: animated loading sentence.
- `components/ui/card-carousel.tsx`: poster carousel.
- `data/events.ts`: event data source.

## How to Add/Edit Events

Edit `data/events.ts` and add/update objects in `events`:

- `slug`: URL part, e.g. `tech-talk-2026`
- `name`: event title
- `description`: short text
- `poster`: poster image URL (Unsplash or your own hosted image)
- `registerUrl`: external registration form/link
- `date`: display date
- `venue`: location

All pages update automatically from this file.
