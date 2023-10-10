import React from "react";
import { Link } from "react-router-dom";
import TabbedContent from "./TabbedContent";

const Results = () => {
  return (
    <div className=" flex justify-center items-center dark:bg-gray-800">
      <div className="w-full p-4 text-center bg-white    sm:p-8 dark:bg-gray-800 ">
        {/* <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Institute Results
        </h5> */}
        <h2 className="py-10 text-4xl tracking-tight font-extrabold text-gray-900 text-white">
          Institute Results
        </h2>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Kishalaya Biddaniketan Institute Results. Download the results today.
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <Link
            to=""
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="mr-3 w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              // {...props}
            >
              <path
                fill="currentColor"
                d="M7 18h10v-2H7v2zM17 14H7v-2h10v2zM7 10h4V8H7v2z"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6 2a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3V9a7 7 0 00-7-7H6zm0 2h7v5h6v10a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1zm9 .1A5.009 5.009 0 0118.584 7H15V4.1z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-left">
              <div className="mb-1 text-xs">Institute Result</div>
              <div className="-mt-1 font-sans text-sm text-center font-semibold">
                PEC Result
              </div>
            </div>
          </Link>
          <Link
            to=""
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="mr-3 w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              // {...props}
            >
              <path
                fill="currentColor"
                d="M7 18h10v-2H7v2zM17 14H7v-2h10v2zM7 10h4V8H7v2z"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6 2a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3V9a7 7 0 00-7-7H6zm0 2h7v5h6v10a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1zm9 .1A5.009 5.009 0 0118.584 7H15V4.1z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-left">
              <div className="mb-1 text-xs">Institute Result</div>
              <div className="-mt-1 font-sans text-sm text-center font-semibold">
                JSC Result
              </div>
            </div>
          </Link>
          <Link
            to=""
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="mr-3 w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              // {...props}
            >
              <path
                fill="currentColor"
                d="M7 18h10v-2H7v2zM17 14H7v-2h10v2zM7 10h4V8H7v2z"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6 2a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3V9a7 7 0 00-7-7H6zm0 2h7v5h6v10a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1zm9 .1A5.009 5.009 0 0118.584 7H15V4.1z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-left">
              <div className="mb-1 text-xs">Institute Result</div>
              <div className="-mt-1 font-sans text-sm text-center font-semibold">
                SSC Result
              </div>
            </div>
          </Link>

          {/* <TabbedContent /> */}
        </div>
      </div>
    </div>
  );
};

export default Results;
