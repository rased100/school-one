import React from "react";
import SingleLink from "./SingleLink";

const SocialLinks = () => {
  return (
    <div className="mx-2 rounded-lg bg-gray-200 flex flex-col items-center justify-center">
      <h2 className="w-[100%] text-black bg-[#124559] py-3 text-white font-bold text-2xl rounded-lg">
        Social Links
      </h2>
      <div className="px-5">
        <SingleLink title="Facebook" link="https://www.facebook.com/" />
        <SingleLink title="Twitter" link="https://www.facebook.com/" />
        <SingleLink title="Instagram" link="https://www.facebook.com/" />
        <SingleLink title="WhatsApp" link="https://www.facebook.com/" />
      </div>
    </div>
  );
};

export default SocialLinks;
