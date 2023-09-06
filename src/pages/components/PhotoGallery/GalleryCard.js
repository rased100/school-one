import React from "react";

const GalleryCard = ({ img }) => {
  return (
    <div
      // data-aos="zoom-in"
      // data-aos-duration="2000"
      //
      className="card w-full bg-base-100 shadow-xl rounded-xl"
    >
      <figure className="px-5 py-5">
        {<img src={img} alt={img} className="rounded-xl" />}
      </figure>
    </div>
  );
};

export default GalleryCard;
