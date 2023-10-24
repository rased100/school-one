import React from "react";
import NoticeLink from "../NoticeBoard/NoticeLink";

const ResultsList = () => {
  const type = "Results";
  const url = `http://localhost:4000/pdf/pdf_files?type=${type}`;
  return (
    <div>
      <NoticeLink url={url} showDelete />
    </div>
  );
};

export default ResultsList;
