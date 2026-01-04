import { useEffect, useState } from "react";

export default function ProductForm({ onSave, editingProduct }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
  });

  useEffect(() => {
    if (editingProduct) setForm(editingProduct);
  }, [editingProduct]);

  const submit = () => {
    if (!form.name || !form.price || !form.category) {
      alert("Required fields are missing");
      return;
    }
    onSave(form);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[300px]">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-cyan-700">
          PRODUCT LISTING FORM
        </h1>
      </div>

      <div className="w-full max-w-md bg-cyan-100/50 p-6 rounded-lg shadow space-y-4 border-2 border-cyan-800 mb-4">
        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded border-2 border-cyan-600 px-2 py-1 focus:outline-none"
        />

        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full border-2 border-cyan-600 rounded px-2 py-1 focus:outline-none"
        />

        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="w-full border-2 border-cyan-600 rounded px-2 py-1 focus:outline-none"
        />

        <input
          type="text"
          placeholder="Stocks"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
          className="w-full border-2 border-cyan-600 rounded px-2 py-1 focus:outline-none"
        />

        <button
          onClick={submit}
          className="w-full bg-gradient-to-br from-fuchsia-400 to bg-cyan-300 text-gray-700 font-bold py-2 rounded  hover:scale-105 duration-300"
        >
          {editingProduct ? "Update Product" : "Add Product"}
        </button>
      </div>
    </div>
  );
}
