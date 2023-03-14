import React, { useState } from "react";

const ProductCard = ({ product, onAddToCart, onRemoveFromCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          className="w-full h-80 object-cover"
          src={product.image}
          alt={product.name}
        />
        {isHovered && (
          <>
            <button
              className="absolute top-2 right-2 bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
            <button
              className="absolute top-2 left-2 bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => onRemoveFromCart(product)}
            >
              Remove from Cart
            </button>
          </>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-[#78716C]">{product.name}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-gray-700 font-bold">${product.price}</p>
      </div>
    </div>
  );
};
export default ProductCard;
