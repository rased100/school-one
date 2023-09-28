import React from "react";
import TeacherCard from "./TeacherCard";
import teacher1 from "../../../assets/teachers/1.png";
import teacher2 from "../../../assets/teachers/2.png";
import teacher3 from "../../../assets/teachers/3.png";
import teacher4 from "../../../assets/teachers/4.png";
import teacher5 from "../../../assets/teachers/5.png";
import teacher6 from "../../../assets/teachers/6.png";
import teacher7 from "../../../assets/teachers/7.png";
import teacher8 from "../../../assets/teachers/8.png";
import teacher9 from "../../../assets/teachers/9.png";
import teacher10 from "../../../assets/teachers/10.png";
import teacher11 from "../../../assets/teachers/11.png";
import teacher12 from "../../../assets/teachers/12.png";
import teacher13 from "../../../assets/teachers/13.png";
const Teachers = () => {
  const teachersinfo = [
    {
      id: "1",
      img: teacher1,
      name: "Abdul Ajiz",
      designation: "Senior Assistant Teacher",
      degree: "M.S.S Mirpur College",
      mobile: "01779313415",
      email: "ajijabdul403@gmail.com",
    },
    {
      id: "2",
      img: teacher2,
      name: "Rumana Islam",
      designation: "Assistant Teacher (Bangla)",
      degree: "B.A Honours (Bangla) Rajbari government  College",
      mobile: "01706050802",
      email: "rumanatupul@gmail.com",
    },
    {
      id: "3",
      img: teacher3,
      name: "Rafiqul Islam",
      designation: "Senior Assistant Teacher (Math)",
      degree: "",
      mobile: "01942045267",
      email: "",
    },
    {
      id: "4",
      img: teacher4,
      name: "Mostafizur Rahman",
      designation: "Assistant  Head Teacher",
      degree: "(B.A) government Sk college ",
      mobile: "01680135799",
      email: "",
    },
    {
      id: "5",
      img: teacher5,
      name: "Md. Jane Alam",
      designation: "Assistant Teacher (Math)",
      degree: "B.B.S Char Kalei khan Adarsh Degree College",
      mobile: "01728368325",
      email: "md.janealamsir86@gmail.com",
    },
    {
      id: "6",
      img: teacher6,
      name: "Akber Sikder",
      designation: "Senior Assistant Teacher",
      degree: "B.A Government Sk  College",
      mobile: "01683805317",
      email: "akbersikder507@gmail.com",
    },
    {
      id: "7",
      img: teacher7,
      name: "Md. Shah Alam",
      designation: "Senior Assistant Teacher (Accounting)",
      degree: "B.COM Honours Jagannath University",
      mobile: "01731396797",
      email: "",
    },
    {
      id: "8",
      img: teacher8,
      name: "Sonia Akter Dola",
      designation: "Assistant Teacher",
      degree: "B.S.S  Dhaka university",
      mobile: "01929986255",
      email: "soniaakterdola3@gmail.com",
    },
    {
      id: "9",
      img: teacher9,
      name: "Md. Babul Mia",
      designation: "Senior Assistant Teacher",
      degree: "Pass Course Kaji Mahabullah College",
      mobile: "01816384593",
      email: "",
    },
    {
      id: "10",
      img: teacher10,
      name: "Jannatul Ferdaus Munmun",
      designation: "Assistant Teacher",
      degree: "BBA.Honours National University",
      mobile: "01617880797",
      email: "jannatulmoon388@gmail.com",
    },
    {
      id: "11",
      img: teacher11,
      name: "Mahfuza Akter",
      designation: "Assistant Teacher",
      degree: "B.S.S B.M College(Barishal)",
      mobile: "01791410018",
      email: "nobuyat001@gmail.com",
    },
    {
      id: "12",
      img: teacher12,
      name: "MD. RATUL MIR",
      designation: "Assistant Teacher",
      degree: "M.S.S Mirpur College",
      mobile: "01795304191",
      email: "rattulmir1212@gmail.com",
    },
    {
      id: "13",
      img: teacher13,
      name: "MD SAROWAR JAHAN",
      designation: "Senior Assistant Teacher",
      degree: "MBA (Marketing) Varendra University of Rajshahi",
      mobile: "01713-252910",
      email: "sarourbd1@gmail.com",
    },
  ];
  return (
    <div className="text-info px-10 py-10 bg-gray-100">
      {/* <h4 className="text-primary text-lg font-bold mb-5">infoS</h4> */}
      <h1 className="lg:text-5xl text-4xl font-bold">Our Teachers</h1>
      <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 justify-between lg:mt-10 mt-5">
        {teachersinfo.map((info) => (
          <TeacherCard
            info={info}
            // img={info.img}
            // name={info.name}
            // designation={info.designation}
            // key={info.id}
            // desc1={info.desc1}
            // desc2={info.desc2}
            // desc3={info.desc3}
          />
        ))}
      </div>
    </div>
  );
};

export default Teachers;
