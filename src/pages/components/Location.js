import React from "react";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
const Location = () => {
  return (
    <div className="pt-5 lg:px-20 px-10 mb-0 bg-gray-300" id="Contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 py-10">
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          //
        >
          <h1 className="lg:text-5xl text-3xl text-left font-bold pb-5">
            Our Location
          </h1>
          <p className="text-lg text-left flex mt-10">
            1216/1, Mirpur-13, <br /> MIRPUR, DHAKA-1216
          </p>
          <div className="text-lg flex mt-5">
            <MdPhoneInTalk size={30} />
            <a href="tel:+8801972252777" className="ml-5">
              +8801700000000
            </a>
          </div>
          <div className="text-lg flex mt-5">
            <MdEmail size={30} />
            <a href="mailto:info@jsencoder.com" className="ml-5">
              kisaloy@gmail.com
            </a>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          //
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d945.9663544156386!2d90.37641621848134!3d23.806441767550226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smirpur%2013!5e0!3m2!1sen!2sbd!4v1693675701489!5m2!1sen!2sbd"
            title="map"
            className="h-96 w-full rounded-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d945.9663544156386!2d90.37641621848134!3d23.806441767550226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smirpur%2013!5e0!3m2!1sen!2sbd!4v1693675701489!5m2!1sen!2sbd"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Location;
