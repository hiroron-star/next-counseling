import PostList from "@/components/PostList";
import { mockPosts } from "@/data/posts";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          カウンセリング相談掲示板
        </h1>
        <PostList posts={mockPosts} />
      </main>
    </div>
  );
}
