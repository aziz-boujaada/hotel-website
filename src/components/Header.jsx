 
// src/components/Header.jsx
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import AnimationX from "./Animations/AnimationX"
import AnimationY from "./Animations/AnimationY";


export default function Header() {
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