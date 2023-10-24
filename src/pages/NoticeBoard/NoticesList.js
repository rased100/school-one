import React from "react";
import NoticeLink from "./NoticeLink";

const NoticesList = (props) => {
  const { url, type } = props;
  // const url = type
  //   ? `http://localhost:4000/pdf/pdf_files?type=${type}`
  //   : `http://localhost:4000/pdf/pdf_files`;
  return (
    <div>
      <NoticeLink url={url} />
    </div>
  );
};

export default NoticesList;
