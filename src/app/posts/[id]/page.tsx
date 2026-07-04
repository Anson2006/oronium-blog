import { Metadata } from "next";
import { notFound } from "next/navigation";
import { mockPosts, mockComments } from "@/lib/data";
import PostClient from "@/components/PostClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = mockPosts.find((p) => p.id === resolvedParams.id);

  if (!post) {
    return {
      title: "Article Not Found — Oronium Blog",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${post.title} — Oronium Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = mockPosts.find((p) => p.id === resolvedParams.id);

  if (!post) {
    notFound();
  }

  const comments = mockComments[resolvedParams.id] || [];
  const fullPost = { ...post, comments };

  return (
    <div className="max-w-6xl mx-auto py-4">
      <PostClient post={fullPost} />
    </div>
  );
}
