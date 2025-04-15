//Import libraries
import { easeInOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashRouter as Router, Routes, Route ,Link , useLocation } from "react-router-dom";
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
    const HotelSocialMedias = [
      { mediaLink: "Instagram", icon: faInstagram },
      { mediaLink: "Facebook", icon: faFacebook },
      { mediaLink: "Twitter", icon: faXTwitter },
      { mediaLink: "Youtube", icon: faYoutube },
      { mediaLink: "LinkedIn", icon: faLinkedin },
    ];
  
    return (
      <>
      <section id="header" className=" bg-yellow-500">

     
      <motion.div
      initial= {{opacity :0 , y:-100}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
       className=" top-header w-1/2 bg-white  flex ml-auto justify-around items-center px-4 py-2  ">
        <motion.div
        initial= {{opacity :0 , y:-100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
         className="contact_info flex items-center gap-4">
          <FontAwesomeIcon className="text-yellow-500" icon={faEnvelope} />
          <span className="text-sm">info@example.com</span>
          <FontAwesomeIcon className="text-yellow-500" icon={faPhone} />
          <span className="text-sm">+212 645325678</span>
        </motion.div>
  
        <motion.div 
        initial= {{opacity :0 , y:-100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="hotel_social flex gap-4">
          {HotelSocialMedias.map((socialItem, index) => (
            <a
              key={index}
              href={`https://www.${socialItem.mediaLink.toLowerCase()}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-500"
            >
              <FontAwesomeIcon className="text-yellow-500 hover:text-yellow-900" icon={socialItem.icon} />
            </a>
          ))}
        </motion.div>
      </motion.div>
   
    <div className="bottom_header header_hight  flex items-center justify-between bg-yellow-500 p-6">
      <motion.div
      initial= {{opacity :0 , x:-100}}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="logo pb-6">
        <h1 className="text-3xl font-semibold text-white">ATLAS View</h1>
      </motion.div>
      <motion.div 
       initial= {{opacity :0 , x:100}}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 3, ease: "easeInOut" }}
      className="Nav_List text-center">
        <ul className="flex items-center gap-6 mr-8">
          {["Home", "About", "Services", "Rooms", "Contact"].map((item, index) => (
            <li key={index} className="text-2xl hover:text-white cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
    </section>
  </>
  );
}

// HERO SECTION 
function HeroSection(){

  const HotelImages =[
    'hotel-carousel-1.jpg',
    'hotel-carousel-2.jpg'
  ]
  const [CurrentImage , setCurrentImage] = useState(0)
    
  useEffect(()=>{
    const interval = setInterval (() => {
      setCurrentImage(preventImage => (preventImage+1)% HotelImages.length)
    } ,10000);
    return() => clearInterval(interval)
  } ,[]);

  const handleNext = () =>{
    setCurrentImage(preventImage => (preventImage+1)% HotelImages.length)
  };
  const handlePrev = () =>{
    setCurrentImage(preventImage => (preventImage - 1 +  HotelImages.length) % HotelImages.length)
  }
    return(
      <>
        <div className=" Hero_hight relative w-full h-screen bg-cover bg-center items-center justify-center  transition-all duration-1000"
          style= {{backgroundImage : `url(${HotelImages[CurrentImage]})`}}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-black/50 to-transparent"></div>

          <div className="hotel_description absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl  text-white font-bold  p-4 rounded">Luxury Living</h1>
          <h2 className="text-4xl text-white font-bold  p-4 rounded">Discover the charm of the mountains at Atlas View </h2>
          </div>
          <button 
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform translate-y-1/2 bg-black bg-opacity-40 rounded-full text-2xl text-white p-3 hover:bg-opacity-70"
          >
            <FontAwesomeIcon icon={faChevronLeft}/>
          </button>
          <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform translate-y-1/2 bg-black bg-opacity-40 rounded-full text-2xl text-white p-3 hover:bg-opacity-70"
          >
            <FontAwesomeIcon icon={faChevronRight}/>
          </button>
        </div>
      </>
    )
}
 export default function App(){
  return(
    <>
     <Header/>
     <section>
      <HeroSection/>
     </section>
    </>
  )
 }