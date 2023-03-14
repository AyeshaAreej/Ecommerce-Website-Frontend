import React from "react";
import BlogCard from "../../../common/components/PostCard";
import { postData } from "../data/postData";

const Services = () => {
  return (
    <div className="bg-lightPink  pb-5 w-full  " id="services">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold p-10 text-teal-700  border-b-2 border-[#ABB0B1]">
          Services
        </h1>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center ">
          {postData.map((item) => {
            return (
              <div className="w-[22rem] px-4">
                <BlogCard
                  key={item.id}
                  id={item.id}
                  link={item.link}
                  color="bg-[#FFF]"
                  img={item.img}
                  heading={item.heading}
                  text={item.text}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
