import React from "react";
import TeacherCard from "./TeacherCard";
import teacher1 from "../../../assets/ajij.png";
const Teachers = () => {
  const teachersinfo = [
    {
      img: teacher1,
      name: "Abdul Ajiz",
      designation: "Senior Teacher",
      id: "1",
      desc1: "Subject: Math",
      desc2: "MSc: Accounting",
      desc3: "Mirpur Bangla College",
    },
    {
      img: teacher1,
      name: "Abdul Ajiz",
      designation: "Senior Teacher",
      id: "1",
      desc1: "Subject: Math",
      desc2: "MSc: Accounting",
      desc3: "Mirpur Bangla College",
    },
    {
      img: teacher1,
      name: "Abdul Ajiz",
      designation: "Senior Teacher",
      id: "1",
      desc1: "Subject: Math",
      desc2: "MSc: Accounting",
      desc3: "Mirpur Bangla College",
    },
    {
      img: teacher1,
      name: "Abdul Ajiz",
      designation: "Senior Teacher",
      id: "1",
      desc1: "Subject: Math",
      desc2: "MSc: Accounting",
      desc3: "Mirpur Bangla College",
    },
    {
      img: teacher1,
      name: "Abdul Ajiz",
      designation: "Senior Teacher",
      id: "1",
      desc1: "Subject: Math",
      desc2: "MSc: Accounting",
      desc3: "Mirpur Bangla College",
    },
    {
      img: teacher1,
      name: "Abdul Ajiz",
      designation: "Senior Teacher",
      id: "1",
      desc1: "Subject: Math",
      desc2: "MSc: Accounting",
      desc3: "Mirpur Bangla College",
    },
    {
      img: teacher1,
      name: "Abdul Ajiz",
      designation: "Senior Teacher",
      id: "1",
      desc1: "Subject: Math",
      desc2: "MSc: Accounting",
      desc3: "Mirpur Bangla College",
    },
    {
      img: teacher1,
      name: "Abdul Ajiz",
      designation: "Senior Teacher",
      id: "1",
      desc1: "Subject: Math",
      desc2: "MSc: Accounting",
      desc3: "Mirpur Bangla College",
    },
    {
      img: teacher1,
      name: "Abdul Ajiz",
      designation: "Senior Teacher",
      id: "1",
      desc1: "Subject: Math",
      desc2: "MSc: Accounting",
      desc3: "Mirpur Bangla College",
    },
  ];
  return (
    <div className="text-info px-10 py-10 bg-gray-100">
      {/* <h4 className="text-primary text-lg font-bold mb-5">infoS</h4> */}
      <h1 className="lg:text-5xl text-4xl font-bold">Our Teachers</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 justify-between lg:mt-10 mt-5">
        {teachersinfo.map((info, index) => (
          <TeacherCard
            img={info.img}
            name={info.name}
            designation={info.designation}
            key={info.id}
            desc1={info.desc1}
            desc2={info.desc2}
            desc3={info.desc3}
          />
        ))}
      </div>
    </div>
  );
};

export default Teachers;
