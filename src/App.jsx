import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Sections/Header";
import ScrollTop from "./components/Animations/scrollTop";
import AboutPage from "./components/Pages/AboutPage";
import ServicesPage from "./components/Pages/ServicesPage";
import RoomsPage from "./components/Pages/RoomsPage";
import HomePage from "./components/Pages/Homepage";

export default function App() {
  return (
    <section className="container">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
      </Routes>
      <ScrollTop />
    </BrowserRouter>
  </section>
  );
}