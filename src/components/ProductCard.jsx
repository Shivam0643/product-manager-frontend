import { MdOutlineModeEdit } from "react-icons/md";

export default function ProductCard({ products, onEdit }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((p) => (
        <div key={p.id} className="border-2 border-cyan-700 rounded p-4 bg-gradient-to-tr from-cyan-100 to-fuchsia-200">
          <h2 className="font-bold">{p.name}</h2>
          <p>₹ {p.price}</p>
          <p>{p.category}</p>
          <button className="flex items-center bg-blue-600 mt-2 px-3 py-1 gap-1 rounded text-gray-300" onClick={() => onEdit(p)}>
            Edit <MdOutlineModeEdit/>
          </button>
        </div>
      ))}
    </div>
  );
}
