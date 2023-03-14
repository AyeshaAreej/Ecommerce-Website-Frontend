import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { headerData } from "../data/headerData";
import HeaderItem from "./HeaderItem";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };

  // Handler function for mobile nav
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  // Function for changing navbar style on scroll
  const changeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <>
      <div
        className={
          navbar
            ? " bg-transparent bg-opacity-95 backdrop-filter backdrop-blur-sm  flex  justify-between fixed top-0 left-0 right-0  items-center  p-2  w-[100%]  border-b-2 border-spacing-2 border-gray-100  transition ease-in delay-50 z-50  "
            : "  flex  bg-transparent   justify-between items-center  p-2 fixed top-0 left-0 right-0   w-[100%] max-w-[100%]   transition ease-in delay-50 z-50"
        }
      >
        <img
          className="h-16 py-1 pl-7 md:pl-10 lg:pl-20 "
          src={Logo}
          alt=""
          onClick={handleLogoClick}
        />

        {/* </a> */}
        <ul className="hidden md:flex pr-7 md:pr-10 lg:pr-20 leading-[80px] space-x-1 lg:space-x-2 uppercase rounded">
          {headerData.map((item) => {
            return (
              <HeaderItem key={item.id} title={item.title} url={item.url} />
            );
          })}
          {/* <li>
            <a className="rounded p-[10px]  cursor-pointer hover:bg-lightGreen transition-all duration-300">
              <FontAwesomeIcon
                icon={faCartShopping}
                color={"#000"}
                className="pr-2 "
              />
            </a>
          </li> */}
        </ul>

        <input type="checkbox" id="check" hidden onClick={handleToggle} />
        <label
          for="check"
          class="relative float-right text-white text-3xl leading-[80px] pr-7 md:hidden cursor-pointer"
        >
          <li className="list-none">
            <FontAwesomeIcon icon={faBars} color={"#78716C"} />
          </li>
        </label>
      </div>
      {/* for mobile */}
      <ul
        className={
          navbarOpen
            ? "z-50 top-0 left-0 text-white flex-col flex items-center fixed inset-0 uppercase  bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
            : "hidden"
        }
      >
        <input type="checkbox" id="check" hidden onClick={handleToggle} />
        <label
          for="check"
          class="relative float-right text-white text-3xl leading-[80px]  cursor-pointer"
        >
          <li className="list-none">
            <FontAwesomeIcon icon={faXmark} color={"#78716C"} />
          </li>
        </label>
        {headerData.map((item) => {
          return (
            <HeaderItem
              handleToggle={handleToggle}
              key={item.id}
              title={item.title}
              url={item.url}
            />
          );
        })}
        {/* <li>
          <a className="rounded p-[10px]  cursor-pointer hover:bg-lightGreen transition-all duration-300">
            <FontAwesomeIcon
              icon={faCartShopping}
              color={"#fff"}
              className=" "
            />
          </a>
        </li> */}
      </ul>
    </>
  );
};

export default Header;
