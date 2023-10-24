import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NoticeLink = (props) => {
  const { url } = props;
  const [pdfFiles, setPdfFiles] = useState([]);

  // const url = `http://localhost:4000/pdf/pdf_files`;

  useEffect(() => {
    // Make an HTTP GET request to your Node.js server
    axios
      .get(url)
      .then((response) => {
        setPdfFiles(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching PDF files:", error);
      });
  }, [url]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/pdf/delete/${id}`)
      .then(() => {
        // Remove the deleted PDF from the state
        setPdfFiles(pdfFiles.filter((file) => file.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting PDF file:", error);
      });
  };
  return (
    <div>
      <ul>
        {pdfFiles.map((file, index) => (
          <li key={index}>
            <div
              to={`${url}/${file.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between  my-1 text-base font-medium text-gray-300 rounded-lg hover:text-gray-900 hover:bg-gray-100 text-gray-400 bg-gray-800 hover:bg-gradient-to-br from-pink-400 via-purple-500 to-blue-200 "
            >
              <Link
                to={`http://localhost:4000/pdf/pdf_files/${file.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 items-center pl-5 py-5 truncate"
              >
                <div className="flex">
                  <span>
                    <svg
                      className="w-6  h-6 mr-2"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      // height="1em"
                      // width="1em"
                      // {...props}
                    >
                      <path d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 00-4.61-37.66zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z" />
                    </svg>
                  </span>
                  <span className="truncate">
                    <p className="px-3">{file.name}</p>
                    {/* <p>p2_text_kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p> */}
                  </span>
                </div>
              </Link>
              {props.showDelete ? (
                <Link className="" onClick={() => handleDelete(file.id)}>
                  <svg
                    className="w-6 h-6 m-5 hover:text-red-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12m2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12M15.5 4l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                  </svg>
                </Link>
              ) : (
                <span className="m-5">
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
                </span>
              )}
            </div>
            {/* <button onClick={() => handleDelete(file.id)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeLink;
