import React from "react";
import hTeacher from "../../assets/notice3.png";
import NoticeLink from "../components/NoticeLink";

const NoticeBoard = () => {
  return (
    <div className="max-h-screen bg-gray-700 px-10 py-10 scroll-auto">
      {/* <h2 className="text-center text-4xl font-extrabold">Notice Board</h2> */}
      <div className="flex">
        <div className=" flex justify-center items-center">
          <img src={hTeacher} className="h-[50vh]  rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1 justify-center items-center rounded-lg pl-10">
          <div className="h-[50vh] flex-1 overflow-y-auto">
            <NoticeLink name="Examination Routine" />
            <NoticeLink name="Class Routine" />
            <NoticeLink name="Examination Routine" />
            <NoticeLink name="Class Routine" />
            <NoticeLink name="Examination Routine" />
            <NoticeLink name="Class Routine" />
            <NoticeLink name="Examination Routine" />
            <NoticeLink name="Class Routine" />
            <NoticeLink name="Examination Routine" />
            <NoticeLink name="Class Routine" />
            <NoticeLink name="Examination Routine" />
            <NoticeLink name="Class Routine" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
