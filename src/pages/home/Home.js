import React, { useEffect } from "react";
import { NavbarDefault } from "../nav/Navigation";
import AOS from "aos";
import Banner from "./Banner";
import CarouselBanner from "./CarouselBanner";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overflow-hidden">
      <NavbarDefault />
      <Banner />
      {/* <CarouselBanner /> */}
    </div>
  );
};

export default Home;
