import HeroSection from "../Sections/HeroSection";
import CallToActionForm from "../Forms/CallToActionForm";
import Rooms from "../Sections/Rooms"
import TestImonial from "../Sections/Testimonial";
import Footer from "../Sections/Footer"
import AdminDashboard from "../dashboard/AdminDashboard";

export default function RoomsPage(){
    return(
        <>
          <HeroSection/>
          <CallToActionForm/>
          <Rooms/>
          <TestImonial/>
          <Footer/>
          <AdminDashboard />
        </>
    )
}