// Import brand icons from FontAwesome
import {
  faFacebook,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// Import solid icons from FontAwesome
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

// Import animation components
import AnimationXtoRight from "../Animations/AnimationXtoRight";
import AnimationX from "../Animations/AnimationX";
import AnimationY from "../Animations/AnimationY";

// Import FontAwesome icon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// Component that displays a paragraph about the hotel
function FooterParagraph() {
  return (
    <AnimationX>
      <div className="bg-orange-500 w-full lg:w-[350px] p-3 ">
        <h1 className="text-3xl font-bold pt-3 text-white ">ATLAS VIEW </h1>
        <p className="py-5 text-white">
          Located in the heart of the Atlas Mountains, Atlas View Hotel is where
          the charm of nature meets the warmth of authentic Moroccan
          hospitality. Designed for those seeking peace and relaxation,
        </p>
      </div>
    </AnimationX>
  );
}

// Component that shows contact info and social media icons
function ContactInformation() {
  const contactInfo = [
    {
      contactIcon: faEnvelope,
      contactLink: "mailto:azizboujaad120@gmail.com",
      contactLabel: "azizboujaad120@gmail.com",
    },
    {
      contactIcon: faPhone,
      contactLink: "tel:+212 674490454",
      contactLabel: "+212 674490454",
    },
    {
      contactIcon: faLocationDot,
      contactLabel: "Street 123,Marrakech,Morocco",
    },
  ];

  const socialIcons = [
    { icon: faFacebook, label: "Facebook" },
    { icon: faXTwitter, label: "Twitter" },
    { icon: faYoutube, label: "YouTube" },
    { icon: faLinkedin, label: "LinkedIn" },
  ];

  return (
    <div className="relative">
      <AnimationY>
        <div>
          {/* Contact section title */}
          <h1 className="  font-semibold text-orange-400 pb-3">
            CONTACT Us{" "}
            <span className="inline-block w-14 h-1 bg-orange-400 rounded  m-1"></span>
          </h1>
          {/* Loop through contact info items */}
          {contactInfo.map((contact, index) => (
            <div key={index} className="pb-4">
              {contact.contactLink ? (
                <a href={contact.contactLink}>
                  <FontAwesomeIcon
                    icon={contact.contactIcon}
                    className="text-xl text-white"
                  />
                  <span className="text-white pl-3">
                    {contact.contactLabel}
                  </span>
                </a>
              ) : (
                <div>
                  <FontAwesomeIcon
                    icon={contact.contactIcon}
                    className="text-xl text-white"
                  />
                  <span className="text-white pl-3">
                    {contact.contactLabel}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </AnimationY>

      {/* Display social media icons */}
      <AnimationXtoRight>
        <div className=" flex gap-3 pt-5">
          {socialIcons.map((item, index) => (
            <FontAwesomeIcon
              key={index}
              icon={item.icon}
              aria-label={`${item.label} icon`}
              className="text-2xl text-white border-2 rounded-full p-2 cursor-pointer hover:bg-white hover:text-orange-500 transition-all duration-300"
            />
          ))}
        </div>
      </AnimationXtoRight>
    </div>
  );
}

// Component for quick navigation links
function QuickLinks() {
  return (
    <AnimationXtoRight>
      <div>
        <h1 className="  font-semibold text-orange-400 pb-3">
          COMPANY{" "}
          <span className="inline-block w-14 h-1 bg-orange-400 rounded  m-1"></span>
        </h1>
        <ul>
          {/* List of quick nav links */}
          {["Home", "About", "Services", "Rooms", "Contact"].map((link, idx) => (
            <li
              key={idx}
              className="text-white pb-4 hover:text-orange-400  hover:translate-x-2 transition-all duration-300"
            >
              <a href="#"> {link}</a>
            </li>
          ))}
        </ul>
      </div>
    </AnimationXtoRight>
  );
}

// Copyright component
function Copyright(){
  return(
    <AnimationXtoRight>
    <div className="p-4 text-white text-center">
      © <a href="#" className="border-b hover:text-orange-400" target="_blank">Atlas View </a>2025, All Right Reserved. Designed By <a href="https://aziz-boujaada.github.io/First-React-Portfolio/" className="border-b hover:text-orange-400" target="_blank"> AZi Ze Boujaada</a>
    </div>
    </AnimationXtoRight>
  )
}

//NewsLetter component
 function NewsLetter(){
  return(
    
      <div className="bg-white text-center w-10/12 mx-6 p-2 lg:p-10  absolute top-[-12%] right-3 lg:right-20 lg:top-[-20%] shadow-xl rounded ">
          <div>
              <h1 className="text-3xl font-Parkinsans font-semibold"> Subscribe Our <span className="text-orange-500">NewsLetter</span></h1>
          </div>
          <form action="" className=" relative grid grid-cols-1 lg:flex  gap-5 justify-center items-center pt-5">
              <input type="text"  placeholder="Enter Your Email" className="relative w-full lg:w-1/2 border border-gray-400 p-3 hover:border-orange-500 focus:outline-none focus:ring-2 focus:border-none focus:ring-orange-500 transition-all duration-300"/>
             <button className="bg-orange-500 p-3 text-white relative lg:absolute lg:right-1/4  hover:bg-orange-400 transition-all duration-300">subscribe</button>
          </form>
      </div>
      
  )
}

// Main footer component
export default function Footer() {
  return (
    <>
    <AnimationXtoRight>
      <footer className="bg-slate-900 relative mt-[10em]" >
        {/* Footer main content */}
        <div className=" flex flex-col lg:flex-row items-start  justify-around gap-6 px-6 lg:px-12 py-28 border border-b border-gray-500">
          <FooterParagraph />
          <ContactInformation />
          <QuickLinks />
          <NewsLetter/>
        </div>
        {/* Footer copyright */}
        <Copyright/>
      </footer>
      </AnimationXtoRight>
    </>
  );
}
