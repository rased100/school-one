import React from "react";
import { Link } from "react-router-dom";
import NoticeLink from "../NoticeBoard/NoticeLink";
import NoticesList from "../NoticeBoard/NoticesList";

const Routine = (props) => {
  const { type } = props;
  console.log("type in routine", type);
  const url = `http://localhost:4000/pdf/pdf_files?type=${type}`;
  console.log("routine-url", url);
  return (
    <div className=" flex justify-center items-center bg-gray-700">
      <div className="p-4 text-center   sm:p-8 ">
        {/* <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Institute Results
        </h5> */}
        <h2 className="py-10 text-4xl tracking-tight font-extrabold text-gray-900 text-white">
          {props.name}
        </h2>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Kishalaya Biddaniketan {props.name}. Download The {props.name} Today.
        </p>
        <div className="h-[70vh] md:h-[50vh] flex-1 overflow-y-auto overflow-hidden">
          <NoticesList url={url} />
        </div>
      </div>
    </div>
  );
};

export default Routine;
