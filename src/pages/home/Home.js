import React, { useEffect } from "react";
import { NavbarDefault } from "../nav/Navigation";
import AOS from "aos";
import Banner from "./Banner";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overflow-hidden">
      <NavbarDefault />
      <Banner />
    </div>
  );
};

export default Home;
