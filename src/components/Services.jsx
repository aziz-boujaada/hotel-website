import AnimationX from "./Animations/AnimationX";
import AnimationY from "./Animations/AnimationY";
import AnimationXtoRight from "./Animations/AnimationXtoRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faUtensils,
  faSpa,
  faPersonSwimming,
  faCalendarDay,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";



const ourServices = [
    {
      serviceName: "Rooms & Apartments",
      serviceIcon: faHotel,
      serviceDescription:
        "Spacious and beautifully designed rooms and apartments equipped with modern amenities to make your stay comfortable and memorable.",
    },
    {
      serviceName: "Food & Restaurant",
      serviceIcon: faUtensils,
      serviceDescription:
        "Enjoy a variety of mouth-watering meals prepared by top chefs, combining local flavors with international cuisine in a warm dining atmosphere.",
    },
    {
      serviceName: "SPA & Fitness",
      serviceIcon: faSpa,
      serviceDescription:
        "Recharge your energy with our luxurious spa treatments and fitness facilities designed for your well-being and relaxation.",
    },
    {
      serviceName: "Sports & Gaming",
      serviceIcon: faPersonSwimming,
      serviceDescription:
        "Dive into fun with our swimming pool and engage in exciting sports and gaming activities for all ages and skill levels.",
    },
    {
      serviceName: "Event & Party",
      serviceIcon: faCalendarDay,
      serviceDescription:
        "Whether it's a birthday, wedding, or corporate event, we provide a beautiful venue and full services to make your event unforgettable.",
    },
    {
      serviceName: "Gym & Yoga",
      serviceIcon: faDumbbell,
      serviceDescription:
        "Achieve your fitness goals in our state-of-the-art gym or find your inner peace in our calming and guided yoga sessions.",
    },
  ];
  

//section title
function SectionTitle() {
    return (
      <>
        <div>
          <h1 className="text-xl text-center font-semibold text-orange-400">
            <span className="inline-block w-14 h-1 bg-orange-400 rounded  m-1"></span>{" "}
            OUR SERVICES{" "}
            <span className="inline-block w-14 h-1 bg-orange-400 rounded  m-1"></span>
          </h1>
          <h1 className="text-4xl text-center font-bold pt-4 ">
            Explore Our <span className="text-orange-500">SERVICES</span>
          </h1>
        </div>
      </>
    );
  }
export default function OurServices(){
    return(
        <>
        <section className="pt-[6em] ">
          <AnimationY>
            <SectionTitle/>
            </AnimationY>
            <AnimationX>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mt-10">
          {ourServices.map((item ,index)=>(
            <div key={index} className="p-5 bg-white shadow-2xl text-center hover:bg-orange-500 hover:text-white transition duration-300  group">
              <FontAwesomeIcon icon={item.serviceIcon} className="text-4xl  text-orange-500 p-2 border-2 border-dotted border-gray-300 group-hover:text-white transition duration-300 "/>
              <h2 className="pt-5 font-Parkinsans text-xl font-semibold transition duration-300 ">{item.serviceName}</h2>
              <p className="pt-5 text-gray-700 group-hover:text-white transition duration-300 ">{item.serviceDescription}</p>
            </div>
          ))}
          </div>
          </AnimationX>
        </section>
        </>
    )
}