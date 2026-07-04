"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Heart, MessageSquare, Share2, Send, Bookmark } from "lucide-react";
import { BlogPost, Comment } from "@/lib/types";

interface PostClientProps {
  post: BlogPost & { comments: Comment[] };
}

export default function PostClient({ post }: PostClientProps) {
  const [likes, setLikes] = useState(post.likes);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>(post.comments);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;

    const commentObj: Comment = {
      id: `new-c-${Date.now()}`,
      authorName: authorName.trim(),
      authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop", // generic placeholder avatar
      content: newComment.trim(),
      publishedAt: "Just now",
    };

    setComments([commentObj, ...comments]);
    setNewComment("");
    setAuthorName("");
  };

  return (
    <article className="animate-fade-in space-y-10">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/5 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:border-violet-500/30 hover:bg-white/10 transition-all duration-200"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Articles</span>
      </Link>

      {/* Article Cover & Meta */}
      <header className="relative w-full rounded-3xl overflow-hidden bg-slate-950 border border-white/5">
        <div className="relative h-64 sm:h-96 md:h-[450px] w-full">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-[#090A0F]/40 to-transparent" />
        </div>

        {/* Floating Meta Details */}
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 space-y-4">
          <div className="flex items-center gap-3.5 text-xs font-semibold uppercase tracking-wider text-violet-400">
            <span className="rounded-lg bg-violet-500/10 border border-violet-500/20 px-3 py-1">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-4xl">
            {post.title}
          </h1>
        </div>
      </header>

      {/* Grid Layout (Content & Info Bar) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content Pane */}
        <div className="lg:col-span-8 space-y-12">
          {/* Author Card & Likes */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-14 w-14 rounded-full border border-white/10 object-cover shadow-md"
              />
              <div>
                <p className="font-bold text-white text-base">{post.author.name}</p>
                <p className="text-xs text-slate-400">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
              <span className="text-xs text-slate-500">Published on {post.publishedAt}</span>
              <div className="flex gap-2">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold border transition-all ${
                    hasLiked
                      ? "bg-rose-500/15 border-rose-500/30 text-rose-400 shadow-lg shadow-rose-500/5"
                      : "bg-white/5 border-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                  aria-label="Like this article"
                >
                  <Heart className={`h-4 w-4 ${hasLiked ? "fill-rose-400" : ""}`} />
                  <span>{likes} Likes</span>
                </button>
              </div>
            </div>
          </div>

          {/* HTML Prose Render */}
          <div 
            className="prose-custom" 
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Comments Section */}
          <section className="space-y-8 pt-8 border-t border-white/5">
            <div className="flex items-center gap-2.5">
              <MessageSquare className="h-5 w-5 text-violet-400" />
              <h2 className="text-xl font-bold text-white">Discussions ({comments.length})</h2>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="space-y-4 glass-panel rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white">Add to the discussion</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
                />
              </div>
              <div className="relative">
                <textarea
                  required
                  rows={3}
                  placeholder="Share your thoughts on this article..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-xs font-semibold text-white hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-500/10 transition-all hover:-translate-y-0.5"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Post Comment</span>
              </button>
            </form>

            {/* Comment List */}
            <div className="space-y-4">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.01]">
                    <img
                      src={comment.authorAvatar}
                      alt={comment.authorName}
                      className="h-10 w-10 rounded-full border border-white/10 object-cover shrink-0"
                    />
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white">{comment.authorName}</h4>
                        <span className="text-[10px] text-slate-500">{comment.publishedAt}</span>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">{comment.content}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-500 text-sm">
                  No discussions yet. Be the first to share your feedback!
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar Info & Table of Contents */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Article Info Widget */}
          <div className="glass-panel rounded-3xl p-6 space-y-6">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider border-b border-white/5 pb-3">
              Article Details
            </h3>

            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex justify-between">
                <span>Reading Time</span>
                <span className="font-medium text-white">{post.readTime}</span>
              </div>
              <div className="flex justify-between">
                <span>Category</span>
                <span className="font-medium text-violet-400">{post.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Published Date</span>
                <span className="font-medium text-white">{post.publishedAt}</span>
              </div>
              <div className="flex justify-between">
                <span>Author</span>
                <span className="font-medium text-white">{post.author.name}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tags</h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-white/5 border border-white/5 px-2.5 py-1 text-xs text-slate-300 hover:border-violet-500/20 hover:text-white transition-colors cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Social Share Widget */}
          <div className="glass-panel rounded-3xl p-6 space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <Share2 className="h-4 w-4 text-violet-400" />
              <span>Share Article</span>
            </h3>
            <p className="text-xs text-slate-400">Recommend this article to your colleagues and developer circle.</p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all"
              >
                Twitter
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
