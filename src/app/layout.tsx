import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oronium Blog — Insights on Tech, Design & AI",
  description: "Explore cutting-edge insights on modern UI/UX design, React server architectures, development workflows, and the future of AI agent development.",
  keywords: ["Design Systems", "React Server Components", "Next.js", "AI Agents", "Tailwind CSS", "Developer Flow"],
  authors: [{ name: "Oronium Team" }],
  openGraph: {
    title: "Oronium Blog — Insights on Tech, Design & AI",
    description: "Explore cutting-edge insights on modern UI/UX design, React server architectures, development workflows, and the future of AI agent development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#090A0F] text-slate-100 font-sans">
        <Providers>
          <div className="relative min-h-screen flex flex-col bg-grid-glow overflow-x-clip">
            {/* Radial Blur Glows */}
            <div className="radial-glow-1" />
            <div className="radial-glow-2" />

            <Navbar />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 z-10">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

