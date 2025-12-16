export default function QuestionSearch() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Q&Aを検索"
          className="flex-1 border border-gray-300 rounded px-4 py-2 text-sm"
        />
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 text-sm font-medium">
          検索する
        </button>
      </div>
    </div>
  );
}

