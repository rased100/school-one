import React from "react";
import noticeLogo from "../../../assets/notice3.png";
import Notices from "../../components/Notices";
import MyButton from "../../components/MyButton";

const DbNoticeBoard = () => {
  return (
    <div className="bg-gray-700 px-10 py-10 scroll-auto">
      <div className="flex-1 justify-center items-center rounded-lg lg:pl-10  py-10 lg:py-0">
        <Notices />
      </div>
      <div className="flex justify-center items-center py-10">
        <MyButton name="Add More Notice" to="" />
      </div>
    </div>
  );
};

export default DbNoticeBoard;
