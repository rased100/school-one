import React from "react";
import GalleryCard from "./GalleryCard";
import img1 from "../../../assets/cImg1.jpg";
import img2 from "../../../assets/cImg2.jpg";
import img3 from "../../../assets/cImg3.jpg";
import img4 from "../../../assets/cImg4.jpg";
import img5 from "../../../assets/21Feb.jpg";
import img6 from "../../../assets/21Feb2.jpg";
import img7 from "../../../assets/21Feb3.jpg";
import img8 from "../../../assets/groupimg1.jpg";

const Gallery = () => {
  const images = [
    {
      id: "01",
      img: img1,
    },
    {
      id: "02",
      img: img2,
    },
    {
      id: "03",
      img: img3,
    },
    {
      id: "04",
      img: img4,
    },
    {
      id: "05",
      img: img5,
    },
    {
      id: "06",
      img: img6,
    },
    {
      id: "07",
      img: img7,
    },
    {
      id: "08",
      img: img8,
    },
    {
      id: "04",
      img: img4,
    },
  ];
  return (
    <div className="text-white">
      <div className="container mx-auto p-10">
        <h1 className="lg:text-5xl text-4xl font-bold text-black my-5 ">
          Photo Gallery
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 justify-between lg:mt-10 mt-5 pb-10 gap-5">
          {images.map((image) => (
            <GalleryCard key={image.id} img={image.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
