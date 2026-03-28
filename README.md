# Team 2: e-motion

e-motion is a specialized, privacy-first organizational clarity platform designed to track structural team wellbeing, context switching, and cognitive flow without compromising individual data privacy (enforcing aggregated strict minimum thresholds, e.g., n > 5).

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Data Visualization:** Recharts
- **Icons:** Lucide React

## Getting Started

### Prerequisites

Make sure you have Node.js (version 18+ recommended) and npm installed on your machine.

### Development Server

To run the application in development mode with hot-reloading:

```bash
npm install
npm run dev
```

> [!TIP]
> If you encounter an address-in-use error (e.g., port 3000 is still active from a zombie process), use the following command before starting the dev server:
> ```bash
> npx kill-port 3000 && npm run dev
> ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create an optimized production build of the application:

1. Clean previous build caches and compile the Next.js app:
   ```bash
   rm -rf .next
   npm run build
   ```

2. Start the compiled production server:
   ```bash
   npm run start
   ```

The production server will spin up, allowing you to view and test the fully optimized app natively.

## Project Structure

- `app/page.tsx`: The main marketing and presentation Landing Page, equipped with advanced Framer Motion parallax sections.
- `app/dashboard/`: The core HR portal containing analytics on Teams, Signals, and overarching KPIs.
- `app/dashboard/components/`: Stores custom UI primitives, Navigation Drawers, and Top/Side headers used exclusively across internal dashboard views.
- `public/images/`: Stores all static graphics and icons.
- `tailwind.config.ts`: Contains the custom B2B pastel aesthetic themes and unified design tokens.
