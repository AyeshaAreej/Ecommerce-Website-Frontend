import React from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PostCard = ({ id, link, color, img, heading, text }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container flex flex-col rounded-xl mt-10 w-[100%] mb-10">
        <img src={img} alt="" className="rounded-t-xl h-[11rem]" />
        <div className={`${color} p-6 rounded-b-xl items-end h-[15rem]`}>
          <h2 className="text-1xl font-bold">{heading}</h2>
          <p className="my-3 text-sm">{text}</p>
          <p
            onClick={() => {}}
            className="text-green items-end font-semibold cursor-pointer"
          >
            See the Post
            <FontAwesomeIcon
              icon={faArrowRight}
              color={"#0F766E"}
              className="text-orange ml-3 align-middle"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
