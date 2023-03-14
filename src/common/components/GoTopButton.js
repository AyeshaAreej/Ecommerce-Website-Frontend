import React, { useState, useEffect } from "react";

const GoTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={handleClick}
          className="fixed bottom-0 right-0 mb-2 p-3 rounded-full bg-stone-500 text-white hover:bg-stone-400
          
           focus:outline-none focus:shadow-outline-blue"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default GoTopButton;
