import React from "react";
import { useState } from "react";

// Images

import SframLogo from "./assets/sfarmlogo.png";
import WishList from "./assets/heart1.png";
import ShoppingBag from "./assets/shopping-bag.png";
// Components
import Hamburger from "../hamburger";

function Navbar() {
  const [active, setActive] = useState(false);

  const handleHamburger = () => {
    setActive(!active);
  };
  return (
    <div className="w-full h-fit flex justify-between items-center py-2.5 px-4">
      <div className="w-fit h-full flex items-center">
        <div
          className="w-fit h-fit flex flex-col relative cursor-pointer"
          onClick={handleHamburger}
        >
          <span
            className={`h-0.5 mb-1 rounded-md bg-[#15864c] transform duration-100 ease-linear ${
              active
                ? "-rotate-45 absoulte left-0 w-2 translate-y-1"
                : "w-6 rotate-0"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 mb-1 rounded-md bg-[#15864c] transition-all duration-100 ease-linear`}
          ></span>
          <span
            className={`h-0.5 rounded-md bg-[#15864c] transform duration-100 ease-linear ${
              active
                ? "rotate-45 absoulte left-0 w-2 -translate-y-1"
                : "w-6 rotate-0"
            }`}
          ></span>
        </div>
        <img src={SframLogo} alt="logo" className="w-10 h-10 ml-2" />
      </div>
      <div className="w-fit h-full flex items-center">
        <div className="w-full h-full relative p-1">
          <div className="w-5 h-5 rounded-full border border-px border-[#15864c]"></div>
          <hr className="w-px h-2.5 absoulte bottom-0 right-0 -rotate-45 bg-[#15864c]"></hr>
          {/* <hr className="w-px h-2.5 absoulte bottom-0 right-0 rotate-45 bg-[#15864c]"></hr> */}
        </div>
        {/* <img
					src={WishList}
					alt="logo"
					className="w-10 h-10 pt-1.5 px-1.5 pb-1"
					/> */}
        <img src={ShoppingBag} alt="logo" className="w-10 h-10" />
      </div>
    </div>
  );
}

export default Navbar;
