import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Typography } from "@material-tailwind/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import img1 from "../../assets/kids/cc/1c.png";
import img2 from "../../assets/kids/cc/2c.png";
import img3 from "../../assets/kids/cc/3c.png";
// import img1 from "../../assets/kids/cc/1cc.png";
// import img2 from "../../assets/kids/cc/2cc.png";
// import img3 from "../../assets/kids/cc/3cc.png";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        // autoPlay={true}
        autoFocus={true}
        dynamicHeight={true}
      >
        {/* carousel - 1 */}
        <div className="relative bg-blue-900">
          <div className="image-wrapper">
            <img src={img1} alt="Image 1" className="image" />
          </div>
          {/* label */}
          <div className="absolute flex justify-center transform -translate-y-1/2 left-[5%] right-[5%] top-[40%]">
            <div className="flex-1">
              <Typography
                className="cursor-pointer font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white"
                style={{ textShadow: "0px 0px 5px black" }}
                //
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <Link to="/">কিশলয় বিদ্যানিকেতন</Link>
              </Typography>
              <div data-aos="fade-up" data-aos-duration="1500">
                <Typography
                  className="text-md sm:text-lg md:text-xl m font-bold rounded-full md:pt-5 text-white"
                  style={{ textShadow: "0px 0px 5px black" }}
                >
                  প্লে-গ্রুপ থেকে দশম শ্রেণী
                </Typography>
              </div>
            </div>
          </div>
          {/* label */}
        </div>
        {/* carousel - 2 */}
        <div className="relative bg-blue-900">
          <div className="image-wrapper">
            <img src={img2} alt="Image 2" className="image" />
          </div>
          {/* label */}
          <div className="absolute flex justify-center transform -translate-y-1/2 left-[5%] right-[5%] top-[40%]">
            <div className="flex-1">
              <Typography
                className="cursor-pointer font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white"
                style={{ textShadow: "0px 0px 5px black" }}
                //
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <Link to="/">কিশলয় বিদ্যানিকেতন</Link>
              </Typography>
              <div data-aos="fade-up" data-aos-duration="1500">
                <Typography
                  className="text-md sm:text-lg md:text-xl m font-bold rounded-full pt-5 text-white"
                  style={{ textShadow: "0px 0px 5px black" }}
                >
                  প্লে-গ্রুপ থেকে দশম শ্রেণী
                </Typography>
              </div>
            </div>
          </div>
          {/* label */}
        </div>
        {/* carousel - 3 */}
        <div className="relative bg-blue-900">
          <div className="image-wrapper">
            <img src={img3} alt="Image 3" className="image" />
          </div>
          {/* label */}
          <div className="absolute flex justify-center transform -translate-y-1/2 left-[5%] right-[5%] top-[40%]">
            <div className="flex-1">
              <Typography
                className="cursor-pointer font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white"
                style={{ textShadow: "0px 0px 5px black" }}
                //
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <Link to="/">কিশলয় বিদ্যানিকেতন</Link>
              </Typography>
              <div data-aos="fade-up" data-aos-duration="1500">
                <Typography
                  className="text-md sm:text-lg md:text-xl m font-bold rounded-full pt-5 text-white"
                  style={{ textShadow: "0px 0px 5px black" }}
                >
                  প্লে-গ্রুপ থেকে দশম শ্রেণী
                </Typography>
              </div>
            </div>
          </div>
          {/* label */}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
