import { useState, useEffect } from "react";
import AnimationX from "../Animations/AnimationX";
import AnimationY from "../Animations/AnimationY";
import AnimationXtoRight from "../Animations/AnimationXtoRight"
import {
  faHotel,
  faUsersGear,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";

const OurNumbers = [
  { name: "Rooms", icon: faHotel, numbers: 127 },
  { name: "Staff", icon: faUsersGear, numbers: 97 },
  { name: "Clients", icon: faUsers, numbers: 534 },
];
function OurNumbersSpeak({ targetNumber }) {
  const [NumbersSpeak, setNumbersSpeak] = useState(0);
  const {ref , inView} = useInView({triggerOnce:true})
  useEffect(() => {
    const interval = setInterval(() => {
      if(!inView)return;
      setNumbersSpeak((start) => {
        if (start < targetNumber) {
          return start + 1;
        } else {
          clearInterval(interval);
          return start;
        }
      });
    }, 20);
    return () => clearInterval(interval);
  }, [targetNumber ,inView]);
  return <strong ref={ref}>{NumbersSpeak}</strong>;

}
export default function AboutSection() {

  return (
    <>
      <section className="mt-[10em]">
        <div className="grid grid-cols-1 lg:flex gap-10  justify-between">
          <div>
            <AnimationX>
              <h1 className="text-xl font-semibold text-orange-500">
                ABOUT US
                <span className="inline-block w-14 h-1 bg-orange-500 rounded  m-1"></span>
              </h1>
            </AnimationX>
            <AnimationX>
              <h1 className="text-4xl font-bold pt-3 ">
                WELCOME TO <span className="text-orange-500">ATLAS VIEW</span>
              </h1>
            </AnimationX>
            <AnimationX>
              <p className="py-5 text-gray-700">
                Located in the heart of the Atlas Mountains, Atlas View Hotel is
                where the charm of nature meets the warmth of authentic Moroccan
                hospitality. Designed for those seeking peace and relaxation,
                our hotel offers a serene escape surrounded by fresh mountain
                air and breathtaking landscapes. At Atlas View, we believe every
                stay should be an unforgettable experience. That’s why we pay
                attention to the smallest details, offering a cozy atmosphere,
                high-quality service, and views that captivate the soul. Whether
                you're here for relaxation or adventure, we promise a stay
                you'll always remember.
              </p>
            </AnimationX>
            <div className="grid grid-cols-1 lg:flex gap-10 justify-between pt-8 ">
              {OurNumbers.map((item, index) => (
                <AnimationY key={index}>
                  <div className="border text-center px-10 py-2 w-full lg:w-[200px] shadow-lg">
                    <FontAwesomeIcon
                      icon={item.icon}
                      size="2xl"
                      className="text-orange-500"
                    />
                    <h2 className="pt-4 text-3xl">
                      {" "}
                      <OurNumbersSpeak  targetNumber={item.numbers} />{" "}
                    </h2>

                    <h2 className="pt-4 text-lg text-gray-500">{item.name}</h2>
                  </div>
                </AnimationY>
              ))}
            </div>
          </div>
          <div className="grid  grid-cols-2  gap-2  ">
            <AnimationY>
              <img
                src="/about-2.jpg"
                alt="hotel image"
                className="w-[400px] h-[300px] mt-12 shadow-lg"
              />
            </AnimationY>
            <AnimationXtoRight>
              <img
                src="/about-1.jpg"
                alt="hotel image"
                className="w-[300px] h-[250px]  mt-24 shadow-lg"
              />
            </AnimationXtoRight>
            <AnimationY>
              <img src="/about-3.jpg" alt="hotel image" className="shadow-lg" />
            </AnimationY>
            <AnimationXtoRight>
              <img
                src="/about-4.jpg"
                alt="hotel image"
                className="w-[400px] h-[250px] shadow-lg"
              />
            </AnimationXtoRight>
          </div>
        </div>
      </section>
    </>
  );
}
