import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
export default function GotoTop() {
  const [buttonVisible, setbuttonVisible] = useState(false);
  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 100) {
        setbuttonVisible(true);
      } else {
        setbuttonVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const handleGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    buttonVisible && (
      <div className=" fixed right-0 lg:right-20 bottom-1 z-40">
        <FontAwesomeIcon
          onClick={handleGoTop}
          icon={faArrowUp}
          className="mt-10 bg-orange-500 p-5 text-white font-semibold rounded hover:bg-orange-400 cursor-pointer transition-all duration-300"
        />
      </div>
    )
  );
}
