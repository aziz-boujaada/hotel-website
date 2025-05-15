import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Sections/Header";
import ScrollTop from "./components/Animations/scrollTop";
import AboutPage from "./components/Pages/AboutPage";
import ServicesPage from "./components/Pages/ServicesPage";
import RoomsPage from "./components/Pages/RoomsPage";
import HomePage from "./components/Pages/Homepage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import ContactPage from "./components/Pages/ContactPage";

export default function App() {
  return (
    <section className="container">
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ScrollTop />
    </Router>
  </section>
  );
}