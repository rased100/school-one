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
        "SubLink 1.1",
        "SubLink 1.2",
        "SubLink 1.3",
        "SubLink 1.4",
        "SubLink 1.5",
      ],
    },
    {
      name: "Administration",
      subLinks: [
        "SubLink 2.1",
        "SubLink 2.2",
        "SubLink 2.3",
        "SubLink 2.4",
        "SubLink 2.5",
      ],
    },
    {
      name: "Academic",
      subLinks: [
        "SubLink 3.1",
        "SubLink 3.2",
        "SubLink 3.3",
        "SubLink 3.4",
        "SubLink 3.5",
      ],
    },
    {
      name: "Admission",
      subLinks: [
        "SubLink 4.1",
        "SubLink 4.2",
        "SubLink 4.3",
        "SubLink 4.4",
        "SubLink 4.5",
      ],
    },
    {
      name: "Result",
      subLinks: [
        "SubLink 5.1",
        "SubLink 5.2",
        "SubLink 5.3",
        "SubLink 5.4",
        "SubLink 5.5",
      ],
    },
    {
      name: "Co-Curricular",
      subLinks: [
        "SubLink 6.1",
        "SubLink 6.2",
        "SubLink 6.3",
        "SubLink 6.4",
        "SubLink 6.5",
      ],
    },
    {
      name: "Facilities",
      subLinks: [
        "SubLink 7.1",
        "SubLink 7.2",
        "SubLink 7.3",
        "SubLink 7.4",
        "SubLink 7.5",
      ],
    },
    {
      name: "Library",
      subLinks: [
        "SubLink 8.1",
        "SubLink 8.2",
        "SubLink 8.3",
        "SubLink 8.4",
        "SubLink 8.5",
      ],
    },
    {
      name: "Gallery ",
      subLinks: [
        "SubLink 9.1",
        "SubLink 9.2",
        "SubLink 9.3",
        "SubLink 9.4",
        "SubLink 9.5",
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
              style={{ backgroundColor: "#333" }} // Change background color as desired
            >
              {link.subLinks.map((subLink, subIndex) => (
                <Link
                  key={subIndex}
                  to="#"
                  className="block p-2 hover:bg-gray-700 transition-colors flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2" // Adjust margin as needed
                  />
                  {subLink}
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
