import React, { useEffect } from "react";
import { NavbarDefault } from "../nav/Navigation";
import AOS from "aos";
import CarouselComponent from "../components/Carousel";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import HeaderTwo from "../components/HeaderTwo";
import Teachers from "../components/Teachers/Teachers";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Gallery from "../components/PhotoGallery/Gallery";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-gray-400">
      <NavbarDefault />
      <CarouselComponent />
      <Header />
      <HeaderTwo />
      <Teachers />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;
