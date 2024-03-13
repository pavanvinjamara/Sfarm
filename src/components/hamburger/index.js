import React from "react";
import { useState } from 'react';
import "./index.scss";

function Hamburger(type) {
	const [active, setActive] = useState(false);

    const handleHamburger = () => {
        setActive(!active)
    };
	return (
		<div className="w-full h-full">
			<div className="w-fit h-fit flex flex-col cursor-pointer" onClick={handleHamburger}>
				<span className={`w-6 h-0.5 mb-1 rounded-md bg-[#15864c] transform duration-100 ease-linear ${active ? "rotate-45 absoulte translate-y-1.5" : "rotate-0"}`}></span>
				<span className={`w-6 h-0.5 mb-1 rounded-md bg-[#15864c] transition-all duration-100 ease-linear ${active ? "-translate-x-full opacity-0 " : "translate-x-0 opacity-100"}`}></span>
				<span className={`w-6 h-0.5 rounded-md bg-[#15864c] transform duration-100 ease-linear ${active ? "-rotate-45 absoulte -translate-y-1.5" : "rotate-0"}`}></span>
			</div>
			<div className="w-fit h-fit flex flex-col cursor-pointer" onClick={handleHamburger}>
				<span className={`h-0.5 mb-1 rounded-md bg-[#15864c] transform duration-100 ease-linear ${active ? "-rotate-45 absoulte w-2 translate-y-1" : "w-6 rotate-0"}`}></span>
				<span className={`w-6 h-0.5 mb-1 rounded-md bg-[#15864c] transition-all duration-100 ease-linear`}></span>
				<span className={`h-0.5 rounded-md bg-[#15864c] transform duration-100 ease-linear ${active ? "rotate-45 absoulte w-2 -translate-y-1" : "w-6 rotate-0"}`}></span>
			</div>
		</div>
	);
}

export default Hamburger;
