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

const TeachersTwnd = () => {
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
    <section class="bg-white bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl text-white">
          Our Teachers
        </h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {/* <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
            <img
              class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />

            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize text-white group-hover:text-white">
              arthur melo
            </h1>

            <p class="mt-2 text-gray-500 capitalize text-gray-300 group-hover:text-gray-300">
              design director
            </p>
            <SocialLinksTwnd />
          </div> */}
          {teachersinfo.map((info) => (
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={info.img}
                alt=""
              />

              <h1 class="mt-4 text-2xl text-center font-semibold text-gray-700 capitalize text-white group-hover:text-white">
                {info.name}
              </h1>

              <p class="mt-2 text-gray-500 text-center capitalize text-gray-300 group-hover:text-gray-300">
                {info.designation}
              </p>
              <SocialLinksTwnd />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersTwnd;
