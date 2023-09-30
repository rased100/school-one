import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarTailwind.css";

const NavbarTailwind = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  //   const dropdownItems = [
  //     {
  //       label: "Dropdown 1",
  //       links: ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5"],
  //     },
  //     {
  //       label: "Dropdown 2",
  //       links: ["Link 6", "Link 7", "Link 8", "Link 9", "Link 10"],
  //     },
  //     // Add more dropdown items here...
  //   ];

  const dropdownItems = [
    {
      label: "About",
      links: [
        <Link to="/about" key="AboutSchool">
          About us
        </Link>,
        <Link to="" key="SubLink1">
          SubLink 1.2
        </Link>,
        <Link to="" key="SubLink2">
          SubLink 1.3
        </Link>,
        <Link to="" key="SubLink3">
          SubLink 1.4
        </Link>,
        <Link to="" key="SubLink4">
          SubLink 1.5
        </Link>,
      ],
    },
    {
      label: "Administration",
      links: [
        <Link to="" key="SubLink2.1">
          SubLink 2.1
        </Link>,
        <Link to="" key="SubLink2.2">
          SubLink 2.2
        </Link>,
        <Link to="" key="SubLink2.3">
          SubLink 2.3
        </Link>,
        <Link to="" key="SubLink2.4">
          SubLink 2.4
        </Link>,
        <Link to="" key="SubLink2.5">
          SubLink 2.5
        </Link>,
      ],
    },
    {
      label: "Academic",
      links: [
        <Link to="" key="SubLink3.1">
          SubLink 3.1
        </Link>,
        <Link to="" key="SubLink3.2">
          SubLink 3.2
        </Link>,
        <Link to="" key="SubLink3.3">
          SubLink 3.3
        </Link>,
        <Link to="" key="SubLink3.4">
          SubLink 3.4
        </Link>,
        <Link to="" key="SubLink3.5">
          SubLink 3.5
        </Link>,
      ],
    },
    {
      label: "Admission",
      links: [
        <Link to="" key="SubLink4.1">
          SubLink 4.1
        </Link>,
        <Link to="" key="SubLink4.2">
          SubLink 4.2
        </Link>,
        <Link to="" key="SubLink4.3">
          SubLink 4.3
        </Link>,
        <Link to="" key="SubLink4.4">
          SubLink 4.4
        </Link>,
        <Link to="" key="SubLink4.5">
          SubLink 4.5
        </Link>,
      ],
    },
    {
      label: "Result",
      links: [
        <Link to="" key="SubLink5.1">
          SubLink 5.1
        </Link>,
        <Link to="" key="SubLink5.2">
          SubLink 5.2
        </Link>,
        <Link to="" key="SubLink5.3">
          SubLink 5.3
        </Link>,
        <Link to="" key="SubLink5.4">
          SubLink 5.4
        </Link>,
        <Link to="" key="SubLink5.5">
          SubLink 5.5
        </Link>,
      ],
    },
    {
      label: "Co-Curricular",
      links: [
        <Link to="" key="SubLink6.1">
          SubLink 6.1
        </Link>,
        <Link to="" key="SubLink6.2">
          SubLink 6.2
        </Link>,
        <Link to="" key="SubLink6.3">
          SubLink 6.3
        </Link>,
        <Link to="" key="SubLink6.4">
          SubLink 6.4
        </Link>,
        <Link to="" key="SubLink6.5">
          SubLink 6.5
        </Link>,
      ],
    },
    {
      label: "Facilities",
      links: [
        <Link to="" key="SubLink7.1">
          SubLink 7.1
        </Link>,
        <Link to="" key="SubLink7.2">
          SubLink 7.2
        </Link>,
        <Link to="" key="SubLink7.3">
          SubLink 7.3
        </Link>,
        <Link to="" key="SubLink7.4">
          SubLink 7.4
        </Link>,
        <Link to="" key="SubLink7.5">
          SubLink 7.5
        </Link>,
      ],
    },
    {
      label: "Library",
      links: [
        <Link to="" key="SubLink8.1">
          SubLink 8.1
        </Link>,
        <Link to="" key="SubLink8.2">
          SubLink 8.2
        </Link>,
        <Link to="" key="SubLink8.3">
          SubLink 8.3
        </Link>,
        <Link to="" key="SubLink8.4">
          SubLink 8.4
        </Link>,
        <Link to="" key="SubLink8.5">
          SubLink 8.5
        </Link>,
      ],
    },
    {
      label: "Gallery",
      links: [
        <Link to="" key="Photos">
          Photos
        </Link>,
        <Link to="" key="Vodeos">
          Videos
        </Link>,
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 ">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <nav className="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-center md:flex-row">
          {dropdownItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => toggleDropdown(index)}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <button
                className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-white focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline hover:bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"

                // className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center"
              >
                <span>{item.label}</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${
                    openDropdown === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {openDropdown === index && (
                <div
                  className="absolute right-0 mt-0 origin-top-right rounded-md shadow-lg md:w-48"
                  style={{ zIndex: 1000 }}
                >
                  <div className="px-2 py-2  rounded-md shadow dark-mode:bg-gray-800 bg-gradient-to-r from-rose-600 via-purple-700 to-purple-700">
                    {item.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        className="block px-4 py-2 mt-2 text-sm font-semibold  rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline text-white"
                        href="#"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavbarTailwind;
