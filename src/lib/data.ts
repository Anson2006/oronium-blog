import { BlogPost, Comment } from "./types";

export const categories = ["All", "Tech", "Design", "Productivity", "AI & Futures"];

export const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Designing the Future: The Rise of Glassmorphic Interfaces",
    excerpt: "Discover the evolution of glassmorphism in modern digital layouts, how to balance opacity, and techniques for styling premium glass cards.",
    content: `
      <p>Modern UI design is shifting towards layered, immersive spaces. One of the most popular aesthetic movements in recent years is <strong>Glassmorphism</strong>—a style characterized by frosted-glass effects, vibrant multi-layered backgrounds, and subtle translucent borders that mimic physical sheets of glass.</p>
      
      <h2>Why Glassmorphism Works</h2>
      <p>At its core, glassmorphism establishes a clear visual hierarchy. By utilizing backdrop filters, designs can blur whatever lies beneath the element, allowing the content to pop without completely isolating the background context. This creates a sense of depth and luxury that opaque cards simply cannot replicate.</p>
      
      <blockquote class="border-l-4 border-violet-500 pl-4 italic my-6 text-slate-300">
        "Design is not just what it looks like and feels like. Design is how it works." — Steve Jobs
      </blockquote>

      <h2>Building Glassmorphism with Tailwind CSS</h2>
      <p>Implementing glassmorphism in Tailwind CSS is remarkably straightforward thanks to the built-in backdrop-blur utilities. Here is a basic recipe for a premium glass card:</p>
      
      <pre class="bg-slate-900/80 p-4 rounded-xl border border-white/10 text-violet-300 overflow-x-auto my-6 font-mono text-sm">
&lt;div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl"&gt;
  &lt;h3 className="text-white font-bold"&gt;Glass Card&lt;/h3&gt;
  &lt;p className="text-white/80"&gt;Translucent glass card styling.&lt;/p&gt;
&lt;/div&gt;</pre>

      <h2>Key Styling Pillars to Keep in Mind</h2>
      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>Vibrant Backgrounds:</strong> Glassmorphism requires dynamic backgrounds (like gradients or shapes) to show off the frosted glass blur effect.</li>
        <li><strong>Subtle Borders:</strong> A thin, semi-transparent border (e.g., <code>border-white/10</code>) helps define the edges of the glass and gives it a realistic light-refraction look.</li>
        <li><strong>Shadows:</strong> Drop shadows create elevation and depth, making the card look like it is floating above the canvas.</li>
      </ul>

      <p>Experimenting with different opacity levels and blur strengths allows you to tune the look for light or dark modes. When done right, glassmorphism delivers a highly tactile, premium feel to your user interfaces.</p>
    `,
    category: "Design",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    readTime: "4 min read",
    publishedAt: "July 2, 2026",
    author: {
      name: "Aria Thorne",
      role: "Lead UI Designer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    likes: 342,
    commentsCount: 24,
    tags: ["UI Trends", "TailwindCSS", "Aesthetics"],
    featured: true
  },
  {
    id: "2",
    title: "Mastering React Server Components & SSR in Next.js",
    excerpt: "An in-depth guide to understanding how Server Components partition computation, improve load times, and integrate with React Client Components.",
    content: `
      <p>Next.js App Router has revolutionized how we build React applications. By introducing <strong>React Server Components (RSC)</strong> as the default paradigm, Next.js allows developers to choose exactly where code executes—rendering components on the server by default and minimizing the Javascript bundle shipped to the client.</p>

      <h2>Server-Side Rendering (SSR) vs. Server Components</h2>
      <p>It's important to distinguish between SSR and RSC. SSR refers to the process of converting React components into HTML on the server and sending that static HTML to the browser, which then hydrates. React Server Components go further: they are compiled to a JSON-like stream format, allowing components to execute purely on the server while client-side state is preserved.</p>

      <h2>The Benefits of Server-First Architecture</h2>
      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>Zero Client-Side JS:</strong> Code that fetches data, formats dates, or accesses server secrets is executed entirely on the server and doesn't bloat the bundles.</li>
        <li><strong>Direct Database Access:</strong> Server Components can fetch data directly from databases, microservices, or local data stores without exposing APIs to the client.</li>
        <li><strong>Enhanced SEO:</strong> HTML is fully pre-rendered, making it instantly indexable by search engines.</li>
      </ul>

      <h2>Combining Server and Client Components</h2>
      <p>For interactivity (like forms, buttons, search bars, and animations), you declare Client Components by placing the <code>'use client'</code> directive at the top of the file. By importing Client Components inside Server Components, you create a seamless integration where the structural layout is server-driven and the micro-interactions are client-driven.</p>
    `,
    category: "Tech",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    readTime: "6 min read",
    publishedAt: "June 28, 2026",
    author: {
      name: "Elena Rostova",
      role: "Staff Software Engineer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
    },
    likes: 218,
    commentsCount: 15,
    tags: ["NextJS", "React", "SSR"],
    featured: false
  },
  {
    id: "3",
    title: "Unlocking Peak Developer Flow: Habits & Workspaces",
    excerpt: "How to engineer an environment that eliminates cognitive friction, schedules deep-work blocks, and automates repetitive terminal commands.",
    content: `
      <p>Entering the state of "flow" is the ultimate goal of any knowledge worker, especially software developers. When you're in flow, coding feels effortless, bugs resolve themselves, and hours pass like minutes. But flow state is fragile and requires deliberate engineering to achieve and protect.</p>

      <h2>The Friction Checklist</h2>
      <p>Flow is often disrupted by small, avoidable frictions in your daily setup. Consider these common culprits:</p>
      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>Slow Compiles:</strong> Waiting 15 seconds for a hot-reload breaks focus. Invest in powerful hardware and optimized bundlers.</li>
        <li><strong>Context Switching:</strong> Keep your documentation, logs, and terminal unified. Minimize clicking between multiple windows.</li>
        <li><strong>Notifications:</strong> Every slack ping or email requires up to 20 minutes of recovery time to regain full focus.</li>
      </ul>

      <h2>Designing Your Deep Work System</h2>
      <p>Schedule three-hour blocks of time dedicated to deep work. Close all messaging apps and turn your phone on do-not-disturb. Let your team know that during these blocks, you are offline. You will be amazed at how much more you accomplish in three uninterrupted hours than in an entire day of fragmented meetings.</p>
    `,
    category: "Productivity",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read",
    publishedAt: "June 25, 2026",
    author: {
      name: "Marcus Vance",
      role: "Engineering Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    likes: 189,
    commentsCount: 9,
    tags: ["DeepWork", "Career", "Workflow"],
    featured: false
  },
  {
    id: "4",
    title: "AI Agent Orchestration: The Next Paradigm Shift",
    excerpt: "An analysis of multi-agent collaboration frameworks and how autonomous code generators are reshaping software development lifecycles.",
    content: `
      <p>We are transitioning from search-engine copilots to full autonomous agents. Instead of answering questions, modern AI models can plan, iterate, run commands, review code, and verify their outputs against live development servers.</p>

      <h2>Multi-Agent Systems</h2>
      <p>The real magic happens when agents communicate with other agents. For instance, a Planner Agent outlines the task, a Coder Agent writes the code, and a QA Agent runs tests and reviews diffs. This system of checks and balances prevents hallucinated errors and yields exceptionally high success rates.</p>

      <h2>How Developers Should Adapt</h2>
      <p>As AI handles more boilerplate code and repetitive debugging, the role of the developer shifts towards system architecture, code review, prompting excellence, and defining requirements. Mastering agent tools is the superpower of the modern engineer.</p>
    `,
    category: "AI & Futures",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop",
    readTime: "7 min read",
    publishedAt: "June 20, 2026",
    author: {
      name: "Elena Rostova",
      role: "Staff Software Engineer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
    },
    likes: 512,
    commentsCount: 43,
    tags: ["AI Agents", "LLM", "Future"],
    featured: false
  },
  {
    id: "5",
    title: "Tailwind CSS v4.0: What's New & Upcoming",
    excerpt: "Exploring the brand-new Oxide compiler engine, CSS-first configurations, and the major performance upgrades in Tailwind's next generation.",
    content: `
      <p>Tailwind CSS is getting a complete rewrite under the hood. The upcoming v4.0 release replaces the old Javascript config model with an all-CSS configuration setup, powered by a lightning-fast Rust-based engine called Oxide.</p>

      <h2>Oxide: Over 10x Faster Compiles</h2>
      <p>Oxide is built in Rust to scan files and generate CSS at extreme speeds. For massive projects, build times drop from several seconds to milliseconds. This means instant hot-reloads and zero developer frustration.</p>

      <h2>CSS-First Configuration</h2>
      <p>Instead of editing <code>tailwind.config.js</code>, v4.0 uses standard CSS directives directly. You can define themes, custom utility classes, and source files using <code>@theme</code> inside your main CSS input file. This streamlines configuration and aligns perfectly with modern CSS standards.</p>
    `,
    category: "Tech",
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    readTime: "4 min read",
    publishedAt: "June 15, 2026",
    author: {
      name: "Aria Thorne",
      role: "Lead UI Designer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    likes: 277,
    commentsCount: 19,
    tags: ["TailwindCSS", "CSS", "Frontend"],
    featured: false
  },
  {
    id: "6",
    title: "Designing Accessible and Inclusive Color Palettes",
    excerpt: "How to use APCA guidelines, calculate visual contrast, and design palettes that are beautiful, readable, and fully WCAG-compliant.",
    content: `
      <p>Visual accessibility is not an afterthought; it is a fundamental design requirement. Creating layouts that work for everyone—including users with color blindness, low vision, or cognitive disabilities—is critical for any professional digital product.</p>

      <h2>APCA vs. WCAG 2.1</h2>
      <p>While WCAG 2.1 relies on a simple contrast ratio formula (like 4.5:1), the new <strong>Advanced Perceptual Contrast Algorithm (APCA)</strong> calculates readability based on modern spatial frequency, background lightness, and actual human perception. It provides a far more accurate representation of how legible text actually is on different screen types.</p>

      <h2>Designing for High Contrast in Dark Mode</h2>
      <p>Dark mode layouts require special attention. Simply inverting your light mode colors often results in glowing borders and text that causes eye strain. Opt for softer dark backgrounds (like Slate or Zinc) instead of pure black, and choose muted text colors (like white with 80% opacity) to provide comfortable, long-term legibility.</p>
    `,
    category: "Design",
    coverImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read",
    publishedAt: "June 10, 2026",
    author: {
      name: "Marcus Vance",
      role: "Engineering Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    likes: 154,
    commentsCount: 8,
    tags: ["Accessibility", "A11y", "Colors"],
    featured: false
  }
];

export const mockComments: Record<string, Comment[]> = {
  "1": [
    {
      id: "c1",
      authorName: "Sophia Martinez",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      content: "This is one of the clearest explanations of glassmorphism I've read. The border tip with opacity is a game changer!",
      publishedAt: "2 hours ago"
    },
    {
      id: "c2",
      authorName: "Liam Chen",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      content: "Great article! Are there performance concerns when using backdrop-blur on low-end mobile devices?",
      publishedAt: "Yesterday"
    }
  ],
  "2": [
    {
      id: "c3",
      authorName: "David Kim",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      content: "Excellent breakdown of the difference between SSR and RSC. It's a common point of confusion for newcomers.",
      publishedAt: "3 days ago"
    }
  ]
};
