import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Dairy", "Pantry", "Meat", "Fruits", "Vegetables"];

  // Filter products based on the active category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="text-green-500 font-poppins-extrabold mb-2">
          Recently Added
        </div>
        <h2 className="text-4xl font-poppins-extrabold mb-2">New Products</h2>
        <div className="flex justify-center space-x-4 text-gray-500 font-poppins-extrabold">
          {categories.map((category) => (
            <button
              key={category}
              className={`hover:text-green-500 transition ${
                activeCategory === category ? "text-green-500 underline" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}