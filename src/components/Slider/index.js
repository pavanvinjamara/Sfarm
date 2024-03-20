import React , { useState, useEffect }  from "react";
import "./index.scss";



const Slider = React.forwardRef(( props , ref) => {
  const [showSlider , setShowSlider] = useState(false) ///destrucring array
  const handleShowSlider = () => {
    console.log(11111111111)
    setShowSlider(!showSlider)
    
   };
    React.useImperativeHandle(ref, () => ({handleShowSlider}))
    return  <div className="absolute h-full w-full top-0 left-0">
              <div className={`absolute top-0 left-0 h-full w-full backdrop-brightness-50 bg-white/30 transition-all ease-linear overflow-hidden  ${showSlider ? 'opacity-100 z-30': 'opacity-0 delay-100 -z-1'} `} onClick={handleShowSlider}>
              </div>  
              <div className={`w-[60%] h-full absolute top-0 left-0 transition-all ease-linear duration-500 z-50 bg-white ${showSlider ? 'translate-x-0 ': '-translate-x-full'} `}></div>
            


          
            </div>
});

export default Slider;