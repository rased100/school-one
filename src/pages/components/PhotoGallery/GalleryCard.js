import React from "react";

const GalleryCard = ({ img }) => {
  return (
    <div
      data-aos="flip-right"
      data-aos-duration="3000"
      data-aos-easing="ease-in-out-back"
      className="card w-full bg-base-100 shadow-xl"
    >
      <figure className="px-10 py-10">
        {<img src={img} alt={img} className="rounded-xl" />}
      </figure>
    </div>
  );
};

export default GalleryCard;
