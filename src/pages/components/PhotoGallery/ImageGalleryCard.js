import React, { useState } from "react";
import "./ImageGallery.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const ImageGalleryCard = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openFullScreen = (image) => {
    setSelectedImage(image);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div className=" bg-base-100 shadow-xl rounded-md">
            <figure className="">
              {
                <div
                  key={index}
                  className="cursor-pointer "
                  onClick={() => openFullScreen(image)}
                >
                  <img
                    // style={{}}
                    src={image}
                    width={500}
                    height={200}
                    alt={`Image ${index}`}
                    className="custom-image"
                  />
                </div>
              }
            </figure>
          </div>
        ))}
        {/* <Link
          className=" bg-base-100 shadow-xl rounded-md flex justify-center items-center"
          to="/imagegallery"
        >
          <p>More Images</p>
        </Link> */}
      </div>

      {selectedImage && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full-Screen"
              className="max-h-screen max-w-screen"
            />
            <button
              className="absolute top-0 right-0 m-4 text-white text-xl bg-black rounded-full"
              onClick={closeFullScreen}
            >
              {/* <p className="mb-1">x</p> */}
              <AiFillCloseCircle />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryCard;
