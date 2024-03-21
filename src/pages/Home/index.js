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

// user logo
import Userlogo from "./assets/slider/user.png";

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

  const greetings = [
    "Hello!", 
    "Hi there!", 
    "Welcome!", 
    "Hey!", 
    "Greetings!", 
    // "Good to see you!", 
    "What's up?", 
    "Howdy!", 
    "Salutations!",
    // "Hey, how's it going?",
    // "Nice to see you!",
    // "Hey, good to have you here!",
    "Yo!",
    "Hiya!",
    "Hola!",
    "Bonjour!",
    "Ciao!",
    "Namaste!"
  ];

  const names = [
    "Snehal", 
    "Pavan", 
    "Surya", 
    "Shyam", 
    "Tejas", 
    "Rushikesh", 
    "Somnath", 
    "Vinay", 
    "Shivani",
    "Sakshi",
    "Devevndra",
    "Nikhil",
    "Divyash",
    "Vishwa ",
    "Vihar",
    "Chirag",
    "Abhishek",
    "Shubham",
    "Aparna"
  ];

  const navigationOption = ['Home','Smart Basket \ My List','Shop By Category','Offers'
    
    // {name:"HOME"},
    // {name:"Smart Basket \ My List"},
    // {name:"Shop By Category"},
    // {name:"Offers"},
    // {name:"The Beauty Store"},
    // {name:"Bb Lifestyle"}
  ];

  // Selecting a random greeting
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

  const randomNames = names[Math.floor(Math.random() * names.length)];
    
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

      <main className="w-full h-full overflow-auto z-10" >
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
      <Slider ref={sliderRef} width="75%" direction="right" >
        <div className="w-full h-full pt-12">
          <div className="flex justify-between items-center w-full px-4 ">
            <div className="w-full">
              <p className="font-bold text-lg">{randomGreeting}</p>
              <p className="font-normal text-xs text-slate-600">{randomNames}</p>
            </div>
            <div className="ml-1 flex-none w-14 h-14 border border-px border-[#15864c] rounded-full flex justify-center items-center">
              <img src={Userlogo} className="w-7 h-7" alt="default pic"></img>
            </div>
          </div>
          <section className="w-full h-full">
             
          </section>
        </div>
        
      </Slider>
    </div>
  );
}

export default Home;
