import { NextResponse } from "next/server";
import { mockPosts, mockComments } from "@/lib/data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // Destructure id safely since params is a Promise in Next.js 15
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const post = mockPosts.find(p => p.id === id);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const comments = mockComments[id] || [];

  // Simulate network latency (e.g. 300ms) for realistic loading state demonstration
  await new Promise(resolve => setTimeout(resolve, 300));

  return NextResponse.json({ ...post, comments });
}
