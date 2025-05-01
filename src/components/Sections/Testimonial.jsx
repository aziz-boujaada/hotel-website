
import AnimationY from "../Animations/AnimationY";
import AnimationXtoRight from "../Animations/AnimationXtoRight";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const OurClientSay = [
  {
    ClientId: 1,
    clientImg: "testimonial-1.jpg",
    clientName: "Laila",
    clientSaid:
      "The hospitality was beyond amazing! The room was cozy, the staff were kind, and everything was super clean. I can’t wait to come back!",
    quotIcon: faQuoteLeft,
  },
  {
    ClientId: 2,
    clientImg: "testimonial-2.jpg",
    clientName: "Aziz Boujaada",
    clientSaid:
      "I loved how everything was organized! From the food to the service, it was all professional. Definitely recommending this place to my friends.",
    quotIcon: faQuoteLeft,
  },
  {
    ClientId: 3,
    clientImg: "testimonial-3.jpg",
    clientName: "Youssef",
    clientSaid:
      "Perfect experience! The spa and fitness center helped me relax after a long week. Great vibe and great people.",
    quotIcon: faQuoteLeft,
  },
];

export default function TestImonial() {
  const [testimonialScroll, setTestimonialScroll] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialScroll((prevTest) => (prevTest + 1) % OurClientSay.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const NextTest = () => {
    setTestimonialScroll((next) => (next + 1) % OurClientSay.length);
  };
  const PrevTest = () => {
    setTestimonialScroll((prev) =>
      prev === 0 ? OurClientSay.length - 1 : prev - 1
    );
  };
  const currentTest = OurClientSay[testimonialScroll];
  return (
    <AnimationXtoRight>
      <section
        className="mt-[6em] bg-cover bg-center py-16 px-4 h-auto sm:h-[55vh]"
        style={{ backgroundImage: `url("hotel-carousel-2.jpg")` }}
      >
        <AnimationY>
          <div className="bg-black bg-opacity-80 max-w-2xl h-[400px] lg:h-[320px] mx-auto rounded-xl p-8 text-white text-center shadow-lg relative">
            <div className="text-orange-400 text-2xl mb-4">
              <FontAwesomeIcon
                icon={currentTest.quotIcon}
                className="text-4xl"
              />
            </div>
            <p className="italic text-xl text-gray-200 mb-6 shadow-xl">
              "{currentTest.clientSaid}"
            </p>
            <div className="flex flex-col items-center gap-2">
              <img
                src={currentTest.clientImg}
                alt={currentTest.clientName}
                className="w-14 h-14 rounded-full object-cover"
              />
              <h3 className="font-semibold">{currentTest.clientName}</h3>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {OurClientSay.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialScroll(i)}
                  className={`w-3 h-3 rounded-full ${
                    testimonialScroll === i ? "bg-orange-500 w-8 " : "bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <div
              className="absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer text-white text-2xl lg:text-3xl hover:text-orange-600"
              onClick={PrevTest}
            >
              ❮
            </div>
            <div
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-white text-2xl lg:text-3xl hover:text-orange-600"
              onClick={NextTest}
            >
              ❯
            </div>
          </div>
        </AnimationY>
      </section>
    </AnimationXtoRight>
  );
}
