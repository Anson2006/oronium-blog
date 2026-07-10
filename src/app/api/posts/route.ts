import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const query = searchParams.get("q")?.toLowerCase();

  const apiUrl = process.env.NEXT_PUBLIC_MOCK_API_URL || "https://6a50f8fbc576c846dcba1291.mockapi.io";

  try {
    const res = await fetch(`${apiUrl}/posts`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch from mock API: ${res.statusText}`);
    }
    let posts = await res.json();

    // Filter by category
    if (category && category !== "All") {
      posts = posts.filter((post: any) => post.category?.toLowerCase() === category.toLowerCase());
    }

    // Filter by search query (checks title, excerpt, content, and tags)
    if (query) {
      posts = posts.filter((post: any) => 
        post.title?.toLowerCase().includes(query) ||
        post.excerpt?.toLowerCase().includes(query) ||
        post.content?.toLowerCase().includes(query) ||
        (Array.isArray(post.tags) && post.tags.some((tag: string) => tag.toLowerCase().includes(query)))
      );
    }

    return NextResponse.json(posts);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch posts" }, { status: 500 });
  }
}
