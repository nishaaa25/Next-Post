import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
import { useOptimistic } from "react";

export default async function FeedPage() {
  const posts = await getPosts();

  return (
    <main className="w-screen relative">
      <div className="relative w-10/12 mx-auto">
        <h1>All posts by all users</h1>
        <Posts posts={posts} />
      </div>
    </main>
  );
}
