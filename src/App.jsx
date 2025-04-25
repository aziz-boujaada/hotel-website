import Header from "./components/Sections/Header";
import HeroSection from "./components/Sections/HeroSection";
import CallToActionForm from "./components/Forms/CallToActionForm";
import AboutSection from "./components/Sections/AboutSection";
import Rooms from "./components/Sections/Rooms";
import Services from "./components/Sections/services";
import TestImonial from "./components/Sections/Testimonial";
import Staff from "./components/Sections/Staff";
import Footer from "./components/Sections/Footer";
import ScrollTop from "./components/Animations/scrollTop"

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
          <AboutSection />
        </section>
        <section>
          <Rooms />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <TestImonial />
        </section>
        <section>
          <Staff />
        </section>
        <footer>
          <Footer/>
          <ScrollTop/>
        </footer>
      </section>
    </>
  );
}
