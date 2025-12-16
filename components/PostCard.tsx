import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const statusText = post.status === "closed" ? "相談終了" : "相談中";

  return (
    <div className="border-b border-gray-200 py-4 px-6 hover:bg-gray-50 transition-colors">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 mb-2 hover:text-green-600 cursor-pointer">
            {post.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span>{post.prefecture}</span>
            <span>•</span>
            <span>{post.ageRange}</span>
            <span>•</span>
            <span>{post.gender}</span>
          </div>
          <p className="text-gray-700 text-sm line-clamp-2 leading-relaxed">
            {post.content}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded text-xs font-medium hover:bg-gray-300">
            {statusText}
          </button>
          <span className="text-sm text-gray-600">{post.replyCount}件</span>
        </div>
      </div>
    </div>
  );
}

