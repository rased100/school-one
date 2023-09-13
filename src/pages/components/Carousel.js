import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Typography } from "@material-tailwind/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "tailwindcss/tailwind.css"; // Make sure you have Tailwind CSS styles imported
import img1 from "../../assets/cImg1.jpg";
import img2 from "../../assets/cImg2.jpg";
import img3 from "../../assets/cImg3.jpg";

const CarouselComponent = () => {
  return (
    <div>
      <Carousel
        className="h-[600px]"
        // thumbWidth={100}
        // width="50%"
        infiniteLoop={true}
        showThumbs={false}
        // autoPlay={true}
        autoFocus={true}
        dynamicHeight={true}
      >
        {/* carousel - 1 */}
        <div className="relative bg-blue-900">
          <img
            src={img1}
            alt="Image 1"
            className="opacity-100 w-full h-[600px] "
          />
          {/* lable */}
          <div className="absolute flex justify-center transform -translate-y-1/2 left-[5%] right-[5%] bottom-5 mt-30">
            <div
              // className="flex-1"
              className="flex-1"
            >
              <Typography
                as="a"
                href="#"
                className=" cursor-pointer font-bold text-5xl sm:text-7xl text-white "
                style={{ textShadow: "0px 0px 5px black" }}
                //
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                কিশলয় বিদ্যানিকেতন
              </Typography>
              <div
                // className=""
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Typography
                  className="text-lg sm:text-2xl font-bold rounded-full pt-5 text-yellow-400"
                  style={{ textShadow: "0px 0px 5px black" }}
                >
                  প্লে-গ্রুপ থেকে দশম শ্রেণী
                </Typography>
              </div>
            </div>
          </div>
          {/* lable */}
        </div>
        {/* carousel - 2 */}
        <div className="relative bg-blue-900">
          <img
            src={img2}
            alt="Image 2"
            className="opacity-100 w-full h-[600px] "
          />
          {/* lable */}
          <div className="absolute flex justify-center transform -translate-y-1/2 left-[5%] right-[5%] bottom-5 mt-30">
            <div
              // className="flex-1"
              className="flex-1"
            >
              <Typography
                as="a"
                href="#"
                className=" cursor-pointer font-bold text-5xl sm:text-7xl text-white "
                style={{ textShadow: "0px 0px 5px black" }}
                //
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                কিশলয় বিদ্যানিকেতন
              </Typography>
              <div
                // className=""
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Typography
                  className="text-lg sm:text-2xl font-bold rounded-full pt-5 text-yellow-400"
                  style={{ textShadow: "0px 0px 5px black" }}
                >
                  প্লে-গ্রুপ থেকে দশম শ্রেণী
                </Typography>
              </div>
            </div>
          </div>
          {/* lable */}
        </div>
        {/* carousel - 3 */}
        <div className="relative bg-blue-900">
          <img
            src={img3}
            alt="Image 3"
            className="opacity-100 w-full h-[600px] "
          />
          {/* lable */}
          <div className="absolute flex justify-center transform -translate-y-1/2 left-[5%] right-[5%] bottom-5 mt-30">
            <div
              // className="flex-1"
              className="flex-1"
            >
              <Typography
                as="a"
                href="#"
                className=" cursor-pointer font-bold text-5xl sm:text-7xl text-white "
                style={{ textShadow: "0px 0px 5px black" }}
                //
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                কিশলয় বিদ্যানিকেতন
              </Typography>
              <div
                // className=""
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Typography
                  className="text-lg sm:text-2xl font-bold rounded-full pt-5 text-yellow-400"
                  style={{ textShadow: "0px 0px 5px black" }}
                >
                  প্লে-গ্রুপ থেকে দশম শ্রেণী
                </Typography>
              </div>
            </div>
          </div>
          {/* lable */}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
