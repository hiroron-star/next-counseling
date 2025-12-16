export default function Sidebar() {
  return (
    <aside className="w-80 space-y-4">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="space-y-4 text-center">
          <div className="text-4xl font-bold text-gray-900">2598</div>
          <div className="text-gray-600">店舗</div>
          <div className="text-4xl font-bold text-gray-900">7060</div>
          <div className="text-gray-600">相談</div>
          <div className="text-4xl font-bold text-gray-900">58768</div>
          <div className="text-gray-600">回答</div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🏠</span>
          <h3 className="font-bold text-gray-900">店舗様はこちら</h3>
        </div>
        <p className="text-sm text-gray-700 mb-4">
          お店やサイトが無料でPRできます!
        </p>
        <div className="space-y-2">
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm font-medium">
            店舗登録
          </button>
          <button className="w-full bg-white border border-green-600 text-green-600 py-2 rounded hover:bg-green-50 text-sm font-medium">
            ログイン
          </button>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">👤</span>
          <h3 className="font-bold text-gray-900">相談したい方はこちら</h3>
        </div>
        <div className="space-y-2">
          <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 text-sm font-medium">
            会員登録
          </button>
          <button className="w-full bg-white border border-orange-600 text-orange-600 py-2 rounded hover:bg-orange-50 text-sm font-medium">
            ログイン
          </button>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 text-center">
        <div className="text-6xl mb-4">👩</div>
        <p className="text-lg font-bold text-gray-900 mb-4">
          5分で お店の
          <br />
          サイト完成
        </p>
        <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded hover:bg-yellow-500 text-sm font-medium">
          詳細はこちら
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
          <span className="text-orange-500">👑</span>
          教えてランキング
        </h3>
        <div className="space-y-2 text-sm">
          <div className="text-gray-700">
            1 再発した神経障害から立ち直りたい...
          </div>
        </div>
      </div>
    </aside>
  );
}

