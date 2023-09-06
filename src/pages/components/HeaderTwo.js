import React from "react";
import AboutUs from "./AboutUs";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <div className="flex justify-center" id="About">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-5 md:px-10 sm:w-[95%] md:w-[90%] lg:w-[80%] mt-10">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          //
          className="md:col-span-2 bg-gray-200 rounded-lg"
        >
          <AboutUs />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          //
          className="md:col-span-1 bg-gray-200 rounded-lg"
        >
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Header;
