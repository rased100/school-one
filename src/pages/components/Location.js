import React from "react";
import { MdLocationOn, MdPhoneInTalk, MdEmail } from "react-icons/md";
const Location = () => {
  return (
    <div className="px-5" id="Contact">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 py-10">
        <div
          // data-aos="fade-left"
          // data-aos-duration="1500"
          //
          className=" flex flex-col justify-center items-center rounded-xl bg-gray-800 p-10"
        >
          {/* <h1 className="lg:text-5xl text-3xl  font-bold pb-5">Our Location</h1> */}
          <p className="bg-gray-700 p-5 rounded-md">
            <MdLocationOn size={30} />
          </p>
          <p className="text-2xl font-bold text-white py-3">Address:</p>
          <p className="flex text-gray-400 text-lg text-left ">
            Section 13, Block B, Road 9, House 43,Mirpur, Kafrul, Dhaka, 1216
          </p>

          <div className="md:flex justify-center items-center mt-5">
            <p className="text-lg flex justify-center items-center px-3">
              <MdEmail className="mr-2 text-gray-400" size={25} />{" "}
              <p className="md:hidden text-gray-400">Email:</p>
            </p>
            <p className="text-lg text-gray-400">
              kishalayabiddaniketan1994@gmail.com
            </p>
          </div>

          <div className="text-lg text-gray-400 flex mt-5">
            <MdPhoneInTalk size={30} />
            <a href="tel:+8801972252777" className="ml-5">
              +8801552307304
            </a>
          </div>
        </div>
        <div
          // data-aos="fade-right"
          // data-aos-duration="1500"
          //
          className="bg-gray-800"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d945.9663544156386!2d90.37641621848134!3d23.806441767550226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smirpur%2013!5e0!3m2!1sen!2sbd!4v1693675701489!5m2!1sen!2sbd"
            title="map"
            className="h-96 w-full rounded-lg opacity-70"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
