import React from "react";

const GalleryCard = ({ img }) => {
  return (
    <div
      // data-aos="zoom-in"
      // data-aos-duration="2000"
      //
      className="card w-full bg-base-100 shadow-xl rounded-md"
    >
      <figure className="">
        {<img src={img} alt={img} className="rounded-md" />}
      </figure>
    </div>
  );
};

export default GalleryCard;
