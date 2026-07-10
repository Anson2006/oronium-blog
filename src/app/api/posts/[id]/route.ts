import { NextResponse } from "next/server";
import { mockComments } from "@/lib/data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const apiUrl = process.env.NEXT_PUBLIC_MOCK_API_URL || "https://6a50f8fbc576c846dcba1291.mockapi.io";

  try {
    const res = await fetch(`${apiUrl}/posts/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const post = await res.json();
    const comments = mockComments[id] || [];

    return NextResponse.json({ ...post, comments });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch post" }, { status: 500 });
  }
}
