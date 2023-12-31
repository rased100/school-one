import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PdfList() {
  const [pdfFiles, setPdfFiles] = useState([]);

  const url = `https://mynodejs.kishalayabiddaniketan.edu.bd/pdf_files`;

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

  const handleDelete = (id) => {
    axios
      .delete(`https://mynodejs.kishalayabiddaniketan.edu.bd/delete/${id}`)
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

            <button onClick={() => handleDelete(file.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PdfList;
