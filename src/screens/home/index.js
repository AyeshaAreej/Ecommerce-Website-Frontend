import React from "react";
import Hero from "./components/Hero";
import Posts from "./components/Services";
import Process from "./components/Process";
import Gallery from "./components/Gallery";

const Home = () => {
  return (
    <div>
      <Hero />
      <Process />
      <Posts />
      <Gallery />
    </div>
  );
};

export default Home;
