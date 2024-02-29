import React from "react";
import SFarmLogo from "./assets/sfarmlogo.png";
import WishList from "./assets/love.png";
import ShoppingBag from "./assets/bag.png";
// import SearchIcon from "./assets/search.png";

// Components
import Hamburger from "../hamburger";

function Navbar() {
  return (
    <div className="w-full h-10 flex justify-between items-center">
      <div className="w-fit h-full flex">
        <img src={SFarmLogo} className="w-10 h-10" alt="comapny sframlogo" />
      </div>
      <div className="w-fit h-10 flex items-center justify-center">
        {/* <img src={SearchIcon} className="w-6 h-6" alt="comapny sframlogo" /> */}
        <img src={WishList} className="w-6 h-6 flex" alt="comapny sframlogo" />
        <img src={ShoppingBag} className="w-6 h-6" alt="comapny sframlogo" />
      </div>
    </div>
  );
}

export default Navbar;
