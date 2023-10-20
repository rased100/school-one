import React, { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [type, setType] = useState("Class Routine"); // Default to "Class Routine"

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("pdfFile", selectedFile);
    formData.append("name", name);
    formData.append("type", type);

    try {
      const response = await axios.post(
        "http://localhost:4000/pdf/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("File uploaded successfully");
      // Handle success, e.g., show a success message to the user
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <h2>Upload PDF File</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Class Routine">Class Routine</option>
        <option value="Results">Results</option>
        <option value="Notice">Notice</option>
        {/* Add more options for other types as needed */}
      </select>
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
