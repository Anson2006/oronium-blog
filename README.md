# Oronium Blog Application

A premium, high-performance, and beautifully designed personal blog web application built on **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **TanStack React Query**. This application features smooth dynamic interactions, glassmorphism aesthetics, responsive layouts, a robust search and categorization system, mock API integration, and rich animations.

---

## ⚡ Live Demo

You can access and interact with the live deployed version of the application here:
👉 **[Oronium Blog Live Demo](https://oronium-blog.vercel.app)**

---

## 🔗 Project Links

Here are the links to the deployed application and source repository:

*   **Live Deployed Application:** [https://oronium-blog.vercel.app](https://oronium-blog.vercel.app)
*   **GitHub Repository:** [https://github.com/Anson2006/oronium-blog](https://github.com/Anson2006/oronium-blog)
*   **Developer:** [Anson2006](https://github.com/Anson2006)

---

## 🚀 Features

1.  **Premium Glassmorphic UI & Design System**:
    *   Curated Tailwind CSS v4 custom theme with dark gradients and glow accents.
    *   Responsive navigation bar and futuristic footer.
    *   Micro-animations and interactive hover states implemented via Framer Motion.
2.  **Home Page (Dashboard & Search)**:
    *   **Hero Section:** Stunning visual introduction with fade-in typography.
    *   **Interactive Search & Filter:** Real-time search across blog titles, excerpts, and category badges.
    *   **Grid Layout:** Beautiful card displays with metadata (read time, category badges, published date).
    *   **Pagination:** Custom dynamic pagination for seamless browsing of extensive blogs.
3.  **Detailed Post Page (SSR / Hybrid)**:
    *   **Hero Header:** Big cover image with overlay title.
    *   **Interactive Client Side Actions:** Custom comment section with real-time add/like functionality, dynamic rating system (star ratings), social sharing widgets, and interactive bookmarking.
    *   **Related Articles:** Dynamic recommendations of similar blogs based on categories.
4.  **TanStack React Query Integration**:
    *   Client-side caching, fetching, loading skeleton states, and data synchronization with a mock API server (`mockapi.io`).
    *   Graceful fallback to local mock data if the API server is unreachable.
5.  **Dynamic SEO & Metadata**:
    *   Custom dynamic metadata configurations for optimal search engine indexing.
    *   Open Graph social card previews.

---

## 🏗️ Project Structure

The project codebase follows standard Next.js directory and architecture guidelines:

```
├── public/                 # Static assets, logos, and illustrations
├── src/
│   ├── app/                # Next.js App Router (Layouts, routes, and page setups)
│   │   ├── api/            # Serverless API endpoints for fetching posts
│   │   ├── posts/[id]/     # Dynamic SSR Route for individual blog details
│   │   ├── globals.css     # Global stylesheets and Tailwind CSS v4 variables
│   │   └── layout.tsx      # Main application skeleton, font loaders, and footer/navbar wrappers
│   ├── components/         # Reusable client and server React components
│   │   ├── BlogCard.tsx    # Card layout representing a blog entry
│   │   ├── BlogGrid.tsx    # Grid controller managing lists of BlogCard
│   │   ├── Footer.tsx      # Premium glassmorphic footer
│   │   ├── Hero.tsx        # Styled intro section with Framer Motion animations
│   │   ├── HomeClient.tsx  # Dynamic search, category tags, and pagination manager
│   │   ├── Navbar.tsx      # Sticky visual headers and active route controllers
│   │   ├── PostClient.tsx  # Custom detailed layout with comments, ratings, and related posts
│   │   └── Providers.tsx   # React Query configurations (QueryClientProvider wrapper)
│   └── lib/                # Shared utilities, fallback mock datasets, and type definitions
│       ├── data.ts         # Sample/fallback blog posts, categories, and sample comments
│       └── types.ts        # TypeScript declarations for posts, comments, and ratings
├── .env.local              # Local environment file (API URL endpoint configuration)
├── eslint.config.mjs       # Linting configurations
├── next.config.ts          # Next.js application parameters
├── package.json            # Scripts, project metadata, and dependencies config
├── postcss.config.mjs      # PostCSS processor setup
├── tsconfig.json           # Compiler rules for TypeScript compilation
```

---

## 🧩 Main Components

The application divides UI and interactions into high-fidelity modular React components:

*   **`HomeClient`**: Serves as the central interactive component for the homepage. It controls the real-time search query, active category tag filters, and pagination states (transitioning page lists gracefully).
*   **`PostClient`**: The dynamic controller for individual blog posts. It showcases the full article body, lists similar articles inside a **Related Posts** grid, and implements client-side state for:
    *   *Star Rating System*: Submitting and displaying personal reading reviews.
    *   *Comments Drawer*: Adding comments dynamically, with localized like functionality.
    *   *Bookmarking & Sharing*: Bookmarking local posts and copying deep links for easy sharing.
*   **`BlogGrid` & `BlogCard`**: Design elements featuring hover gradients, scale interactions, and tag indicators (using Lucide icons).
*   **`Hero`**: Premium typographic and graphic header utilizing staggered Framer Motion entrance animations for visual appeal.
*   **`Navbar` & `Footer`**: Standard headers and footers wrapping pages in a modern dark-mode aesthetic with glow borders.

---

## 💎 Key Highlights

*   **Hybrid Rendering Architecture**: Leverages React Server Components (RSC) for initial page loading speed (SSR), coupled with TanStack React Query for instantaneous client-side operations (caching, query updates).
*   **Resilient Fallback Design**: Integrates with a remote API hosted on `mockapi.io`. If the API limits are exceeded or the network falls offline, the application instantly fallbacks to local mock data inside `src/lib/data.ts` to keep the site 100% operational.
*   **Responsive & Smooth UX**: Built with responsive layouts for mobile, tablet, and desktop viewports. Visual elements react with smooth cubic-bezier transitions, skeleton loading frames, and custom rating animations.
*   **Tailwind CSS v4 Integration**: Leverages Tailwind CSS v4's modern features for optimized build size, custom theme settings, and cleaner stylesheet configurations.

---

## 🛠️ Technology Stack

*   **Framework**: Next.js 16.x (App Router)
*   **Library**: React 19.x (including server components)
*   **Styling**: Tailwind CSS v4 + Vanilla CSS custom variables
*   **Animations**: Framer Motion
*   **State Management / Fetching**: TanStack React Query v5
*   **Icons**: Lucide React
*   **API Platform**: MockAPI.io

---

## 📦 Local Setup Instructions

Follow these instructions to run the project locally on your machine:

### 1. Prerequisites
Make sure you have Node.js (version 18.x or later) and npm/yarn/pnpm/bun installed.

### 2. Clone the Repository
```bash
git clone https://github.com/Anson2006/oronium-blog.git
cd oronium-blog
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a file named `.env.local` in the root of the project and add the following environment variable:
```env
NEXT_PUBLIC_MOCK_API_URL=https://6a50f8fbc576c846dcba1291.mockapi.io
```

### 5. Running the Development Server
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 6. Building for Production
To build the application for production:
```bash
npm run build
npm run start
```
