import React from "react";

const ButtonPrimary = (props) => {
  return (
    <a
      href="#_"
      class="relative inline-flex items-center justify-center px-4 py-1.5 overflow-hidden font-bold rounded-md shadow-2xl group text-white hover:text-black"
    >
      <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-50 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-300 group-hover:opacity-100"></span>
      {/* <!-- Top glass gradient --> */}
      <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
      {/* <!-- Bottom gradient --> */}
      <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
      {/* <!-- Left gradient --> */}
      <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
      {/* <!-- Right gradient --> */}
      <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
      <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
      <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
      <span class="relative ">{props.name}</span>
    </a>
  );
};

export default ButtonPrimary;