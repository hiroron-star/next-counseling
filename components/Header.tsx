export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="bg-green-50 border-b border-green-100">
        <div className="container mx-auto px-4 py-2 flex justify-end gap-4 text-sm">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            リンク情報
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            ヘルプ
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-green-600 mb-1">
              カウンセリング.COM
            </h1>
            <p className="text-sm text-gray-600">
              カウンセリングの店舗・求人・相談総合サイト
            </p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="店舗名で検索"
              className="border border-gray-300 rounded px-4 py-2 text-sm w-64"
            />
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 text-sm">
              検索
            </button>
          </div>
        </div>
        <nav className="flex gap-2">
          <a
            href="/"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 text-sm font-medium"
          >
            Q カウンセリング店を探す
          </a>
          <a
            href="/jobs"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 text-sm font-medium"
          >
            求人を探す
          </a>
          <a
            href="/questions"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm font-medium"
          >
            教えて掲示板
          </a>
        </nav>
      </div>
    </header>
  );
}

