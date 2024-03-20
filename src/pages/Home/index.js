import  React , { useRef} from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// import { generateSlides } from '../utils';

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
function Home() {
  const options = {
    arrows: false,
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: "15rem",
  };
    
  const sliderRef = useRef();

  const handleChange = () => {
    console.log(1111111111111)
    console.log(sliderRef)
    if(sliderRef.current)
      sliderRef.current.handleShowSlider();
  }
  return (
    <div className="w-full h-full relative overflow-hidden z-10">
      <Navbar forwardedRef={sliderRef}/>

      <main className="w-full h-full overflow-auto" >
        <Splide
          options={options}
          aria-labelledby="autoplay-example-heading"
          hasTrack={false}
          className="!p-0"
        >
          <div style={{ position: "relative" }}>
            <SplideTrack>
              <SplideSlide>
                <img
                  src="image1.jpg"
                  className="bg-red-500 h-full"
                  alt="Image 1"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="image2.jpg"
                  className="bg-yellow-500 h-full"
                  alt="Image 2"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="image3.jpg"
                  className="bg-slate-500 h-full"
                  alt="Image 3"
                />
              </SplideSlide>
            </SplideTrack>
          </div>
        </Splide>
        {/* <button onClick={handleChange} >Slider</button> */}

      </main>
      <Slider ref={sliderRef} />
    </div>
  );
}

export default Home;
