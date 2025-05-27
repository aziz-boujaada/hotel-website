import AnimationX from "../Animations/AnimationX";
import AnimationY from "../Animations/AnimationY";
import AnimationXtoRight from "../Animations/AnimationXtoRight";
import FormModal from "../Forms/FormModal";
import SuccessBooking from "../Alerts/SuccessBooking";


import {
  faBed,
  faBath,
  faWifi,
  faStar,
  faDollarSign,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ErrorsMessages from "../Alerts/errors";

//section title
function SectionTitle() {
  return (
    <>
      <AnimationY>
        <div>
          <h1 className="text-xl text-center font-semibold text-orange-400">
            <span className="inline-block w-14 h-1 bg-orange-400 rounded  m-1"></span>{" "}
            OUR ROOMS{" "}
            <span className="inline-block w-14 h-1 bg-orange-400 rounded  m-1"></span>
          </h1>
          <h1 className="text-4xl text-center font-bold pt-4 ">
            Explore Our <span className="text-orange-500">ROOMS</span>
          </h1>
        </div>
      </AnimationY>
    </>
  );
}

//Book Room button
function BookRooMbtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full h-10 bg-orange-500 rounded mt-6 text-white font-semibold border border-transparent hover:text-orange-500 hover:bg-white hover:border-orange-500 transition-all duration-300"
    >
      BOOK ROOM
    </button>
  );
}
// Room image
function RoomsImage({ room }) {
  return (
    <>
      <div>
        <img
          src={room.img}
          alt={room.type}
          className="relative object-cover w-full h-[250px]"
        />
      </div>
    </>
  );
}
//ROOM type & Rating
function RoomTypeAndRating({ room }) {
  return (
    <>
      <div className="flex items-center justify-between pt-4">
        <h2 className="font-Parkinsans font-semibold">{room.type}</h2>
        <div className="text-yellow-400">
          {[...Array(room.rating)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} />
          ))}
        </div>
      </div>
    </>
  );
}
// rooms prices
function RoomsPrices({ roomPrice }) {
  return (
    <div className="absolute left-6 top-[43%] text-center bg-orange-500 py-2 px-4  rounded">
      <h2 className="text-xs font-semibold text-white">
        {roomPrice.price} <FontAwesomeIcon icon={faDollarSign} /> /Night{" "}
      </h2>
    </div>
  );
}
//Rooms services
function RoomsServices({ room }) {
  return (
    <>
      <div className="flex items-center gap-8 pt-4">
        <h2 className="text-gray-800">
          <FontAwesomeIcon icon={faBed} className="text-orange-500 pr-3" />
          {room.bed}Bed
        </h2>
        <h2 className="text-gray-800">
          <FontAwesomeIcon icon={faBath} className="text-orange-500 pr-3" />
          {room.bath}Bath
        </h2>
        <h2 className="text-gray-800">
          {" "}
          <FontAwesomeIcon icon={faWifi} className="text-orange-500 pr-3" />
          Wifi
        </h2>
      </div>
    </>
  );
}

//add to favorite
function AddToFavorite({ room }) {
  const [liked, setLiked] = useState(() => {
    const saved = localStorage.getItem(`Liked ${room.id}`);
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem(`Liked ${room.id}`, JSON.stringify(liked));
  }, [liked]);

  return (
    <FontAwesomeIcon
      icon={faHeart}
      className={`h-6 mt-6 p-1 cursor-pointer rounded transition-colors duration-300 ${
        liked ? "text-red-600FF bg-orange-100" : "text-white bg-orange-500"
      }`}
      onClick={() => setLiked(!liked)}
    />
  );
}
//

export default function PopularRooms({setConfirmedBookings}) {
  const Rooms = [
    {
      id: 1,
      img: "/hotel-website/Front-End/public/room-1.jpg",
      type: "Junior Suite",
      price: 100,
      rating: 5,
      bed: 3,
      bath: 2,
      description:
        "Experience comfort and elegance in our Junior Suite, featuring a spacious bed, modern bathroom, and cozy ambiance perfect for couples or solo travelers.",
    },
    {
      id: 2,
      img: "/hotel-website/Front-End/public/room-2.jpg",
      type: "Executive Suite",
      price: 100,
      rating: 4,
      bed: 3,
      bath: 2,
      description:
        "Our Executive Suite offers luxurious space with refined decor, ideal for business travelers and families seeking both style and functionality.",
    },
    {
      id: 3,
      img: "/hotel-website/Front-End/public/room-3.jpg",
      type: "Super Deluxe",
      price: 100,
      rating: 4,
      bed: 3,
      bath: 2,
      description:
        "Indulge in the ultimate luxury in our Super Deluxe room, complete with premium furnishings, elegant lighting, and an unforgettable atmosphere.",
    },
  ];

  const [FormModalOpen, setFormModalOpen] = useState(false);
  const [BookingSuccess, setBookingSuccess] = useState(false);
  const [requireFields, setRequireFields] = useState(false);
  const [dateInput, setDateInput] = useState(false);
  const [responseMSg, setResponseMsg] = useState("");
  

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setBookingSuccess(false);
      setRequireFields(false);
      setDateInput(false);
      setResponseMsg("");
    }, 6000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [BookingSuccess, requireFields, dateInput, responseMSg]);

  const handleOpenModal = () => {
    setFormModalOpen(true);
  };
  const handleCloseModal = () => {
    setFormModalOpen(false);
  };

  return (
    <>
      {BookingSuccess && <SuccessBooking isSuccess={BookingSuccess} />}
      {requireFields && (
        <ErrorsMessages message="Please fill in all required fields correctly!" />
      )}
      {dateInput && (
        <ErrorsMessages message="Check-out date must be after check-in date!" />
      )}
      {responseMSg && <ErrorsMessages message={responseMSg} />}
      <section className=" relative mt-[12em] lg:mt[7em]">
        <SectionTitle />

        {/* ROOMS CARDS*/}
        <AnimationXtoRight>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-6 ">
            {Rooms.map((room, index) => (
              <div
                key={index}
                className="relative  shadow-2xl transition-transform hover:scale-105 duration-300"
              >
                <RoomsImage room={room} />
                <div className="p-5">
                  <RoomTypeAndRating room={room} />
                  <RoomsPrices roomPrice={room} />
                  <RoomsServices room={room} />
                  <h2 className="pt-4 text-gray-700">{room.description}</h2>
                  <div className="flex items-center gap-4">
                    <BookRooMbtn onClick={handleOpenModal} />
                    <AddToFavorite room={room} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <FormModal
            isOpen={FormModalOpen}
            isClose={handleCloseModal}
            setBookingSuccess={setBookingSuccess}
            setRequireFields={setRequireFields}
            setDateCompare={setDateInput}
            setResponseMsg={setResponseMsg}
            setConfirmedBookings={setConfirmedBookings}
          />
        
          
          
        </AnimationXtoRight>
      </section>
    </>
  );
}
