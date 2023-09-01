import React from "react";
import img3 from "../../assets/cImg3.jpg";

const AboutUs = () => {
  return (
    <div className="bg-white rounded-t-lg bg-gray-400">
      {/* <h2 className="text-black bg-[#2e5e89]">AboutUs</h2> */}
      <h2 className="text-black bg-[#2e5e89] text-white font-bold text-2xl rounded-t-lg">
        আমাদের সম্পর্কে
      </h2>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-black text-left p-5">
            তুলাসার গুরুদাস ইংরেজি বিদ্যালয়ের প্রতিষ্ঠাতা শচীনাথ রায় চৌধুরীর
            পিতা গুরুদাস রায় চৌধুরীর আদি নিবাস ছিল শরীয়তপুর জেলার নড়িয়া
            থানায়।বরিশালে সুপ্রচুর সম্পত্তির মালিক ছিলেন তিনি।নদী ভাঙ্গনের ফলে
            তারা সপরিবারে পালং থানা তুলাসার গ্রামে এসে বাড়ি করেন।গুরুদাস বাবু
            শিক্ষানুরাগী ছিলেন।তিনি এখানে এসে একটি মধ্য ইংরেজি বিদ্যালয় স্থাপন
            করেন।তার মৃত্যুর পর একমাত্র পুত্ তুলাসার গুরুদাস ইংরেজি
          </p>
        </div>
        <div>
          <img src={img3} alt="" className=" p-5" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
