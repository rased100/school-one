import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [type, setType] = useState("Class Routine");
  const [suc_Message, setSuc_Message] = useState("");
  const [err_Message, setErr_Message] = useState("");

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
        "http://mynodejs.kishalayabiddaniketan.edu.bd/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Check the response status and display the message accordingly
      if (response.status === 200) {
        console.log("res-rsd", response.data);
        console.log("File uploaded successfully");
        setErr_Message("");
        setSuc_Message(response.data || "File uploaded successfully");
        // setSuc_Message("File uploaded successfully");
      } else if (response.status === 409) {
        console.log("File with the same originalname already exists");
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
          <option value="Class Routine">Class Routine</option>
          <option value="Results">Results</option>
          <option value="Notice">Notice</option>
          {/* Add more options for other types as needed */}
        </select>
        <button
          onClick={handleFileUpload}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
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

export default FileUpload;
