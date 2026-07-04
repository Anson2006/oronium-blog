"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { categories } from "@/lib/data";
import { BlogPost } from "@/lib/types";
import BlogCard from "./BlogCard";
import { SlidersHorizontal, AlertCircle, RefreshCw } from "lucide-react";

interface BlogGridProps {
  initialPosts: BlogPost[];
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export default function BlogGrid({ initialPosts, searchQuery, setSearchQuery }: BlogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data: posts, isLoading, isError, refetch } = useQuery<BlogPost[]>({
    queryKey: ["posts", selectedCategory, searchQuery],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (selectedCategory !== "All") {
        params.append("category", selectedCategory);
      }
      if (searchQuery) {
        params.append("q", searchQuery);
      }
      const res = await fetch(`/api/posts?${params.toString()}`);
      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
      return res.json();
    },
    // Only use initialPosts if we are on the default category ("All") and search query is empty
    initialData: selectedCategory === "All" && !searchQuery ? initialPosts : undefined,
    staleTime: 60 * 1000,
  });

  const handleReset = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  // Identify the featured post: the first post where featured = true in the filtered list
  const featuredPost = posts?.find(p => p.featured);
  // All other posts
  const regularPosts = posts ? posts.filter(p => p.id !== featuredPost?.id) : [];

  return (
    <section id="categories" className="py-12 space-y-10 scroll-mt-20">
      {/* Filters Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-violet-400" />
          <h2 className="text-lg font-bold text-white uppercase tracking-wider">Filter Articles</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20"
                  : "bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Loading Skeletons */}
      {isLoading && (
        <div className="space-y-10">
          {/* Featured Skeleton */}
          {selectedCategory === "All" && !searchQuery && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 rounded-3xl border border-white/5 bg-slate-900/20 animate-pulse">
              <div className="lg:col-span-7 h-72 lg:h-[400px] bg-slate-800/50 rounded-2xl" />
              <div className="lg:col-span-5 flex flex-col justify-between py-2 space-y-4">
                <div className="space-y-4">
                  <div className="h-6 w-24 bg-slate-800/50 rounded-lg" />
                  <div className="h-10 w-3/4 bg-slate-800/50 rounded-lg" />
                  <div className="h-20 w-full bg-slate-800/50 rounded-lg" />
                </div>
                <div className="h-12 w-full bg-slate-800/50 rounded-lg" />
              </div>
            </div>
          )}

          {/* Grid Skeletons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-3xl p-5 border border-white/5 bg-slate-900/20 animate-pulse space-y-4">
                <div className="h-48 w-full bg-slate-800/50 rounded-2xl" />
                <div className="h-6 w-1/3 bg-slate-800/50 rounded-lg" />
                <div className="h-8 w-3/4 bg-slate-800/50 rounded-lg" />
                <div className="h-12 w-full bg-slate-800/50 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="flex flex-col items-center justify-center py-16 text-center space-y-4 glass-panel rounded-3xl p-8 max-w-md mx-auto">
          <AlertCircle className="h-12 w-12 text-rose-500" />
          <h3 className="text-lg font-bold text-white">Failed to retrieve posts</h3>
          <p className="text-sm text-slate-400">There was an error communicating with the API. Please try again.</p>
          <button
            onClick={() => refetch()}
            className="flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition-all"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Retry</span>
          </button>
        </div>
      )}

      {/* Posts Loaded */}
      {!isLoading && !isError && (
        <div className="space-y-12">
          {/* Featured Post Card */}
          {featuredPost && selectedCategory === "All" && !searchQuery && (
            <BlogCard post={featuredPost} featured={true} />
          )}

          {/* Grid Layout of Posts */}
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Show remaining posts or all if search/filter active */}
              {(selectedCategory !== "All" || searchQuery ? posts : regularPosts).map((post) => (
                <div key={post.id} className="h-full">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-slate-500">
                <AlertCircle className="h-8 w-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">No articles matched</h3>
                <p className="text-slate-400 max-w-sm">
                  We couldn't find any articles matching your search or filters. Try adjusting your query.
                </p>
              </div>
              <button
                onClick={handleReset}
                className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-all"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
