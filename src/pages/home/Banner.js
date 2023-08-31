import React from "react";
import "./Banner.css";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import img1 from "../../assets/cImg1.jpg";
import img2 from "../../assets/cImg2.jpg";
import img3 from "../../assets/cImg3.jpg";
import img4 from "../../assets/cImg4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full bg-black">
        <img src={img1} className="opacity-20 w-full h-[600px] " />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-1/4 right-1/4 top-1/2">
          <div
            // className="flex-1"
            className="flex-1"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <Typography
              as="a"
              href="#"
              className=" cursor-pointer font-bold text-7xl"
            >
              কিশালয় বিদ্যানিকেতন
            </Typography>
            <div
              // className=""
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Typography className=" text-2xl font-bold rounded-full pt-5">
                প্লে-গ্রুপ থেকে দশম শ্রেণী
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full h-[600px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full h-[600px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full h-[600px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
