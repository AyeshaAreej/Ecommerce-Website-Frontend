import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import GoTopButton from "./common/components/GoTopButton";
import Header from "./common/components/Header";
import Footer from "./common/components/Footer";
import Product from "./screens/products";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
      <Footer />

      <GoTopButton />
    </div>
  );
}

export default App;
