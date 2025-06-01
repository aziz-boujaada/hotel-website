import HeroSection from "../Sections/HeroSection";
import CallToActionForm from "../Forms/CallToActionForm"; 
import PopularRooms from "../Sections/Rooms";
import TestImonial from "../Sections/Testimonial";
import Footer from "../Sections/Footer"
import AdminDashboard from "../dashboard/AdminDashboard";
import ReservationStatu from "../dashboard/ReservationStatu"

export default function RoomsPage({setConfirmedBookings , bookings , openModalToNewBooking , isFormModalOpen ,  onCloseFormModal}){
    return(
        <>
          <HeroSection/>
          <CallToActionForm/>
          <PopularRooms
           setConfirmedBookings = {setConfirmedBookings}
            bookings={bookings}
            isFormModalOpen={isFormModalOpen}
            openModalToNewBooking={openModalToNewBooking}
             onCloseFormModal={onCloseFormModal}
            />
          <TestImonial/>
          <Footer/>
          <AdminDashboard />
          <ReservationStatu/>
        </>
    )
}