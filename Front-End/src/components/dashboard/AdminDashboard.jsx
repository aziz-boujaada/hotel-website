import axios from "axios";
import {
  faChartBar,
  faHotel,
  faCalendarCheck,
  faUser,
  faSignOut,
  faCreditCard,
  faUsers,
  faUserTie,
  faChild,
  faCheckCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
//dashboard sidebar
function Sidebar({ activeTab, setActiveTab }) {
  const sideBarElement = [
    { name: "Dashboard", icon: faChartBar },
    { name: "Rooms", icon: faHotel },
    { name: "Reservation", icon: faCalendarCheck },
    { name: "Client", icon: faUser },
    { name: "Payment", icon: faCreditCard },
    { name: "Log Out", icon: faSignOut },
  ];

  return (
    <>
      <aside>
        <ul className="absolute top-0 left-0 bg-blue-400 h-screen p-12">
          {sideBarElement.map((element, index) => (
            <li
              key={index}
              onClick={() => setActiveTab(element.name)}
              className={`p-2 cursor-pointer rounded-lg ${
                activeTab == element.name
                  ? "bg-blue-900 text-white font-semibold"
                  : ""
              }`}
            >
              <h1 className="">
                {" "}
                <span className="pr-3">
                  <FontAwesomeIcon
                    icon={element.icon}
                    className={` ${
                      activeTab == element.name ? "text-white" : "text-blue-900"
                    }`}
                  />
                </span>{" "}
                {element.name}{" "}
              </h1>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

//client statistics
function DisplayClientStatistics({ setClientStatistic , status }) {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold text-orange-500 mt-4">
          CLIENT Statistics
          <span className="inline-block w-14 h-1 bg-orange-500 rounded  m-1"></span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-9 ">
          <div className="bg-gray-400 text-center p-8 w-full rounded-xl">
            <FontAwesomeIcon icon={faUsers} className="text-2xl text-white" />
            <h1 className="font-bold text-2xl text-white">Client</h1>
            <h2 className="text-2xl text-white">
              {" "}
              {setClientStatistic.clientNumber}{" "}
            </h2>
          </div>
          <div className="bg-yellow-400 text-center p-8 w-full rounded-xl">
            <FontAwesomeIcon icon={faUserTie} className="text-2xl text-white" />
            <h1 className="font-bold text-2xl text-white">Adult</h1>
            <h2 className="text-2xl text-white">
              {setClientStatistic.adultNumber}
            </h2>
          </div>
          <div className="bg-blue-400 text-center p-8 w-full rounded-xl">
            <FontAwesomeIcon icon={faChild} className="text-2xl text-white" />
            <h1 className="font-bold text-2xl text-white"> children </h1>
            <h2 className="text-2xl text-white">
              {setClientStatistic.childrenNumber}
            </h2>
          </div>
          <div className="bg-green-400 text-center p-8 w-full rounded-xl">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-2xl text-white"
            />
            <h1 className="font-bold text-2xl text-white">
              success Reservation
            </h1>
            <h2 className="text-2xl text-white">
              {setClientStatistic.successReservation}
            </h2>
          </div>
          <div className="bg-red-400 text-center p-8 w-full rounded-xl">
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="text-2xl text-white"
            />
            <h1 className="font-bold text-2xl text-white">
              deleted Reservation
            </h1>
            <h2 className="text-2xl text-white">
              {setClientStatistic.deletedReservation}
            </h2>
          </div>
          <div className="bg-red-400 text-center p-8 w-full rounded-xl">
            
            <h1 className="font-bold text-2xl text-white">
              status
            </h1>
            <h2 className="text-2xl text-white">
              {status}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [ClientStatistics, setClientStatistics] = useState({
    clientNumber: 0,
    adultNumber: 0,
    childrenNumber: 0,
    successReservation: 0,
    deletedReservation: 0,
    book_state : "",
  });

  const [CounterEffect, setCounterEffect] = useState({
    clientNumber: 0,
    adultNumber: 0,
    childrenNumber: 0,
    successReservation: 0,
    deletedReservation: 0,
  });

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/hotel-website/Back-End/ReservationStatistics.php",
          {
          
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.data;
        console.log("data", result);
        setClientStatistics({
          clientNumber: result.clientNumber,
          childrenNumber: result.childrenNumber,
          adultNumber: result.adultNumber,
          successReservation: result.successReservation,
          deletedReservation: result.deletedReservation, 
          book_state:result.book_state,
        });
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const keys = Object.keys(ClientStatistics);
    keys.forEach((key) => {
      let start = 0;
      const target = ClientStatistics[key];
      const interval = setInterval(() => {
        if (start < target) {
          start++;
        } else {
          clearInterval(interval);
        }
        setCounterEffect((prev) => ({ ...prev, [key]: start }));
      }, 50);
    });
  }, [ClientStatistics, inView]);
  return (
    <>
      <div className="relative mt-[20em] p-8 bg-slate-900 h-screen">
        <h1 className="text-center text-white font-playfair font-extrabold text-6xl">
          Admin dashboard
        </h1>
        <div className="flex justify-between">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div ref={ref}>
            {activeTab == "Dashboard" && (
              <DisplayClientStatistics setClientStatistic={CounterEffect}  />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
