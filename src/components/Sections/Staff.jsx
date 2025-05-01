import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import AnimationY from "../Animations/AnimationY";
import AnimationX from "../Animations/AnimationX";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ourStaffInfo = [
  {
    staffImage: "team-1.jpg",
    staffName: "Aziz Boujaada",
    StaffRole: " Hotel President",
    socialMedias: [
      { socialIcon: faFacebook, socialLink: "facebook" },
      { socialIcon: faInstagram, socialLink: "Instagram" },
      { socialIcon: faXTwitter, socialLink: "x" },
    ],
  },
  {
    staffImage: "team-2.jpg",
    staffName: "Aziz Boujaada",
    StaffRole: " Hotel President",
    socialMedias: [
      { socialIcon: faFacebook, socialLink: "facebook" },
      { socialIcon: faInstagram, socialLink: "Instagram" },
      { socialIcon: faXTwitter, socialLink: "x" },
    ],
  },
  {
    staffImage: "team-3.jpg",
    staffName: "Aziz Boujaada",
    StaffRole: " Hotel President",
    socialMedias: [
      { socialIcon: faFacebook, socialLink: "facebook" },
      { socialIcon: faInstagram, socialLink: "Instagram" },
      { socialIcon: faXTwitter, socialLink: "x" },
    ],
  },
  {
    staffImage: "team-4.jpg",
    staffName: "Aziz Boujaada",
    StaffRole: " Hotel President",
    socialMedias: [
      { socialIcon: faFacebook, socialLink: "facebook" },
      { socialIcon: faInstagram, socialLink: "Instagram" },
      { socialIcon: faXTwitter, socialLink: "x" },
    ],
  },
];
//section title
function SectionTitle() {
  return (
    <>
      <AnimationY>
        <div>
          <h1 className="text-xl text-center font-semibold text-orange-400">
            <span className="inline-block w-14 h-1 bg-orange-400 rounded  m-1"></span>{" "}
            OUR STAFF{" "}
            <span className="inline-block w-14 h-1 bg-orange-400 rounded  m-1"></span>
          </h1>
          <h1 className="text-4xl text-center font-bold pt-4 ">
            Explore Our <span className="text-orange-500">STAFF</span>
          </h1>
        </div>
      </AnimationY>
    </>
  );
}

export default function OurStaff() {
  return (
    <section className="mt-[6em] pb-8 relative">
      <SectionTitle />
        <AnimationX>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center px-5 mt-6 ">
        {ourStaffInfo.map((item, index) => (
          <div
            key={index}
            className=" group border border-gray-300 shadow-xl relative cursor-pointer transition-all duration-300 hover:scale-105 "
          >
            <img src={item.staffImage} alt={`${item.StaffRole} image`}className="p-3" />
            <h2 className="text-2xl text-orange-500 font-Parkinsans font-semibold pt-10">
              {item.staffName}
            </h2>
            <h2 className="text-sm text-gray-600 font-semibold py-3">
              {item.StaffRole}
            </h2>

            {item.socialMedias && (
              <div className="absolute flex gap-3 bottom-[65px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-30px] transition-all duration-300 ">
                {item.socialMedias.map((media, idx) => (
                  <a key={idx} href= {`https://www.${media.socialLink.toLowerCase()}.com`}  target="_blank"
                  rel="noopener noreferrer">
                    <FontAwesomeIcon  icon={media.socialIcon}
                    className="bg-orange-500 p-2 rounded text-white text-2xl
                    cursor-pointer hover:bg-orange-400" />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
        </AnimationX>
    </section>
  );
}
