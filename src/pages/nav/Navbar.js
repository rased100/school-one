import React, { useState } from "react";
import { Link } from "react-router-dom"; // If you're using React Router
import "./Navbar.css"; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Example icon

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const links = [
    {
      name: "About",
      subLinks: [
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
      name: "Administration",
      subLinks: [
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
      name: "Academic",
      subLinks: [
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
      name: "Admission",
      subLinks: [
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
      name: "Result",
      subLinks: [
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
      name: "Co-Curricular",
      subLinks: [
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
      name: "Facilities",
      subLinks: [
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
      name: "Library",
      subLinks: [
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
      name: "Gallery",
      subLinks: [
        <Link to="" key="Photos">
          Photos
        </Link>,
        <Link to="" key="Vodeos">
          Videos
        </Link>,
      ],
    },
  ];

  const toggleSubLinks = (index) => {
    setActiveLink(activeLink === index ? null : index);
  };

  const isSubLinksActive = (index) => {
    return activeLink === index ? "block" : "hidden";
  };

  return (
    <div className="navbar bg-gray-900 text-white p-4 mx-auto">
      <ul className="nav-links flex justify-center space-x-10">
        {links.map((link, index) => (
          <li
            className="nav-item relative"
            key={index}
            onMouseEnter={() => toggleSubLinks(index)}
            onMouseLeave={() => toggleSubLinks(index)}
          >
            <a
              href="#"
              className={`transition-colors ${
                isSubLinksActive(index) ? "text-blue-500" : "text-white"
              } hover:text-yellow-500`}
            >
              {link.name}
            </a>
            <div
              className={`sub-links ${isSubLinksActive(index)}`}
              style={{ backgroundColor: "#333" }}
            >
              {link.subLinks.map((subLink, subIndex) => (
                <Link
                  key={subIndex}
                  to="#"
                  className="block p-2 hover:bg-gray-700 transition-colors"
                >
                  <div className="flex flex-row items-center">
                    <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                    {subLink}
                  </div>
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
