import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import PostList from "@/components/PostList";
import QuestionSearch from "@/components/QuestionSearch";
import { mockPosts } from "@/data/posts";

export default function QuestionsPage() {
  const totalPosts = mockPosts.length * 235 + 30; // モックデータを拡張した想定の総数

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <nav className="text-sm text-gray-600 mb-4">
          <a href="/" className="hover:text-gray-900">
            カウンセリング.COM
          </a>
          <span className="mx-2"> &gt; </span>
          <span className="text-gray-900">無料で相談できる教えて掲示板</span>
        </nav>

        <div className="flex gap-6">
          <main className="flex-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                <span className="text-orange-500">●</span>
                教えて掲示板
              </h1>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium text-lg mb-6 w-full">
                カウンセリングの専門家に質問する
              </button>
              <QuestionSearch />
            </div>

            <PostList posts={mockPosts} totalItems={totalPosts} />
          </main>

          <Sidebar />
        </div>
      </div>
    </div>
  );
}

