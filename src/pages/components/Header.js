import React from "react";
import AboutUs from "./AboutUs";
import EducationLinks from "./EducationLinks";
import HeadTeacher from "./HeadTeacher";

const Header = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="flex w-[80%] ">
        <div className="flex justify-center w-[65%]">
          <HeadTeacher />
        </div>
        <div className="w-[35%]">
          <EducationLinks />
        </div>
      </div>
    </div>
  );
};

export default Header;
