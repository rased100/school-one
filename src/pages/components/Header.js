import React from "react";
import AboutUs from "./AboutUs";
import EducationLinks from "./EducationLinks";

const Header = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="flex w-[80%] ">
        <div className="flex justify-center w-[65%]">
          <AboutUs />
        </div>
        <div className="flex justify-center w-[35%]">
          <EducationLinks />
        </div>
      </div>
    </div>
  );
};

export default Header;
