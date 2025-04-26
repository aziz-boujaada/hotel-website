
import HeroSection from "../Sections/HeroSection";
import AboutSection from "../Sections/AboutSection";
import Rooms from "../Sections/Rooms"
import Services from "../Sections/services";
import TestImonial from "../Sections/Testimonial";
import Staff from "../Sections/Staff";
import Footer from "../Sections/Footer";
import CallToActionForm from "../Forms/CallToActionForm";

 export default function HomePage(){
    return(
        <>
        <HeroSection />
        <CallToActionForm />
        <AboutSection/>
        <Rooms/>
        <Services/>
        <TestImonial />
        <Staff />
        <Footer />
      </>
    )
 }