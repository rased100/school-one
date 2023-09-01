import React from "react";
import img3 from "../../assets/cImg3.jpg";
import SingleLink from "./SingleLink";

const EducationLinks = () => {
  return (
    <div className="flex mx-2 rounded-t-lg bg-gray-300">
      <div className="">
        {/* <h2 className="text-black bg-[#2e5e89]">AboutUs</h2> */}
        <h2 className="text-black bg-[#2e5e89] text-white font-bold text-2xl rounded-t-lg">
          গুরুত্ব পূর্ণ লিংক
        </h2>
        <div className="px-5">
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
    </div>
  );
};

export default EducationLinks;
