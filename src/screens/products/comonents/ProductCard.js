import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductDetails from "./ProductDetails";

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  return (
    <>
      <div
        className="border rounded-md p-4 cursor-pointer"
        data-aos="fade-up"
        onClick={handleShowDetails}
      >
        <img src={product.image} alt={product.name} className="mb-4" />
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-gray-700 font-bold text-lg mt-2">${product.price}</p>
      </div>
      {showDetails && <ProductDetails product={product} />}
    </>
  );
};

export default ProductCard;
