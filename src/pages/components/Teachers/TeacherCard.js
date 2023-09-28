import React from "react";

const TeacherCard = ({ info }) => {
  const { img, name, designation, degree, mobile, email } = info;
  return (
    <div className="w-full bg-white p-3 rounded-xl shadow-xl">
      {/* <div className="flex justify-around items-center rounded-full grid grid-cols-1 lg:grid-cols-2 gap-2"> */}
      <div className="flex justify-around items-center rounded-full grid grid-cols-1  gap-2">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          //
          className="md:col-span-1 flex items-center justify-center"
        >
          <img src={img} alt="" className=" rounded-full w-[200px]" />
        </div>
        <div className="py-5 px-5 md:col-span-1">
          <p className="text-center font-bold font-md">{name}</p>
          <p className="text-center">{designation}</p>
          <p className="text-center">Kishalaya Biddaniketan</p>
          <p className="text-center">{degree}</p>
          {/* <p className="text-center">Mobile: {mobile}</p> */}
          <p className="text-center text-blue-500">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
