import { NextResponse } from "next/server";
import { mockPosts } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const query = searchParams.get("q")?.toLowerCase();

  let posts = [...mockPosts];

  // Filter by category
  if (category && category !== "All") {
    posts = posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
  }

  // Filter by search query (checks title, excerpt, content, and tags)
  if (query) {
    posts = posts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // Simulate network latency (e.g. 300ms) for realistic loading state demonstration
  await new Promise(resolve => setTimeout(resolve, 300));

  return NextResponse.json(posts);
}
