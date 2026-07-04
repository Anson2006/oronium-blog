"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Heart, ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <article className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 rounded-3xl glass-panel glass-panel-hover transition-all duration-300">
        {/* Featured Tag */}
        <div className="absolute top-8 left-8 z-20 rounded-full bg-violet-600/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-white uppercase tracking-wider">
          Featured Post
        </div>

        {/* Cover Image */}
        <div className="lg:col-span-7 relative h-72 lg:h-[400px] w-full rounded-2xl overflow-hidden bg-slate-950">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/80 via-transparent to-transparent" />
        </div>

        {/* Post Content */}
        <div className="lg:col-span-5 flex flex-col justify-between py-2">
          <div className="space-y-4">
            {/* Meta Tags */}
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
              <span className="rounded-lg bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 text-violet-400 font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <Link href={`/posts/${post.id}`} className="block">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight group-hover:text-violet-400 transition-colors">
                <span className="flex items-start gap-1">
                  {post.title}
                  <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </span>
              </h2>
            </Link>

            {/* Excerpt */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Author Details and Likes */}
          <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-6">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full border border-white/15 object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-slate-500">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-500">{post.publishedAt}</span>
              <button 
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-500 transition-colors"
                aria-label="Like post"
              >
                <Heart className="h-4 w-4 fill-slate-400 group-hover:fill-transparent" />
                <span>{post.likes}</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col justify-between rounded-3xl p-5 glass-panel glass-panel-hover transition-all duration-300 h-full">
      <div className="space-y-4">
        {/* Cover Image */}
        <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-950">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/60 via-transparent to-transparent" />
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-3.5 text-xs font-medium text-slate-400">
          <span className="rounded-lg bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 text-violet-400 font-semibold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <Link href={`/posts/${post.id}`} className="block">
          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-violet-400 transition-colors">
            <span className="flex items-start gap-1 justify-between">
              {post.title}
              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </span>
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      {/* Author and Date */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-5">
        <div className="flex items-center gap-2.5">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-8 w-8 rounded-full border border-white/15 object-cover"
          />
          <div>
            <p className="text-xs font-semibold text-white">{post.author.name}</p>
            <p className="text-[10px] text-slate-500">{post.author.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] text-slate-500">{post.publishedAt}</span>
          <button 
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-rose-500 transition-colors"
            aria-label="Like post"
          >
            <Heart className="h-3.5 w-3.5" />
            <span>{post.likes}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
