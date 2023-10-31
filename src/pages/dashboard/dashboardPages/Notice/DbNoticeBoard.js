import React from "react";
import MyButton from "../../../components/MyButton";
import NoticeLink from "../../../NoticeBoard/NoticeLink";

const DbNoticeBoard = () => {
  const type = "Notice";
  const url = `https://mynodejs.kishalayabiddaniketan.edu.bd/pdf_files?type=${type}`;
  return (
    <div className="bg-gray-700 px-10 py-10 scroll-auto">
      <div className="flex-1 justify-center items-center rounded-lg lg:pl-10  py-10 lg:py-0">
        <NoticeLink url={url} showDelete />
      </div>
      <div className="flex justify-center items-center py-10">
        <MyButton name="Add More Notice" to="NoticeUpload" />
      </div>
    </div>
  );
};

export default DbNoticeBoard;
