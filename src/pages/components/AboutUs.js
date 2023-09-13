import React from "react";
import about from "../../assets/logo-2.png";

const AboutUs = () => {
  return (
    <div className="">
      <h2 className="text-black bg-[#124559] py-3 text-white font-bold text-2xl rounded-t-lg">
        আমাদের সম্পর্কে
      </h2>
      <div className="items-center grid grid-cols-1 xl:grid-cols-3 gap-1">
        <div className="xl:col-span-2">
          <p className=" text-black text-left p-3">
            কিশলয় বিদ্যানিকেতন বাংলাদেশের একটি সুনামধন্য শিক্ষা প্রতিষ্ঠান।
            আমরা প্রতিটি শিশুকে অনন্য হিসাবে বিবেচনা করি এবং তাই আমরা আমাদের
            দুর্দান্ত সেট-আপের প্রতিটি ধাপে অন্তর্ভুক্তিমূলক শিক্ষা-শিক্ষার
            পরিবেশ বজায় রাখি। এটা এখন বাস্তবতা যে প্রতিবার পাবলিক পরীক্ষায়
            আমাদের ফলাফল ভালো হচ্ছে। এটা সম্ভব হয়েছে আমাদের বিস্তৃত এবং কার্যকর
            যত্নের মাধ্যমে প্রতিটি পৃথক ছাত্রের জন্য প্রসারিত। আমাদের ছাত্ররা
            এখানে সমাজের বিভিন্ন স্তর থেকে একত্রিত হয়। তারা আমাদের শক্তিশালী
            এবং সুরক্ষিত শিক্ষার দ্বারপ্রান্তে প্রবেশ করে এবং একটি অলরাউন্ড
            ব্যক্তিত্ব নিয়ে বেরিয়ে আসে।
          </p>
        </div>
        <div className="xl:col-span-1">
          <img src={about} alt="" className="p-2 rounded-3xl aboutImage" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
