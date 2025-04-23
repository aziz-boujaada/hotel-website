import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CallToActionForm from "./components/CallToActionForm";
import AboutSection from "./components/AboutSection";
import Rooms from "./components/Rooms";
import Services from "./components/services";
import TestImonial from "./components/Testimonial";
import Staff from "./components/Staff"

export default function App() {
  return (
    <>
    <section className="container">
    <section>
      <Header />
      <HeroSection />
      <CallToActionForm />
    </section>
    <section>
      <AboutSection/>
    </section>
    <section>
      <Rooms/>
    </section>
    <section>
      <Services/>
    </section>
    <section>
      <TestImonial/>
    </section>
    <section>
      <Staff/>
    </section>
    </section>
    </>
  );
}
