import React from "react";

const GalleryCard = ({ img }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      //
      className="card w-full bg-base-100 shadow-xl"
    >
      <figure className="px-10 py-10">
        {<img src={img} alt={img} className="rounded-xl" />}
      </figure>
    </div>
  );
};

export default GalleryCard;
