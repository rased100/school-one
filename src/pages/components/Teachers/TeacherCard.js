import React from "react";

const TeacherCard = ({ img, name, designation, desc1, desc2, desc3 }) => {
  return (
    <div
      data-aos="zoom-out"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out-back"
      className="w-full bg-white p-3 rounded-xl shadow-xl"
    >
      <div className="flex justify-around items-center rounded-full">
        <img src={img} alt="" className=" rounded-full w-[200px]" />
        <div>
          <p className="font-bold text-left">Name: {name}</p>
          <p className="font-bold text-left">{designation}</p>
          {/* <p className="font-bold text-left">{desc1}</p> */}
          <p className=" text-left text-blue-500">Edicational info</p>
          <p className=" text-left">{desc3}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;