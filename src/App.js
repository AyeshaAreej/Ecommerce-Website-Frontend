import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import GoTopButton from "./common/components/GoTopButton";
import Header from "./common/components/Header";
import Footer from "./common/components/Footer";
import Product from "./screens/products";
import SignIn from "./screens/SignIn/SignIn";
import { SignUp } from "./screens/SignUP/SignUp";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />

      <GoTopButton />
    </div>
  );
}

export default App;
