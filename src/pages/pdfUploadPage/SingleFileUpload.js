import React, { useState } from "react";
import axios from "axios";

const SingleFileUpload = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [type, setType] = useState(`${props.type}`); // Default to "Class Routine"

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
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-4 max-w-md mx-auto bg-gray-100 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Upload PDF File</h2>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="mb-2"
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-2 rounded border"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 mb-2 rounded border"
        >
          <option value={props.type}>{props.type}</option>
        </select>
        <button
          onClick={handleFileUpload}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default SingleFileUpload;
