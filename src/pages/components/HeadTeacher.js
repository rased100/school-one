import React from "react";
import hTeacher from "../../assets/headTeacher.jpg";

const HeadTeacher = () => {
  return (
    <div className="">
      <h2 className="text-black bg-[#124559] py-3 text-white font-bold text-2xl rounded-t-lg">
        প্রধান শিক্ষক
      </h2>
      <div className="items-center grid grid-cols-1 xl:grid-cols-3 gap-1">
        <div className="xl:col-span-1">
          <img src={hTeacher} alt="" className="p-3 rounded-3xl" />
        </div>
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
      </div>
    </div>
  );
};

export default HeadTeacher;
