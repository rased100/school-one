import React, { useEffect } from "react";
import { NavbarDefault } from "../nav/Navigation";
import AOS from "aos";
import CarouselComponent from "../components/Carousel";
import Teachers from "../components/Teachers/Teachers";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Gallery from "../components/PhotoGallery/Gallery";
import Headers from "../components/Headers";
import Login from "../auth/Login/Login";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <NavbarDefault />
      <Login />
      <CarouselComponent />
      <Headers />
      <Teachers />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;
