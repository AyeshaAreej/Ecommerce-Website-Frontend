import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div data-aos="fade-right">
          <img src={product.image} alt={product.name} />
        </div>
        <div data-aos="fade-left">
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-gray-700 font-bold text-lg mb-4">
            ${product.price}
          </p>
          <div className="flex mb-4">
            <button
              className="bg-gray-200 px-4 py-2 rounded-l-lg"
              onClick={decrementQuantity}
            >
              -
            </button>
            <span className="bg-gray-200 px-4 py-2">{quantity}</span>
            <button
              className="bg-gray-200 px-4 py-2 rounded-r-lg"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
