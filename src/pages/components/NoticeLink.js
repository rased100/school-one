import React from "react";
import { Link } from "react-router-dom";

const NoticeLink = (props) => {
  return (
    <div>
      <Link
        href={props.to}
        class="flex items-center justify-center p-5 my-1 text-base font-medium text-gray-300 rounded-lg hover:text-gray-900 hover:bg-gray-100 text-gray-400 bg-gray-800 hover:bg-gradient-to-br from-pink-400 via-purple-500 to-blue-200"
      >
        <svg
          class="w-6  h-6 mr-2"
          viewBox="0 0 512 512"
          fill="currentColor"
          // height="1em"
          // width="1em"
          // {...props}
        >
          <path d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 00-4.61-37.66zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z" />
        </svg>
        <span class="w-full ">
          <p> {props.name} </p>
        </span>
        <svg
          class="w-4 h-4 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
};

export default NoticeLink;