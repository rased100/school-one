import React, { useEffect } from "react";
import AOS from "aos";
import CarouselComponent from "../components/Carousel";
import Teachers from "../components/Teachers/Teachers";
import Location from "../components/Location";
import Gallery from "../components/PhotoGallery/Gallery";
import Headers from "../components/Headers";
import About from "../About/About";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <CarouselComponent />
      <About />
      <Headers />
      <Teachers />
      <Gallery />
      <Location />
    </div>
  );
};

export default Home;
