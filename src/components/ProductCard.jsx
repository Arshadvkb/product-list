import React, { useEffect, useState, useMemo } from "react";
import { fetchStore } from "../stores/fetchStore";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const ProductCard = () => {
  const { fetchData, result } = fetchStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredProducts = useMemo(() => {
    let products = [...result];

    // Searching
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      products = products.filter(
        (p) =>
          p.title.toLowerCase().includes(lower) ||
          p.category.toLowerCase().includes(lower)
      );
    }

   
    if (filter === "high-low") {
      products.sort((a, b) => b.price - a.price);
    } else if (filter === "low-high") {
      products.sort((a, b) => a.price - b.price);
    }

    return products;
  }, [result, searchTerm, filter]); 

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="min-w-screen flex justify-end">
        <select
          className="border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="high-low">High → Low</option>
          <option value="low-high">Low → High</option>
        </select>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">
          Products ({filteredProducts.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md">
              <div className="relative h-48 bg-gray-200">
                <img
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt={product.title}
                />
              </div>

              <div className="p-4 flex flex-col">
                <h3 className="text-lg font-semibold mb-2 truncate">
                  {product.title}
                </h3>
                <p className="text-sm">Category: {product.category}</p>
                <p className="text-xl font-bold text-blue-600">
                  ${product.price}
                </p>

                <button
                  className="mt-4 h-10 bg-blue-500 text-white rounded"
                  onClick={() => navigate(`/product/details/${product.id}`)}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
