import React, { useEffect } from "react";
import { NavbarDefault } from "../nav/Navigation";
import AOS from "aos";
import CarouselComponent from "../components/Carousel";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <NavbarDefault />
      <CarouselComponent />
      <Header />
    </div>
  );
};

export default Home;
