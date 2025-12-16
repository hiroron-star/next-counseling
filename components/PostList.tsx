import { Post } from "@/types/post";
import PostCard from "./PostCard";

interface PostListProps {
  posts: Post[];
  currentPage?: number;
  itemsPerPage?: number;
  totalItems?: number;
}

export default function PostList({
  posts,
  currentPage = 1,
  itemsPerPage = 30,
  totalItems,
}: PostListProps) {
  const total = totalItems ?? posts.length;
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, total);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-orange-500">👑</span>
            最新の質問
          </h2>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          {start}~{end}件を表示 / 全{total}件
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {posts.length === 0 ? (
          <div className="py-12 text-center text-gray-500">
            投稿がありません
          </div>
        ) : (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
}

