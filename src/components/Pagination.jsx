export default function Pagination({ total, page, setPage }) {
  return (
    <div className="flex gap-2 mt-4">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`px-3 py-1 border ${
            page === i + 1 && "bg-black text-white"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
