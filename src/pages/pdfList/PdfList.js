import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PdfList() {
  const [pdfFiles, setPdfFiles] = useState([]);

  const url = `http://localhost:4000/pdf/pdf_files`;

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
  }, []);

  return (
    <div>
      <h1>List of PDF Files</h1>
      <ul>
        {pdfFiles.map((file, index) => (
          <li key={index}>
            <Link
              to={`${url}/${file.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {file.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PdfList;
