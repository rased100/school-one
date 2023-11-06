import React from "react";
import SocialLinksTwnd from "./SocialLinksTwnd";
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
import teacher14 from "../../../assets/teachers/14.png";
import teacher15 from "../../../assets/teachers/15.png";
import teacher16 from "../../../assets/teachers/16.png";
import { Link } from "react-router-dom";

const teachersinfo = [
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
    id: "3",
    img: teacher3,
    name: "Rafiqul Islam",
    designation: "Senior Teacher (Math)",
    degree: "",
    mobile: "01942045267",
    email: "",
  },

  {
    id: "6",
    img: teacher6,
    name: "Akber Sikder",
    designation: "Senior Teacher",
    degree: "B.A Government Sk  College",
    mobile: "01683805317",
    email: "akbersikder507@gmail.com",
  },
  {
    id: "14",
    img: teacher14,
    name: "Sheikh Md. Afzal Hossain",
    designation: "Senior Teacher",
    degree: "M.A  Ananda Mohan Government College",
    mobile: "01683804320",
  },
  {
    id: "15",
    img: teacher15,
    name: "Md. Ashrafuzzaman",
    designation: "Senior Teacher",
    degree: "M.A  Ananda Mohan Government College",
    mobile: "01683804318",
  },
  {
    id: "16",
    img: teacher16,
    name: "Md. Aminul islam",
    designation: "Senior Teacher",
    degree: "M.A  Ananda Mohan Government College",
    mobile: "01744786139",
  },
  {
    id: "9",
    img: teacher9,
    name: "Md. Babul Mia",
    designation: "Senior Teacher",
    degree: "Pass Course Kaji Mahabullah College",
    mobile: "01816384593",
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
    id: "1",
    img: teacher1,
    name: "Abdul Ajij",
    designation: "Senior Teacher",
    degree: "M.S.S Mirpur College",
    mobile: "01779313415",
    email: "ajijabdul403@gmail.com",
  },
  {
    id: "13",
    img: teacher13,
    name: "Md Sarowar Jahan",
    designation: "Senior Teacher",
    degree: "MBA (Marketing) Varendra University of Rajshahi",
    mobile: "01713-252910",
    email: "sarourbd1@gmail.com",
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
    id: "8",
    img: teacher8,
    name: "Sonia Akter Dola",
    designation: "Assistant Teacher",
    degree: "B.S.S  Dhaka university",
    mobile: "01929986255",
    email: "soniaakterdola3@gmail.com",
  },
  {
    id: "12",
    img: teacher12,
    name: "Md. Ratul Mir",
    designation: "Assistant Teacher",
    degree: "M.S.S Mirpur College",
    mobile: "01795304191",
    email: "rattulmir1212@gmail.com",
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
    id: "7",
    img: teacher7,
    name: "Md. Shah Alam",
    designation: "Senior Teacher (Accounting)",
    degree: "B.COM Honours Jagannath University",
    mobile: "01731396797",
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
];

const TeachersTailwind = () => {
  return (
    <div className="bg-gray-900 px-10 py-20">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-white">
          Our Teachers
        </h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl text-gray-400">
          A teacher is a professional who plays a crucial role in the education
          and development of students.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {teachersinfo.map((info) => (
          <div
            key={info.id}
            className="flex flex-col justify-center items-center rounded-lg shadow bg-gray-800 border-gray-700 p-5"
          >
            <div className="flex justify-center items-center h-[150px] w-[150px]">
              <img className="rounded-full" src={info.img} alt="teachers" />
            </div>
            <div className="text-center pt-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 text-white">
                <Link to="">{info.name}</Link>
              </h3>
              <span className="text-gray-500">{info.designation}</span>
              <p className="text-gray-500">Kishalaya Biddaniketan.</p>
              {/* <span className="text-gray-500">Email: {info.email}</span> */}
              <div className="py-2">
                <SocialLinksTwnd />
              </div>
            </div>
          </div>
        ))}
        {/*  */}
      </div>
    </div>
  );
};

export default TeachersTailwind;
