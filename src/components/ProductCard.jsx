import { FaEye, FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden flex flex-col group transition">
      {/* Product Image Section */}
      <div className={`relative flex-1 flex items-center justify-center ${product.bg} min-h-[260px]`}>
        {product.sale && (
          <span className="absolute top-4 left-4 bg-gray-800 text-white text-xs px-3 py-1 rounded font-bold">
            Sale
          </span>
        )}
        <img src={product.image} alt={product.name} className="h-40 object-contain" />
        {/* Hover Icons */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-green-400 hover:bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg shadow">
            <FaEye />
          </button>
          <button className="bg-green-400 hover:bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg shadow">
            <FaHeart />
          </button>
          <button className="bg-green-400 hover:bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg shadow">
            <FaShoppingCart />
          </button>
        </div>
      </div>
      {/* Product Details Section */}
      <div className="p-6 flex flex-col items-center">
        <span className="font-poppins-extrabold text-lg mb-2">{product.name}</span>
        <div className="flex items-center mb-2">
          {[...Array(product.rating)].map((_, i) => (
            <FaStar key={i} className="text-green-500 mr-1" />
          ))}
        </div>
        <span className="text-gray-700 font-poppins-extrabold">{product.price}</span>
      </div>
    </div>
  );
}