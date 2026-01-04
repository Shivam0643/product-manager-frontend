export default function ViewToggle({ view, setView }) {
  return (
    <div className="flex gap-2 mb-4 mt-3">
      <button
        onClick={() => setView("table")}
        className={`px-7 py-1 border border-cyan-800 rounded text-cyan-950 ${
          view === "table" && "bg-cyan-700 text-gray-200 border-cyan-900"
        }`}
      >
        List
      </button>

      <button
        onClick={() => setView("grid")}
        className={`px-7 py-1 border border-cyan-800 rounded text-cyan-950 ${
          view === "grid" && "bg-cyan-700 text-gray-200 border border-cyan-900"
        }`}
      >
        Card
      </button>
    </div>
  );
}
