// Import libraries
import { easeInOut, motion } from "framer-motion"; // For animations
import { useInView } from "react-intersection-observer"; // Detect if element is in viewport
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome icons
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom"; // Routing for React

// Import solid and brand icons
import {
  faCode,
  faExternalLinkAlt,
  faLink,
  faEnvelope,
  faPhone,
  faLocation,
  faPaperPlane,
  faXmark,
  faBars,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faGithub,
  faLinkedin,
  faDiscord,
  faInstagram,
  faXTwitter,
  faYoutube,
  faHtml5,
  faCss3,
  faJs,
  faGitSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import { useState, useEffect } from "react";

function AnimationX({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
function AnimationY({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
// CTA buttons
function CallToActionButtons() {
  return (
    <>
      <div className=" flex items-center justify-center gap-6 m-8">
        <button
          className="w-1/2  bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-4  mx-2 transition duration-300"
          aria-label="View rooms button"
        >
          OUR ROOMS
        </button>
        <button
          className="w-1/2 bg-white hover:bg-gray-200 text-indigo-900 font-bold py-4 px-4  mx-2 transition duration-300"
          aria-label="Book a room button"
        >
          BOOK A ROOM
        </button>
      </div>
    </>
  );
}
function Header() {
  // Social media links for the hotel
  const HotelSocialMedias = [
    { mediaLink: "Instagram", icon: faInstagram },
    { mediaLink: "Facebook", icon: faFacebook },
    { mediaLink: "Twitter", icon: faXTwitter },
    { mediaLink: "Youtube", icon: faYoutube },
    { mediaLink: "LinkedIn", icon: faLinkedin },
  ];

  return (
    <>
      <section id="header" className=" bg-blue-950">
        {/* Top header with contact info and social icons */}
        <AnimationY>
          <div className=" top-header w-1/2 bg-white  flex ml-auto justify-around items-center px-4 py-2  ">
            {/* Contact info section */}
            <AnimationY>
              <div className="contact_info flex items-center gap-4">
                <FontAwesomeIcon
                  className="text-orange-500"
                  icon={faEnvelope}
                />
                <span className="text-sm">info@example.com</span>
                <FontAwesomeIcon className="text-orange-500" icon={faPhone} />
                <span className="text-sm">+212 645325678</span>
              </div>
            </AnimationY>

            {/* Social media icons */}
            <AnimationX>
              <div className="hotel_social flex gap-4">
                {HotelSocialMedias.map((socialItem, index) => (
                  <a
                    key={index}
                    href={`https://www.${socialItem.mediaLink.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:text-blue-500"
                  >
                    <FontAwesomeIcon
                      className="text-orange-500 hover:text-orange-400"
                      icon={socialItem.icon}
                    />
                  </a>
                ))}
              </div>
            </AnimationX>
          </div>
        </AnimationY>

        {/* Bottom header with logo and navigation list */}
        <div className="bottom_header header_hight  flex items-center justify-between bg-blue-950 p-6">
          {/* Logo */}
          <AnimationX>
            <div className="logo pb-6">
              <h1 className="text-3xl font-bold text-orange-500">ATLAS View</h1>
            </div>
          </AnimationX>

          {/* Navigation list */}
          <AnimationX>
            <motion.div
              transition={{ duration: 3, ease: "easeInOut" }}
              className="Nav_List text-center"
            >
              <ul className="flex items-center gap-6 mr-8">
                {["Home", "About", "Services", "Rooms", "Contact"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="relative text-2xl text-white cursor-pointer
                                 after:absolute after:bottom-0 after:left-0
                                 after:w-0 after:h-1 after:bg-orange-500  rounded 
                                 after:transition-all after:duration-300  hover:after:w-full"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          </AnimationX>
        </div>
      </section>
    </>
  );
}

// HERO SECTION
function HeroSection() {
  const HotelImages = [
    "hotel-carousel-1.jpg",
    "hotel-carousel-2.jpg",
    "hotel-carousel-3.jpg",
  ];
  const [CurrentImage, setCurrentImage] = useState(0);

  // Automatically change background image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (preventImage) => (preventImage + 1) % HotelImages.length
      );
    }, 6000);
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

  return (
    <>
      {/* Fullscreen background hero section with image slider */}
      <div
        className=" Hero_hight relative w-full h-screen bg-cover bg-center items-center justify-center  transition-all duration-1000"
        style={{ backgroundImage: `url(${HotelImages[CurrentImage]})` }}
      >
        {/* Overlay gradient for better text visibility */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 139, 0.6), rgba(0, 0, 139, 0.6), transparent)",
          }}
        ></div>

        {/* Centered text content */}
        <div className="hotel_description absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: easeInOut }}
            className="text-3xl text-white font-bold rounded flex items-center justify-center gap-4"
          >
            <span className="inline-block w-14 h-1 bg-orange-500 rounded mt-2"></span>
            Luxury Living
            <span className="inline-block w-14 h-1 bg-orange-500 rounded mt-2"></span>
          </motion.h1>

          {/* Main headline with Playfair font */}
          <AnimationX>
            <h2 className="font-playfair text-6xl text-white font-bold  p-5 rounded">
              Discover the charm of the mountains at Atlas View{" "}
            </h2>
          </AnimationX>
          {/* call to action buttons */}
          <AnimationY>
            <CallToActionButtons />
          </AnimationY>
        </div>

        {/* Navigation buttons for the slider */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 rounded-full text-2xl text-white p-3 hover:bg-opacity-70"
          aria-label="Previous slide button"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 rounded-full text-2xl text-white p-3 hover:bg-opacity-70"
          aria-label="Next slide button"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
}

   // CALL TO ACTION FORM 
   function CallToActionForm(){
    return(
      <>
<section className="CTA_form absolute z-30 left-1/2 bottom-[-50px] transform -translate-x-1/2 bg-white p-8 rounded-lg shadow-2xl  md:w-auto flex justify-center">
          <div className="form_inputs   flex justify-center gap-12">
            <input type="date" placeholder="cheek-in Date"className="bg-gray-200 p-2 w-[180px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
 />
            <input type="date" placeholder="cheek-out Date" className="bg-gray-200 p-2 w-[180px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
 />
             <select name="" id="" className="bg-gray-200 p-2 w-[180px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300">
              <option value="">Adults</option>
              <option value=""> 1 Adult </option>
              <option value="">2 Adults</option>
              <option value=""> 3 Adults </option>
             </select>

             <select name="" id="" className="bg-gray-200 p-2 w-[180px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
             >
              <option value="">Child</option>
              <option value="">Child 1</option>
              <option value="">Child 2</option>
              <option value="">Child 3</option>
             </select>
             <button className="bg-orange-500 p-2 w-[160px] hover:bg-orange-400 transition duration-300"
             >submit</button>
          </div>
  
        </section>
       
      </>
    )
   }
// Main app component
export default function App() {
  return (
    <>
      <Header />
      <section>
        <HeroSection />
        <CallToActionForm/>
      </section>
      
     
    </>
  );
}
