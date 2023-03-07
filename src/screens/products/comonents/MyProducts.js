import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "./ProductCard";
import productsData from "../data/productsData";

const MyProducts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
