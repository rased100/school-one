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
      {/* ================== carousel-1 - start ======================= */}
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
        {/* lable */}
        <div className="absolute flex justify-center transform -translate-y-1/2 left-1/4 right-1/4 top-1/2">
          <div
            // className="flex-1"
            className="flex-1 shadow-5xl"
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
        {/* lable */}
      </div>
      {/*  carousel-1 - end  */}

      {/* ================== carousel-2 - start ======================= */}
      <div id="slide2" className="carousel-item relative w-full bg-black">
        <img src={img2} className="opacity-20 w-full h-[600px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        {/* lable */}
        <div className="absolute flex justify-center transform -translate-y-1/2 left-1/4 right-1/4 top-1/2">
          <div
            // className="flex-1"
            className="flex-1 shadow-5xl"
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
        {/* lable */}
        <div className="absolute flex justify-center transform -translate-y-1/2 left-1/4 right-1/4 top-1/2">
          <div
            // className="flex-1"
            className="flex-1 shadow-5xl"
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
      {/*  carousel-2 - end  */}

      {/* ================== carousel-3 - start ======================= */}
      <div id="slide3" className="carousel-item relative w-full bg-black">
        <img src={img3} className="opacity-20 w-full h-[600px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        {/* lable */}
        <div className="absolute flex justify-center transform -translate-y-1/2 left-1/4 right-1/4 top-1/2">
          <div
            // className="flex-1"
            className="flex-1 shadow-5xl"
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
        {/* lable */}
      </div>
      {/*  carousel-3 - end  */}

      {/* ================== carousel-4 - start ======================= */}
      <div id="slide4" className="carousel-item relative w-full bg-black">
        <img src={img4} className="opacity-20 w-full h-[600px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        {/* lable */}
        <div className="absolute flex justify-center transform -translate-y-1/2 left-1/4 right-1/4 top-1/2">
          <div
            // className="flex-1"
            className="flex-1 shadow-5xl"
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
        {/* lable */}
      </div>
      {/*  carousel-3 - end  */}
    </div>
  );
};

export default Banner;
