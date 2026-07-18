import HomeClient from "@/components/HomeClient";

export const revalidate = 0; // Dynamic rendering (SSR)

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_MOCK_API_URL || "https://6a50f8fbc576c846dcba1291.mockapi.io";
  let posts = [];

  try {
    const res = await fetch(`${apiUrl}/posts`, {
      cache: "no-store",
    });
    if (res.ok) {
      posts = await res.json();
    } else {
      console.error(`Failed to fetch initial posts from mock API: ${res.statusText}`);
    }
  } catch (error) {
    console.error("Failed to fetch initial posts from mock API", error);
  }

  return (
    <HomeClient initialPosts={posts} />
  );
}

