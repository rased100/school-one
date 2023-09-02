import React from "react";
import img3 from "../../assets/cImg3.jpg";

const AboutUs = () => {
  return (
    <div className="">
      <h2 className="text-black bg-[#124559] py-3 text-white font-bold text-2xl rounded-t-lg">
        আমাদের সম্পর্কে
      </h2>
      <div className="items-center grid grid-cols-1 xl:grid-cols-3 gap-1">
        <div className="xl:col-span-2">
          <p className=" text-black text-left p-3">
            কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন
            কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন
            কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন
            কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন
            কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন
            কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন
            কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন
          </p>
        </div>
        <div className="xl:col-span-1">
          <img src={img3} alt="" className="p-3 rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
