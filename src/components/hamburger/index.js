import React from "react";
import "./index.scss";

function Hamburger(type) {
  return (
    <div className="w-10 h-10">
      <span className="w-full h-2 bg-green-500"></span>
      <span className="w-full h-2 bg-green-500"></span>
      <span className="w-full h-2 bg-green-500"></span>
    </div>
  );
}

export default Hamburger;
