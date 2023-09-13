import React from "react";

const TeacherCard = ({ img, name, designation, desc1, desc2, desc3 }) => {
  return (
    <div className="w-full bg-white p-3 rounded-xl shadow-xl">
      <div className="flex justify-around items-center rounded-full grid grid-cols-1 md:grid-cols-2 gap-2">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          //
          className="md:col-span-1 flex items-center justify-center"
        >
          <img src={img} alt="" className=" rounded-full w-[200px]" />
        </div>
        <div className="py-5 px-5 md:col-span-1">
          <p className="font-bold text-center">{name}</p>
          <p className="text-center">{designation}</p>
          <p className="text-center">{desc3}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
