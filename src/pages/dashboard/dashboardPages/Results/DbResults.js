import React from "react";
import MyButton from "../../../components/MyButton";
import Notices from "../../../components/NoticesList";
import ResultsList from "../../../components/ResultsList";

const DbResults = () => {
  return (
    <div className="bg-gray-700 px-10 py-10 scroll-auto">
      <div className="flex-1 justify-center items-center rounded-lg lg:pl-10  py-10 lg:py-0">
        <ResultsList />
      </div>
      <div className="flex justify-center items-center py-10">
        <MyButton name="Add More Result" to="" />
      </div>
    </div>
  );
};

export default DbResults;
