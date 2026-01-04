export default function SearchBar({ search, setSearch }) {
  return (
    <div className="flex items-center justify-center">
        <input
      type="text"
      placeholder="Seach Products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border-2 border-cyan-600 bg-cyan-100 p-2 w-[50%] mb-4 outline-none rounded"
    />
    </div>
  );
}
