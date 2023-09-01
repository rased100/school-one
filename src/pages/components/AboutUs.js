import React from "react";
import img3 from "../../assets/cImg3.jpg";

const AboutUs = () => {
  return (
    <div className="bg-white rounded-lg bg-gray-200">
      {/* <h2 className="text-black bg-[#2e5e89]">AboutUs</h2> */}
      <h2 className="text-black bg-[#124559] py-3 text-white font-bold text-2xl rounded-lg">
        আমাদের সম্পর্কে
      </h2>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-black text-left p-3">
            কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন
            কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন
            কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন
            কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন
            কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন
            কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন
            কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন কিশালয় বিদ্যানিকেতন
          </p>
        </div>
        <div>
          <img src={img3} alt="" className="p-3" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
