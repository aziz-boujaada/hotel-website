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
  faBars
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
      <div className="flex justify-between items-center px-4 py-2">
        <div className="contact_info flex items-center gap-4">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="text-sm">info@example.com</span>
          <FontAwesomeIcon icon={faPhone} />
          <span className="text-sm">+212 645325678</span>
        </div>
  
        <div className="hotel_social flex gap-4">
          {HotelSocialMedias.map((socialItem, index) => (
            <a
              key={index}
              href={`https://www.${socialItem.mediaLink.toLowerCase()}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-500"
            >
              <FontAwesomeIcon icon={socialItem.icon} />
            </a>
          ))}
        </div>
      </div>
   
    <div className="bottom_header flex items-center justify-between bg-orange-500 p-5">
      <div className="logo text-white text-2xl font-semibold">
        <h1>Atlas View</h1>
      </div>
      <div className="Nav_List">
        <ul className="flex items-center gap-6">
          {["home", "about", "services", "rooms", "contact"].map((item, index) => (
            <li key={index} className="text-white text-lg hover:text-orange-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
  );
}

 export default function app(){
  return(
    <>
     <Header/>
    </>
  )
 }