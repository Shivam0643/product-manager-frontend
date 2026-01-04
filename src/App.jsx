import { useState } from "react";
import ProductForm from "./components/ProductForm";
import { initialProducts } from "./data/initialProducts";
import useDebounce from "./hooks/useDebounce";
import SearchBar from "./components/SearchBar";
import ViewToggle from "./components/ViewToggle";
import ProductTable from "./components/ProductTable";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [editing, setEditing] = useState(null);
  const [view, setView] = useState("table");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search);
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const perPage = 5;
  const pages = Math.ceil(filtered.length / perPage);
  const data = filtered.slice((page - 1) * perPage, page * perPage);

  const saveProduct = (product) => {
    if (editing) {
      setProducts(products.map((p) => (p.id === product.id ? product : p)));
      setEditing(null);
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
  };

  return (
    <div className="p-6 max-5xl mx-auto bg-gray-300">
      <ProductForm onSave={saveProduct} editingProduct={editing} />
      <SearchBar search={search} setSearch={setSearch} />
      <ViewToggle view={view} setView={setView} />

      {view === "table" ? (
        <ProductTable products={data} onEdit={setEditing} />
      ) : (
        <ProductCard products={data} onEdit={setEditing} />
      )}

      <Pagination total={pages} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
