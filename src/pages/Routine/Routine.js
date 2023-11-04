import React from "react";
import NoticeLink from "../NoticeBoard/NoticeLink";

const Routine = (props) => {
  const { type } = props;
  console.log("type in routine", type);
  const url = `https://mynodejs.kishalayabiddaniketan.edu.bd/pdf_files?type=${type}`;
  console.log("routine-url", url);
  return (
    <>
      <div class="bg-gray-700 px-10 pt-20 pb-36">
        <div class="">
          <div className="justify-center items-center">
            <h2 className="text-4xl text-center tracking-tight font-extrabold text-white py-10">
              {props.name}
            </h2>
            <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400 pb-5">
              Kishalaya Biddaniketan {props.name}. Download The {props.name}{" "}
              Today.
            </p>
          </div>
        </div>
        <div class="overflow-hidden rounded-lg ">
          <div className="h-[35vh]  md:h-[50vh] flex-1 overflow-y-auto overflow-hidden">
            <NoticeLink url={url} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Routine;
