import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Sections/Header";
import ScrollTop from "./components/Animations/scrollTop";
import AboutPage from "./components/Pages/AboutPage";
import ServicesPage from "./components/Pages/ServicesPage";
import RoomsPage from "./components/Pages/RoomsPage";
import HomePage from "./components/Pages/Homepage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import ContactPage from "./components/Pages/ContactPage";
import ReservationStatu from "./components/dashboard/ReservationStatu";
import RegisterForm from "./components/Login/register";
import LoginPage from "./components/Login/login";
import axios from "axios";


export default function App() {
  const [statusOpen, setStatusOpen] = useState(false);
  const [confirmedBookings, setConfirmedBookings] = useState([]);
  const [selectToModify, setSelectToModify] = useState(null);
  const [FormModalOpen, setFormModalOpen] = useState(false);
  const [isRegistered , setIsRegistered] = useState(false);
  const [isLogin , setIsLogin] = useState(false);

  const handleCloseStatus = () => setStatusOpen(false);

  const handleCloseModal = () => {
    setFormModalOpen(false);
    setSelectToModify(null);
  };

  const handleOpenFormToNewBooking = () => {
    setFormModalOpen(true);
    setSelectToModify(null);
  };
  const handleOpenModifyModal = (booking) => {
    setSelectToModify(booking);
    setFormModalOpen(true);
  };

  useEffect(()=>{
    const interval = setInterval(()=>{
      axios.get("http://localhost/hotel-website/Back-End/UpdateReservation.php")
        .then(res=> {
  
          setConfirmedBookings(res.data.data || [])
        })
      }, 3000)
      return() => clearInterval(interval)
    } ,[])

  return (
    <section className="container">
      <Router>

        {!isRegistered ? (
          <RegisterForm onSuccess={()=> setIsRegistered(true)}/>
        ):(
       
<>
       
        <Header
          setStatusOpen={setStatusOpen}
          bookings={confirmedBookings}
          bookingToModify={selectToModify}
        />

        <ReservationStatu
          bookings={confirmedBookings}
          statusOpen={statusOpen}
          onClose={handleCloseStatus}
          setConfirmedBookings={setConfirmedBookings}
          selectToModify={selectToModify}
          setSelectToModify={setSelectToModify}
          onOpenToModify={handleOpenModifyModal}
        />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setConfirmedBookings={setConfirmedBookings}
                bookings={confirmedBookings}
                isFormModalOpen={FormModalOpen}
                openModalToNewBooking={handleOpenFormToNewBooking}
                onCloseFormModal={handleCloseModal}
              />
            }
          />
          <Route
            path="/home"
            element={
              <HomePage
                setConfirmedBookings={setConfirmedBookings}
                bookings={confirmedBookings}
                isFormModalOpen={FormModalOpen}
                openModalToNewBooking={handleOpenFormToNewBooking}
                onCloseFormModal={handleCloseModal}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/rooms"
            element={
              <RoomsPage
                setConfirmedBookings={setConfirmedBookings}
                bookings={confirmedBookings}
                isFormModalOpen={FormModalOpen}
                openModalToNewBooking={handleOpenFormToNewBooking}
                onCloseFormModal={handleCloseModal}
                selectToModify={selectToModify}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={ <LoginPage/>}/>

        </Routes>
       
        <ScrollTop />
        </>
        )}
      </Router>
    </section>
  );

}
