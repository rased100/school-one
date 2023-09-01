import React from "react";
import AboutUs from "./AboutUs";
import SocialLinks from "./SocialLinks";

const HeaderTwo = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="flex w-[80%] ">
        <div className="flex justify-center w-[65%]">
          <AboutUs />
        </div>
        <div className="w-[35%]">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;
