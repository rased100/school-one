import React, { useState } from "react";

const apiUrl = "http://localhost:4000";

const PdfUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [type, setType] = useState("notice");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("pdf", selectedFile);
      formData.append("type", type);

      fetch(`${apiUrl}/pdfFiles/create`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Optionally, you can add code to show a success message or redirect the user.
        })
        .catch((error) => {
          console.error(error);
          // Handle errors and show error messages to the user if necessary.
        });
    }
  };

  return (
    <div>
      <h2>Upload PDF File</h2>
      <input type="file" onChange={handleFileChange} />
      <select value={type} onChange={handleTypeChange}>
        <option value="notice">Notice</option>
        <option value="results">Results</option>
        <option value="class_routine">Class Routine</option>
      </select>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default PdfUploadPage;
