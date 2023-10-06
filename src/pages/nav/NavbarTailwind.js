import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarTailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

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
          Hisroey of Institute
        </Link>,
        <Link to="" key="SubLink2">
          Mission & Vision
        </Link>,
        <Link to="" key="SubLink3">
          Achievements
        </Link>,
        <Link to="" key="SubLink4">
          News & Events
        </Link>,
      ],
    },
    {
      label: "Administration",
      links: [
        <Link to="" key="SubLink2.1">
          Governing Body
        </Link>,
        <Link to="" key="SubLink2.2">
          Chief Patron's Message
        </Link>,
        <Link to="" key="SubLink2.3">
          Principal's Message
        </Link>,
        <Link to="" key="SubLink2.4">
          Teacher
        </Link>,
        <Link to="" key="SubLink2.5">
          Staff
        </Link>,
      ],
    },
    {
      label: "Academic",
      links: [
        <Link to="" key="SubLink3.1">
          Class Routine
        </Link>,
        <Link to="" key="SubLink3.2">
          Exam Routine
        </Link>,
        <Link to="" key="SubLink3.3">
          Notice
        </Link>,
        <Link to="" key="SubLink3.4">
          Syllabus
        </Link>,
        <Link to="" key="SubLink3.5">
          Calendar & Year Planner
        </Link>,
      ],
    },
    {
      label: "Admission",
      links: [
        <Link to="" key="SubLink4.1">
          Admission Circular
        </Link>,
        <Link to="" key="SubLink4.2">
          Prospectus
        </Link>,
        <Link to="" key="SubLink4.3">
          Admission Result
        </Link>,
        <Link to="" key="SubLink4.4">
          Admission Form
        </Link>,
        <Link to="" key="SubLink4.5">
          Selected Candidates
        </Link>,
      ],
    },
    {
      label: "Result",
      links: [
        <Link to="http://www.educationboardresults.gov.bd/" key="SubLink5.1">
          মাধ্যমিক পরীক্ষার ফলাফল
        </Link>,
        <Link to="" key="SubLink5.3">
          কিশলয় পরীক্ষার ফলাফল
        </Link>,
      ],
    },
    // {
    //   label: "Co-Curricular",
    //   links: [
    //     <Link to="" key="SubLink6.1">
    //       SubLink 6.1
    //     </Link>,
    //     <Link to="" key="SubLink6.2">
    //       SubLink 6.2
    //     </Link>,
    //     <Link to="" key="SubLink6.3">
    //       SubLink 6.3
    //     </Link>,
    //     <Link to="" key="SubLink6.4">
    //       SubLink 6.4
    //     </Link>,
    //     <Link to="" key="SubLink6.5">
    //       SubLink 6.5
    //     </Link>,
    //   ],
    // },
    // {
    //   label: "Facilities",
    //   links: [
    //     <Link to="" key="SubLink7.1">
    //       SubLink 7.1
    //     </Link>,
    //     <Link to="" key="SubLink7.2">
    //       SubLink 7.2
    //     </Link>,
    //     <Link to="" key="SubLink7.3">
    //       SubLink 7.3
    //     </Link>,
    //     <Link to="" key="SubLink7.4">
    //       SubLink 7.4
    //     </Link>,
    //     <Link to="" key="SubLink7.5">
    //       SubLink 7.5
    //     </Link>,
    //   ],
    // },
    // {
    //   label: "Library",
    //   links: [
    //     <Link to="" key="SubLink8.1">
    //       Debating Club
    //     </Link>,
    //     <Link to="" key="SubLink8.2">
    //       Readers & Writers Club
    //     </Link>,
    //     <Link to="" key="SubLink8.3">
    //       Extempore Speech Club
    //     </Link>,
    //     <Link to="" key="SubLink8.4">
    //       Presentation Club
    //     </Link>,
    //   ],
    // },
    {
      label: "Govt",
      links: [
        <Link to="https://www.dhakaeducationboard.gov.bd/" key="SubLink8.1">
          শিক্ষা বোর্ড, ঢাকা
        </Link>,
        <Link to="https://moedu.gov.bd/" key="SubLink8.2">
          শিক্ষা মন্ত্রণালয়
        </Link>,
        <Link to="https://dshe.gov.bd/" key="SubLink8.3">
          মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর
        </Link>,
        <Link to="https://bteb.gov.bd/" key="SubLink8.4">
          বাংলাদেশ কারিগরি শিক্ষা বোর্ড
        </Link>,
        <Link to="https://www.dhakaeducationboard.gov.bd/" key="SubLink8.4">
          মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা বোর্ড, ঢাকা
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

  const HomeIcon = () => <i class="fa-solid fa-house"></i>;

  return (
    <div className="text-gray-900 bg-gray-300 dark-mode:text-gray-200 dark-mode:bg-gray-800 ">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <nav className="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-center md:flex-row">
          {/* <Link to="/" className="flex items-center">
            Home
          </Link> */}
          {/* <button
            className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0  hover:text-white focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline hover:bg-gradient-to-r from-rose-600 via-purple-700 to-purple-700"

            // className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center"
          >
            <Link to="/" className="flex items-center">
              Home
            </Link>
          </button> */}
          {dropdownItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => toggleDropdown(index)}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <button
                className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0  hover:text-white focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline hover:bg-gradient-to-r from-rose-600 via-purple-700 to-purple-700"

                // className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center"
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
                  className="absolute right-0 md:left-0  origin-top-right rounded-md shadow-lg md:w-48"
                  style={{ zIndex: 1000 }}
                >
                  <div className="px-2 py-2  rounded-md shadow dark-mode:bg-gray-800 bg-gradient-to-r from-rose-600 via-purple-700 to-purple-700">
                    {item.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        className="block px-4 py-2 mt-2 text-sm font-semibold  rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline text-white hover:text-black hover:bg-gradient-to-br from-pink-400 via-purple-500 to-blue-200"
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
