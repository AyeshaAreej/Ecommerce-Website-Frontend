import React from "react";
import BgVideo from "../../../assets/heroVideo.mp4";
const Hero = () => {
  return (
    <section className="h-screen w-full ">
      <video
        className="h-full w-full object-cover object-center  top-0 left-0 z-10"
        src={BgVideo}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
        <h1 className="text-4xl lg:text-7xl font-bold text-teal-700 mb-4">
          Your Furniture, Your Style
        </h1>
        <p className="text-lg lg:text-xl text-teal-600 font-medium">
          Discover the perfect pieces to bring your vision to life
        </p>
      </div>
    </section>
  );
};

export default Hero;
