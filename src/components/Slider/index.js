import React , { useState, useEffect }  from "react";
import "./index.scss";


const Slider = React.forwardRef(( props , ref ) => {
  const { direction , children , width } = props;
  const [showSlider , setShowSlider] = useState(false) ///destrucring array
  const handleShowSlider = () => {
    console.log(11111111111)
    setShowSlider(!showSlider)
    
   };
    React.useImperativeHandle(ref, () => ({handleShowSlider}))
    return  (
      
            <div className={`absolute h-full w-full top-0 left-0 transition-all ease-linear duration-300 ${showSlider ? 'z-35' : 'delay-1000 -z-10'}`}>
              <div className={`w-full h-full absolute top-0 transition-all ease-linear duration-500  backdrop-brightness-50 bg-white/30 ${
                      showSlider ? "opacity-100 z-40 scale-100" : "opacity-0 delay-100 -z-10"
                    } `} onClick={handleShowSlider}> 
                    
              </div>  
              <div className={`${'w-['+width+']'} h-full absolute top-0 bg-gradient-to-b from-green-100 from-0% to-[white] to-35% ${
                      direction === "left" ? "left-0" : "right-0"
                    } transition-all ease-linear duration-300 z-50 bg-white ${showSlider ? 'translate-x-0 ': '-translate-x-full'} `}>
                       {children}
              </div>
             
            </div>
            )
});

export default Slider;