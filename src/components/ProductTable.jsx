import { MdOutlineModeEdit } from "react-icons/md";
export default function ProductTable({ products, onEdit }) {
  return (
    <table className="w-full border border-cyan-600 bg-fuchsia-50">
      <thead>
        <tr className="bg-fuchsia-100 border border-cyan-600">
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id} className="border border-cyan-600 text-center">
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>{p.category}</td>
            <td>{p.stock}</td>
            <td>
                <button className="text-blue-800" onClick={() => onEdit(p)}>
                Edit <span><MdOutlineModeEdit className="inline" size={17}/></span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
