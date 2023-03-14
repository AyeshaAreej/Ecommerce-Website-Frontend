import React, { useState } from "react";
import productsData from "../data/productsData";
import ProductCard from "./ProductCard";

const MyProducts = () => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl text-[#78716C] font-bold py-14 text-center">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
          />
        ))}
      </div>
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-all duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-4 py-2 flex justify-between items-center border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 pt-24">Cart</h3>
          <button
            className="text-gray-600 hover:text-gray-800 pt-24"
            onClick={toggleCart}
          >
            Close
          </button>
        </div>
        <div className="p-4">
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-2"
                >
                  <p className="text-gray-800">{item.name}</p>
                  <p className="text-gray-800 font-semibold">${item.price}</p>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4">
            <p className="text-gray-700 font-bold">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <button className="bg-[#78716C] text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-4">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <button
        className="fixed bottom-4 right-4 bg-[#78716C] text-white py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        onClick={toggleCart}
      >
        cart
      </button>
    </div>
  );
};
export default MyProducts;
