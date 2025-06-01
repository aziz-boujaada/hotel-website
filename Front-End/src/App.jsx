import { useState } from "react";
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


export default function App() {
  const [statusOpen, setStatusOpen] = useState(false);
  const [confirmedBookings, setConfirmedBookings] = useState([]);
  const [selectToModify, setSelectToModify] = useState(null);
  const [FormModalOpen, setFormModalOpen] = useState(false);

  const handleCloseStatus = () => setStatusOpen(false);

  const handleCloseModal = () => {
    setFormModalOpen(false);
    setSelectToModify(null);
  };

  const handleOpenFormToNewBooking = () => {
    setFormModalOpen(true);
    setSelectToModify(null);
  };
  const handleOpenModifyModal = () => {
    setSelectToModify(null);
    setFormModalOpen(true);
  };
  return (
    <section className="container">
      <Router>
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
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ScrollTop />
      </Router>
    </section>
  );
}
