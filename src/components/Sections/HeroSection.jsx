// HERO SECTION
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faChevronLeft,
 faChevronRight
} from "@fortawesome/free-solid-svg-icons";

import AnimationX from "../Animations/AnimationX"
import AnimationY from "../Animations/AnimationY";
import CallToActionButtons from "../Forms/CTA";

export default function HeroSection() {
  const HotelImages = [
    "/hotel-carousel-1.jpg",
    "/hotel-carousel-2.jpg",
    "/hotel-carousel-3.jpg",
  ];
  const [CurrentImage, setCurrentImage] = useState(0);

  // Automatically change background image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (preventImage) => (preventImage + 1) % HotelImages.length
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Manually navigate to next image
  const handleNext = () => {
    setCurrentImage((preventImage) => (preventImage + 1) % HotelImages.length);
  };

  // Manually navigate to previous image
  const handlePrev = () => {
    setCurrentImage(
      (preventImage) =>
        (preventImage - 1 + HotelImages.length) % HotelImages.length
    );
  };
  const Image = HotelImages[CurrentImage]
  return (
    <>
      {/* Fullscreen background hero section with image slider */}
      <div
        className=" relative w-full h-screen bg-cover bg-center items-center justify-center  transition-all duration-1000"
        style={{ backgroundImage: `url(${HotelImages[CurrentImage]})` }}
      >
        {/* Overlay gradient for better text visibility */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 139, 0.8), rgba(0, 0, 139, 0.6), transparent)",
          }}
        ></div>

        {/* Centered text content */}
        <div className="hotel_description  w-full lg:w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <AnimationY>
          <h1 className=" text-xl lg:text-3xl text-white font-bold rounded flex items-center justify-center gap-4" >
            <span className="inline-block w-14 h-1 bg-orange-500 rounded mt-2"></span>
            Luxury Living
            <span className="inline-block w-14 h-1 bg-orange-500 rounded mt-2"></span>
          </h1>
          </AnimationY>
          {/* Main headline with Playfair font */}
          <AnimationX>
            <h2 className="font-Parkinsans lg:font-playfair text-4xl lg:text-6xl text-white font-bold p-2 lg:p-5 shadow-2xl ">
              Discover the charm of the mountains at Atlas View
            </h2>
          </AnimationX>
          {/* call to action buttons */}
          <AnimationY>
            <CallToActionButtons/>
          <div className="flex justify-center gap-4">
             {HotelImages.map((_ ,i)=>(
              <button key={i}
               onClick={ ()=>setCurrentImage(i)}
               className={`w-3 h-3 rounded-full  mt-6 ${
                CurrentImage === i ? "bg-orange-500 w-8" : "bg-gray-300" 
               }`}
               />
             ))}
          </div>
          </AnimationY>
        </div>

        {/* Navigation buttons for the slider */}
        <button
          onClick={handlePrev}
          className="absolute left-[20%] lg:left-4 top-[77%] lg:top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 rounded-full text-2xl text-white p-3 hover:bg-opacity-70"
          aria-label="Previous slide button"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-[20%] lg:right-4 top-[77%] lg:top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 rounded-full text-2xl text-white p-3 hover:bg-opacity-70"
          aria-label="Next slide button"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
}
