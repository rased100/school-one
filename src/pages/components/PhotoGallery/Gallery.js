import React from "react";
import GalleryCard from "./GalleryCard";
import img1 from "../../../assets/cImg1.jpg";
import img2 from "../../../assets/cImg2.jpg";
import img3 from "../../../assets/cImg3.jpg";

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
  ];
  return (
    <div className="text-white bg-gray-500 mt-0">
      <div className="container mx-auto p-10">
        <h1 className="lg:text-5xl text-4xl font-bold my-5">Photo Gallery</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 justify-between py-10 gap-5">
          {images.map((image) => (
            <GalleryCard key={image.id} img={image.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
