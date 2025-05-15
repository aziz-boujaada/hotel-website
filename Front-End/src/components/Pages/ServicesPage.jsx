import HeroSection from "../Sections/HeroSection";
import CallToActionForm from "../Forms/CallToActionForm";
import Services from "../Sections/services";
import TestImonial from "../Sections/Testimonial";
import Staff from "../Sections/Staff";
import Footer from "../Sections/Footer";

export default function  ServicesPage(){
   return(
    <>
     <HeroSection/>
     <CallToActionForm/>
     <Services/>
     <Staff/>
     <TestImonial/>
     <Footer/>
    </>
   )
}