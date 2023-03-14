import React from "react";
import { useNavigate } from "react-router";

const HeaderItem = ({ title, url, handleToggle }) => {
  const navigate = useNavigate();
  const handleCLick = (e) => {
    e.stopPropagation();
    navigate(url);
    handleToggle();
  };
  return (
    <li>
      <a
        className="rounded p-[10px]  cursor-pointer hover:bg-lightGreen transition-all duration-300"
        onClick={handleCLick}
      >
        {title}
      </a>
    </li>
  );
};

export default HeaderItem;
