import React from "react";
import { Link } from "react-router-dom";

const SingleLink = (props) => {
  return (
    <div className="flex w-full py-2">
      <Link
        to={props.link ? props.link : ""}
        className="inline-flex items-center justify-center p-2 text-base font-medium text-black rounded-lg bg-gray-100 hover:text-gray-900 hover:bg-gray-400 "
        target="_blank"
      >
        <span className="w-full">{props.title ? props.title : "Link"}</span>
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
};

export default SingleLink;
