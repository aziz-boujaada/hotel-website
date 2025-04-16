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
      <section id="header" className=" bg-indigo-900">
        {/* Top header with contact info and social icons */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" top-header w-1/2 bg-white  flex ml-auto justify-around items-center px-4 py-2  "
        >
          {/* Contact info section */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="contact_info flex items-center gap-4"
          >
            <FontAwesomeIcon className="text-yellow-500" icon={faEnvelope} />
            <span className="text-sm">info@example.com</span>
            <FontAwesomeIcon className="text-yellow-500" icon={faPhone} />
            <span className="text-sm">+212 645325678</span>
          </motion.div>

          {/* Social media icons */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="hotel_social flex gap-4"
          >
            {HotelSocialMedias.map((socialItem, index) => (
              <a
                key={index}
                href={`https://www.${socialItem.mediaLink.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-500"
              >
                <FontAwesomeIcon
                  className="text-yellow-500 hover:text-yellow-900"
                  icon={socialItem.icon}
                />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom header with logo and navigation list */}
        <div className="bottom_header header_hight  flex items-center justify-between bg-slate-900 p-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="logo pb-6"
          >
            <h1 className="text-3xl font-bold text-yellow-500">ATLAS View</h1>
          </motion.div>

          {/* Navigation list */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="Nav_List text-center"
          >
            <ul className="flex items-center gap-6 mr-8">
              {["Home", "About", "Services", "Rooms", "Contact"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="text-2xl text-white hover:text-yellow-600 cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// HERO SECTION
function HeroSection() {
  const HotelImages = ["hotel-carousel-1.jpg", "hotel-carousel-2.jpg"];
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
            <span className="inline-block w-14 h-1 bg-yellow-500 rounded mt-2"></span>
            Luxury Living
            <span className="inline-block w-14 h-1 bg-yellow-500 rounded mt-2"></span>
          </motion.h1>

          {/* Main headline with Playfair font */}
          <h2 className="font-playfair text-6xl text-white font-bold  p-5 rounded">
            Discover the charm of the mountains at Atlas View{" "}
          </h2>
        </div>

        {/* Navigation buttons for the slider */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 rounded-full text-2xl text-white p-3 hover:bg-opacity-70"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 rounded-full text-2xl text-white p-3 hover:bg-opacity-70"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
}

// Main app component
export default function App() {
  return (
    <>
      <Header />
      <section>
        <HeroSection />
      </section>
    </>
  );
}
