import React from "react";
import img1 from "../../../assets/clr1.jpeg";
// import img1 from "../../../assets/cImg1.jpg";
import img2 from "../../../assets/cImg2.jpg";
import img3 from "../../../assets/book-distribution-1.jpg";
import img4 from "../../../assets/gphoto6.jpg";
import img5 from "../../../assets/gphoto5.jpg";
import img6 from "../../../assets/cImg3.jpg";
import img7 from "../../../assets/21Feb3.jpg";
import img8 from "../../../assets/clr2.jpeg";
// import img8 from "../../../assets/gphoto8.jpg";
import img9 from "../../../assets/gphoto9.jpg";
import img10 from "../../../assets/gphoto10.jpg";
import ImageGalleryCard from "./ImageGalleryCard";
import { Link } from "react-router-dom";

const ImageGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  return (
    <div className="py-20 bg-gray-900">
      {/* <h1 className="text-3xl font-bold text-center my-4 text-black py-10">
        Image Gallery
      </h1> */}
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-white  text-black">
        Photo Gallery
      </h2>
      <p className="mb-5 px-5 text-center  text-gray-400 sm:text-xl md:px-32">
        Explore our image gallery to view captivating visuals from our
        collection. From memorable events to stunning landscapes, our gallery
        offers a visual journey worth exploring. Enjoy the images and let them
        tell our story.
      </p>
      <ImageGalleryCard images={images} />
      {/* <div>
        <Link className="flex justify-center items-center" to="/imagegallery">
          <p>More Images</p>
        </Link>
      </div> */}
    </div>
  );
};

export default ImageGallery;
