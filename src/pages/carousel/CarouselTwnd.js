import React, { useState, useEffect } from "react";
import img1 from "../../assets/kids/1.jpg";
import img2 from "../../assets/kids/2.jpg";
import img3 from "../../assets/kids/3.jpg";
import img4 from "../../assets/kids/4.jpg";

const CarouselTwnd = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Define an array of image sources
  const images = [img1, img2, img3, img4];

  // Function to handle changing the slide
  const changeSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length ? 1 : prevSlide + 1
    );
  };

  useEffect(() => {
    // Set an interval to change the slide every 5 seconds (5000 milliseconds)
    const interval = setInterval(changeSlide, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Function to handle stopping the interval when the component unmounts
    const stopInterval = () => clearInterval(interval);
    let interval;

    // Set an interval to change the slide every 5 seconds (5000 milliseconds)
    interval = setInterval(changeSlide, 5000);

    // Clear the interval when the component unmounts or when the current slide changes
    return () => {
      clearInterval(interval);
      stopInterval();
    };
  }, [currentSlide]);

  return (
    <div className="carousel w-full">
      {images.map((img, index) => (
        <div
          key={`slide${index + 1}`}
          className={`carousel-item relative w-full ${
            currentSlide === index + 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={img} className="w-full" alt={`Slide ${index + 1}`} />
        </div>
      ))}
      {/* Navigation buttons */}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href={`#slide${
            currentSlide === 1 ? images.length : currentSlide - 1
          }`}
          className="btn btn-circle"
        >
          ❮
        </a>
        <a
          href={`#slide${
            currentSlide === images.length ? 1 : currentSlide + 1
          }`}
          className="btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselTwnd;
