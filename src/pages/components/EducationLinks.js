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
          title="শিক্ষা বোর্ড, ঢাকা"
          link="https://www.dhakaeducationboard.gov.bd/"
        />
        <SingleLink
          title="মাধ্যমিক পরীক্ষার ফলাফল"
          link="http://www.educationboardresults.gov.bd/"
        />
        <SingleLink title="শিক্ষা মন্ত্রণালয়" link="https://moedu.gov.bd/" />
        <SingleLink
          title="মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর"
          link="https://dshe.gov.bd/"
        />
      </div>
    </div>
  );
};

export default EducationLinks;
