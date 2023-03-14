// import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ProductDetails from "./ProductDetails";

// const ProductCard = ({ product }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   // Initialize AOS animations
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-out",
//     });
//   }, []);

//   const handleShowDetails = () => {
//     setShowDetails(true);
//   };

//   return (
//     <>
//       <div
//         className="border rounded-md p-4 cursor-pointer"
//         data-aos="fade-up"
//         onClick={handleShowDetails}
//       >
//         <img src={product.image} alt={product.name} className="mb-4" />
//         <h2 className="text-xl font-bold mb-2">{product.name}</h2>
//         <p className="text-gray-600">{product.description}</p>
//         <p className="text-gray-700 font-bold text-lg mt-2">${product.price}</p>
//       </div>
//       {showDetails && <ProductDetails product={product} />}
//     </>
//   );
// };

// export default ProductCard;



// import React, { useState } from "react";
// import productsData from "../data/productsData";

// const ProductCard = ({ product, onAddToCart }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="border rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="relative">
//         <img
//           className="w-full h-80 object-cover"
//           src={product.image}
//           alt={product.name}
//         />
//         {isHovered && (
//           <button
//             className="absolute top-2 right-2 bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
//             onClick={() => onAddToCart(product)}
//           >
//             Add to Cart
//           </button>
//         )}
//       </div>
//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-[#78716C]">{product.name}</h2>
//         <p className="text-gray-700">{product.description}</p>
//         <p className="text-gray-700 font-bold">${product.price}</p>
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";
import productsData from "../data/productsData";

const ProductCard = ({ product, onAddToCart }) => {
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
          <button
            className="absolute top-2 right-2 bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
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
