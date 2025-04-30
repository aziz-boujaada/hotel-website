// src/components/Header.jsx
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
          <h1 className="text-xl lg:text-3xl font-bold text-orange-500">
            ATLAS View
          </h1>
        </div>
      </AnimationXtoRight>
    </>
  );
}
function NavigationList() {
  const [navVisible, setNavVisible] = useState(false);

  // Close navigation when clicking outside the nav list
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

  // Open menu on clicking bars icon
  const handleOpen = () => {
    setNavVisible(true);
  };

  // Close menu on clicking x icon
  const handleClose = () => {
    setNavVisible(false);
  };

  // Ref and inView for triggering animation only once
  const { ref: NavRef, inView: NavInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  //control navigation list in laptop & mobile
  const [isMobile , setIsMobile] = useState(false);

  // Check window width to define mobile or not
  useEffect(()=>{
    const checkIsMobile = () =>{
     if( window.innerWidth > 768 ){
      setIsMobile(true);
     }else{
      setIsMobile(false)
     }
    }

    // Initial check
    checkIsMobile();
    window.addEventListener("resize" , checkIsMobile);
    return () =>{
       removeEventListener("resize" , checkIsMobile)
      }
  }, [])

  return (
    <AnimationX>
      <motion.div
        transition={{ duration: 3, ease: "easeInOut" }}
        className=" text-center"
      >
        {/* icon for opening nav on mobile */}
        <FontAwesomeIcon
          icon={faBars}
          onClick={(event) => {
            event.stopPropagation();
            handleOpen();
          }}
          className="text-3xl cursor-pointer text-white hover:text-orange-500 lg:hidden"
        />

        {/* Navigation list with animation */}
        <motion.ul
          ref={NavRef}
          initial={{ x: "-100%", opacity: 0 }}
          animate={
            isMobile
              ? navVisible && NavInView
                ? { x: 0, opacity: 1 }
                : { x: "-100%", opacity: 0 }
              : { x: 0, opacity: 1 }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`Nav_List absolute top-0 left-0 w-full h-[60vh] flex flex-col lg:flex-row items-center gap-6 p-8
            ${isMobile ? "bg-blue-950" : "lg:static"}
            ${isMobile ? (navVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none") : "opacity-100 pointer-events-auto"}
          `}
        >
          {/* Close icon for mobile */}
          {navVisible && isMobile && (
            <FontAwesomeIcon
              icon={faXmark}
              onClick={handleClose}
              className=" absolute left-1 top-1 text-3xl cursor-pointer text-white  hover:text-orange-500 lg:hidden"
            />
          )}

          {/* Navigation links */}
          {["Home", "About", "Services", "Rooms", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setNavVisible(false)}
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
        </motion.ul>
      </motion.div>
    </AnimationX>
  );
}
export default function Header() {
  return (
    <>
      <section
        id="header"
        className=" bg-blue-950 fixed z-50 w-full container "
      >
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
        <div className="bottom_header header_hight  flex items-center justify-between lg:px-5 ">
          {/* Logo */}
          <Logo />
          {/* Navigation list */}
          <NavigationList />
        </div>
      </section>
    </>
  );
}
