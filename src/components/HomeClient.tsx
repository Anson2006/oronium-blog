"use client";

import React, { useState } from "react";
import Hero from "./Hero";
import BlogGrid from "./BlogGrid";
import { BlogPost } from "@/lib/types";

interface HomeClientProps {
  initialPosts: BlogPost[];
}

export default function HomeClient({ initialPosts }: HomeClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8 animate-fade-in">
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BlogGrid
        initialPosts={initialPosts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
}
