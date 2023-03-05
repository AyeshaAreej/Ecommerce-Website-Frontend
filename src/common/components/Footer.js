import React from "react";
// import Logo from "../../assets/Logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    // e.preventDefault();
    const hash = e.target.getAttribute("href");
    console.log("inside top", hash);
    navigate(`/${hash}`);
  };
  return (
    <div
      style={{
        boxShadow: "0px 0px 40px  rgba(0,0,0,0.2)",
      }}
      className="  backdrop-filter backdrop-blur-lg  footer w-[100%]  relative bottom-0 bg-white text-gray-500 pt-[50px] px-[30px]  shadow-xl  rounded-tl-[125px] leading-[20px] mt-[30px] "
    >
      <div className="row grid grid-rows-4 sm:grid-rows-2 sm:grid-cols-2  md:grid-rows-1  md:grid-cols-4 gap-4 m-auto ">
        <div className="col p-[20px]">
          {/* <img src={Logo} alt="Logo" className="logo w-[180px] mb-[22px] " /> */}
          <p className="w-full max-w-[300px]  font-[Poppins] text-[0.908rem] tracking-[0.5px] leading-[1.5] ">
            DevStudio creates meaningful websites that offer simplictic user
            experiences, achieve high ranks on the most popular search engines
            and promote your brand to the widest possible audience.
          </p>
        </div>
        <div className="col  px-[20px] pt-[20px] sm:pt-[32px] md:pt-[40px] ">
          <p className="text-gray-400 text-[1.5rem] tracking-[1px] font-[Poppins] font-semibold w-fit mb-[43px] relative">
            Office
            <div className="underline w-[100%] h-[5px] bg-[#767676] rounded-[3px] absolute top-6 left-0">
              <span className="animate-loading w-[15px] h-[100%] bg-[#1D0B51] rounded-[3px] absolute top-0 left-[10px]"></span>
            </div>
          </p>
          <p className="font-[Poppins] text-[1rem] tracking-[0.5px] font-normal leading-5">
            124-A Babar Block
          </p>
          <p className="font-[Poppins] text-[1rem] tracking-[0.5px] font-normal leading-5">
            New Garden Town
          </p>
          <p className="font-[Poppins] text-[1rem] tracking-[0.5px] font-normal leading-5">
            Lahore, Pakistan
          </p>
          <p className="w-fit font-[Poppins] text-[1rem] tracking-[0.5px] font-normal leading-5 border-b border-[#ccc]  cursor-pointer my-[14px] mx-[0px]">
            devstudio@gmail.com
          </p>
          <p className="cursor-pointer font-[Poppins] text-[1rem] tracking-[0.5px] font-normal leading-5">
            +91 - 0123456789
          </p>
        </div>
        <div className="col px-[20px] pt-[20px] md:pt-[40px] ">
          <p className="text-gray-400 text-[1.5rem] tracking-[1px] font-[Poppins] font-semibold w-fit mb-[35px] relative">
            Links
            <div className="underline w-[100%] h-[5px] bg-[#767676] rounded-[3px] absolute top-6 left-0">
              <span className="animate-loading w-[15px] h-[100%] bg-[#1D0B51] rounded-[3px] absolute top-0 left-[10px]"></span>
            </div>
          </p>
          <ul>
            <li className="mb-[12px] hover:scale-y-150 ">
              <a
                href="/"
                className="text-gray-500 text-[1rem] tracking-[0.9px] font-normal "
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color={"#1D0B51"}
                  className="pr-2 "
                />
                Home
              </a>
            </li>
            <li className="mb-[12px] hover:scale-y-150 ">
              <a
                href="#aboutUs"
                onClick={handleClick}
                className="text-gray-500 text-[1rem] tracking-[0.9px] font-normal "
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color={"#1D0B51"}
                  className="pr-2 "
                />
                About Us
              </a>
            </li>
            <li className="mb-[12px] hover:scale-y-150 ">
              <a
                href="#services"
                onClick={handleClick}
                className="text-gray-500 text-[1rem] tracking-[0.9px] font-normal "
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color={"#1D0B51"}
                  className="pr-2 "
                />
                Services
              </a>
            </li>
            <li className="mb-[12px] hover:scale-y-150 ">
              <a
                href="/get-quote"
                className="text-gray-500 text-[1rem] tracking-[0.9px] font-normal "
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color={"#1D0B51"}
                  className="pr-2 "
                />
                Get a Quote
              </a>
            </li>
            <li className="mb-[12px] hover:scale-y-150 ">
              <a
                href="#contactUs"
                onClick={handleClick}
                className="text-gray-500 text-[1rem] tracking-[0.9px] font-normal "
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color={"#1D0B51"}
                  className="pr-2 "
                />
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="col px-[20px]  pt-[20px] md:pr-[20px]  md:pt-[40px] ">
          <p className="text-gray-400 text-[1.5rem] tracking-[1px] font-[Poppins] font-semibold w-fit mb-[43px] relative">
            Newsletter
            <div className="underline w-[100%] h-[5px] bg-[#767676] rounded-[3px] absolute top-6 left-0">
              <span className="animate-loading w-[15px] h-[100%] bg-[#1D0B51] rounded-[3px] absolute top-0 left-[10px]"></span>
            </div>
          </p>
          <form className="pb-[15px] flex justify-between items-center border-b border-[#1D0B51] mb-[44px] w-[100%]">
            <FontAwesomeIcon
              icon={faEnvelope}
              color={"#1D0B51"}
              className="text-[18px] mr-[10px]"
            />
            <input
              className="w-[100%] bg-transparent border-0 outline-none"
              type="email"
              placeholder="Enter your email..."
              required
            />
            <button
              type="submit"
              className="bg-transparent border-0 outline-none cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                color={"#1D0B51"}
                className=""
              />
            </button>
          </form>
          <div className="socialIcons">
            <FontAwesomeIcon
              icon={faFacebook}
              size="1x"
              className="w-[40px] h-[40px] rounded-[50%]  text-center text-[20px] mr-[15px] text-[#1D0B51] cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size="1x"
              className="w-[40px] h-[40px] rounded-[50%] text-center text-[20px] text-[#1D0B51] bg-transparent mr-[15px] cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faGoogle}
              size="1x"
              className="w-[40px] h-[40px] rounded-[50%] text-center text-[20px] text-[#1D0B51] bg-transparent mr-[15px] cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="1x"
              className="w-[40px] h-[40px] rounded-[50%] text-center text-[20px] text-[#1D0B51] bg-transparent mr-[15px] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center m-auto">
        <p className=" text-[0.875rem] font-normal tracking-wider my-[20px]">
          DevStudio © 2022 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
