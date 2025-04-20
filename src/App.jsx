import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CallToActionForm from "./components/CallToActionForm";
import AboutSection from "./components/AboutSection";
import Rooms from "./components/Rooms";

export default function App() {
  return (
    <>
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
    </>
  );
}
