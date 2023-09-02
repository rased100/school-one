import React, { useEffect } from "react";
import { NavbarDefault } from "../nav/Navigation";
import AOS from "aos";
import CarouselComponent from "../components/Carousel";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import HeaderTwo from "../components/HeaderTwo";
import Teachers from "../components/Teachers/Teachers";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <NavbarDefault />
      <CarouselComponent />
      <Header />
      <HeaderTwo />
      <Teachers />
    </div>
  );
};

export default Home;
