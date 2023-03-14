import React from "react";
import galleryData from "../data/galleryData";
import "aos/dist/aos.css";
import AOS from "aos";

const Gallery = () => {
  // initialize AOS library
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-14 bg-stone-600">
      <div className="flex justify-center items-center">
        <h1 className="text-center pb-[80px] font-medium text-white text-[2rem] md:text-[2.5rem] tracking-[-3%] leading-[40px] md:leading-[70px] max-w-[600px] m-auto md:m-0">
          Gallery
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className="bg-light-brown shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 "
            data-aos="fade-up"
          >
            <img src={item.imageUrl} alt={item.altText} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
