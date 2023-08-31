import React, { useEffect } from "react";
import { NavbarDefault } from "../nav/Navigation";
import AOS from "aos";
import CarouselComponent from "../components/Carousel";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overflow-hidden">
      <NavbarDefault />
      <CarouselComponent />
    </div>
  );
};

export default Home;
