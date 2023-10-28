import React from "react";
import noticeLogo from "../../assets/notice3.png";
import NoticeLink from "./NoticeLink";

const NoticeBoard = () => {
  const url = `http://mynodejs.kishalayabiddaniketan.edu.bd/pdf_files`;
  return (
    <>
      <div class="lg:flex bg-gray-700 px-10 py-10">
        <div class="lg:w-[30%]">
          <div className=" flex justify-center items-center">
            <img
              src={noticeLogo}
              alt="noticeboard"
              className="lg:h-[50vh]  rounded-lg shadow-2xl"
            />
          </div>
        </div>
        <div class="lg:w-[70%] overflow-hidden rounded-lg lg:pl-10  py-10 lg:py-0">
          <div className="h-[35vh]  md:h-[50vh] flex-1 overflow-y-auto overflow-hidden">
            <NoticeLink url={url} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeBoard;

// {/* <div className=" bg-gray-700 px-10 py-10 scroll-auto">
//       <div className="lg:flex h-[100vh] lg:h-[50vh]  ">
//         <div className=" flex justify-center items-center">
//           <img src={noticeLogo} className="h-[50vh]  rounded-lg shadow-2xl" />
//         </div>
//         <div className="flex-1 justify-center items-center rounded-lg lg:pl-10  py-10 lg:py-0">
//           <div className="h-[50vh] flex-1 overflow-y-auto overflow-hidden">
//             <NoticesList />
//           </div>
//         </div>
//       </div>
//     </div> */}
