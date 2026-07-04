import { mockPosts } from "@/lib/data";
import HomeClient from "@/components/HomeClient";

export const revalidate = 0; // Dynamic rendering (SSR)

export default async function Home() {
  // Simulating serverside data load
  const posts = mockPosts;

  return (
    <HomeClient initialPosts={posts} />
  );
}

