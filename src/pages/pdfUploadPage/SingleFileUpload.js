import React, { useState } from "react";
import axios from "axios";

const SingleFileUpload = (props) => {
  const { type } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [suc_Message, setSuc_Message] = useState("");
  const [fileError, setFileError] = useState("");
  const [nameError, setNameError] = useState("");
  const [err_Message, setErr_Message] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    setFileError("");
    setNameError("");

    if (!selectedFile) {
      setFileError("Please select a file.");
      return;
    }

    if (!name) {
      setNameError("Name is required.");
      return;
    }

    const formData = new FormData();
    formData.append("pdfFile", selectedFile);
    formData.append("name", name);
    formData.append("type", type);

    try {
      const response = await axios.post(
        "https://mynodejs.kishalayabiddaniketan.edu.bd/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("File uploaded successfully");
        setErr_Message("");
        setSuc_Message(response.data || "File uploaded successfully");
      } else if (response.status === 409) {
        console.log("File with the same original name already exists");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      console.error("Error message", error.response.data);

      setSuc_Message("");
      setErr_Message(`Error: ${error.response.data}`);
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
        {fileError && <p className="text-red-500">{fileError}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-2 rounded border"
        />
        {nameError && <p className="text-red-500">{nameError}</p>}
        <select
          value={type}
          className="w-full p-2 mb-2 rounded border"
          disabled
        >
          <option value={props.type}>{props.type}</option>
        </select>
        <button
          onClick={handleFileUpload}
          className="bg-blue-500 text-white py-2 px-4 rounded hover-bg-blue-600"
        >
          Upload
        </button>
        <div>
          <p className="text-green-500">{suc_Message}</p>
          <p className="text-red-500">{err_Message}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFileUpload;
