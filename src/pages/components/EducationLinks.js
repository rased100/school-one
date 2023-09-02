import React from "react";
import SingleLink from "./SingleLink";

const EducationLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="w-[100%] text-black bg-[#124559] py-3 text-white font-bold text-2xl rounded-t-lg">
        গুরুত্ব পূর্ণ লিংক
      </h2>
      <div className="px-5 ">
        <SingleLink
          title="মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর"
          link="https://dshe.gov.bd/"
        />
        <SingleLink
          title="মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর"
          link="https://dshe.gov.bd/"
        />
        <SingleLink
          title="মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর"
          link="https://dshe.gov.bd/"
        />
        <SingleLink
          title="মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর"
          link="https://dshe.gov.bd/"
        />
      </div>
    </div>
  );
};

export default EducationLinks;
