import React from "react";
import hTeacher from "../../assets/notice3.png";
import NoticeLink from "../components/NoticeLink";

const NoticeBoard = () => {
  return (
    <div className=" bg-gray-700 px-10 py-10 scroll-auto">
      {/* <h2 className="text-center text-4xl font-extrabold">Notice Board</h2> */}
      <div className="lg:flex h-[100vh] lg:h-[50vh]  ">
        <div className=" flex justify-center items-center">
          <img src={hTeacher} className="h-[50vh]  rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1 justify-center items-center rounded-lg lg:pl-10  py-10 lg:py-0">
          <div className="h-[50vh] flex-1 overflow-y-auto overflow-hidden">
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
