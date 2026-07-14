# Oronium Blog Application

A premium, high-performance, and beautifully designed personal blog web application built on **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **TanStack React Query**. This application features smooth dynamic interactions, glassmorphism aesthetics, responsive layouts, a robust search and categorization system, mock API integration, and rich animations.

---

## ⚡ Live Demo

You can access and interact with the live deployed version of the application here:
👉 **[Oronium Blog Live Demo](https://oronium-blog.vercel.app)**

---

## 🔗 Project Links & Submission Details

As part of the submission guidelines, here are the links to the deployed application and source repository:

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

---

## 📝 Submission Guidelines

To verify and evaluate this project:
1.  Verify the web UI at the live URL: [https://oronium-blog.vercel.app](https://oronium-blog.vercel.app)
2.  Review codebase organization in the [GitHub Repository](https://github.com/Anson2006/oronium-blog).
3.  The project structure matches standard Next.js standards:
    *   `src/app/`: Layouts, static/dynamic page routers, APIs.
    *   `src/components/`: Client/server reusable UI elements (e.g. `Navbar`, `Footer`, `Hero`, `BlogGrid`, `PostClient`).
    *   `src/lib/`: Fallback mock data, React Query wrappers, type definitions.
4.  Ensure that `NEXT_PUBLIC_MOCK_API_URL` env variable is set in the hosting provider dashboard (e.g. Vercel) during redeployments.
