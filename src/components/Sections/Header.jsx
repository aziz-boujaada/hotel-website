// src/components/Header.jsx
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import AnimationXtoRight from "../Animations/AnimationXtoRight";
import AnimationX from "../Animations/AnimationX";
import AnimationY from "../Animations/AnimationY";

// Social media links for the hotel
const HotelSocialMedias = [
  { mediaLink: "Instagram", icon: faInstagram },
  { mediaLink: "Facebook", icon: faFacebook },
  { mediaLink: "Twitter", icon: faXTwitter },
  { mediaLink: "Youtube", icon: faYoutube },
  { mediaLink: "LinkedIn", icon: faLinkedin },
];

function ContactInfo() {
  return (
    <AnimationX>
      <div className="contact_info flex items-center gap-4">
        <FontAwesomeIcon className="text-orange-500" icon={faEnvelope} />
        <span className="text-sm">info@example.com</span>
        <FontAwesomeIcon className="text-orange-500" icon={faPhone} />
        <span className="text-sm">+212 645325678</span>
      </div>
    </AnimationX>
  );
}
function SocialIcons() {
  return (
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
  );
}
function Logo() {
  return (
    <>
      {/* Logo */}
      <AnimationXtoRight>
        <div className="logo pb-6">
          <h1 className="text-3xl font-bold text-orange-500">ATLAS View</h1>
        </div>
      </AnimationXtoRight>
    </>
  );
}
function NavigationList() {
  const [navVisible, setNavVisible] = useState(false);
  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (navVisible && !event.target.closest(".Nav_List")) {
        setNavVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };

  }, [navVisible]);
  const handleOpen = () => {
    setNavVisible(true);
  };
  const handleClose = () => {
    setNavVisible(false);
  };
  
  return (
    <AnimationX>
      <motion.div
        transition={{ duration: 3, ease: "easeInOut" }}
        className=" text-center"
      >
        
         <FontAwesomeIcon icon={faBars} onClick={(event)=>{ event.stopPropagation();handleOpen()}} className="text-3xl cursor-pointer text-white lg:hidden"  />
    
       
    
      <ul
      className={`Nav_List flex flex-col lg:flex-row items-center gap-6 mr-8 mt-52 lg:mt-0  p-6 ${
        navVisible ? "block " : "hidden"
      } lg:flex lg:static`}
      >
          
     {navVisible && (
       <FontAwesomeIcon icon={faXmark} onClick={handleClose} className="text-3xl cursor-pointer text-white lg:hidden"/>
     )}
          {["Home", "About", "Services", "Rooms", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive
                      ? "relative text-2xl text-orange-500 cursor-pointer after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-orange-500  rounded-full  after:transition-all after:duration-300  hover:after:w-full"
                      : "relative text-2xl text-white cursor-pointer after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-orange-500  rounded-full  after:transition-all after:duration-300  hover:after:w-full"
                  }
                >
                  {item}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </motion.div>
    </AnimationX>
  );
}
export default function Header() {
  return (
    <>
      <section id="header" className=" bg-blue-950 fixed z-50 w-full ">
        {/* Top header with contact info and social icons */}
        <AnimationX>
          <div className=" top-header w-full  lg:w-1/2 hidden  bg-white  lg:flex ml-auto justify-around items-center px-4 py-2  ">
            {/* Contact info section */}
            <ContactInfo />

            {/* Social media icons */}
            <SocialIcons />
          </div>
        </AnimationX>

        {/* Bottom header with logo and navigation list */}
        <div className="bottom_header header_hight  flex items-center justify-between ">
          {/* Logo */}
          <Logo />
          {/* Navigation list */}
          <NavigationList />
        </div>
      </section>
    </>
  );
}
