import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from "../../assets/logo-2.png";
import "./Navigation.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logout } = useAuth();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center hover:text-blue-500">
          Home
        </Link>
        {/* <a href="#" className="flex items-center hover:text-blue-500">
        </a> */}
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/about" className="flex items-center hover:text-blue-500">
          About
        </Link>
        {/* <a href="#About" className="flex items-center hover:text-blue-500">
          About Us
        </a> */}
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#Contact" className="flex items-center hover:text-blue-500">
          Contact
        </a>
      </Typography>

      {user ? (
        <>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link
              to="/dashboard"
              className="flex items-center hover:text-blue-500"
            >
              Dashboard
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
            onClick={logout}
          >
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center"
            >
              Logout
            </button>
          </Typography>
        </>
      ) : (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to="/login" className="flex items-center hover:text-blue-500">
            {/* <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center"
            >
              Login
            </button> */}
            {/* <a
              href="#_"
              class="relative px-5 py-2 font-medium text-white group"
            >
              <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-gradient-to-r from-purple-600 via-purple-700 to-rose-600 group-hover:skew-x-12"></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-gradient-to-r from-rose-600 via-purple-700 to-purple-600 group-hover:-skew-x-12"></span>
              <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
              <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
              <span class="relative">Login</span>
            </a> */}
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
              <span class="relative ">Login</span>
            </a>
          </Link>
        </Typography>
      )}
    </ul>
  );

  return (
    // <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-[#124559]">
    <Navbar className="mx-auto  py-2 px-4 lg:px-8 lg:py-2  rounded-none border-0 navigation-background">
      <div className=" mx-auto flex items-center justify-around text-blue-gray-900">
        <div className="flex items-center">
          <Typography className="">
            <img
              src={logo}
              alt="Logo"
              className="mr-4 cursor-pointer h-[60px] rounded"
            />
          </Typography>
          <Typography
            as="a"
            href="#"
            className="mx-5 cursor-pointer py-1.5 font-bold text-2xl"
          >
            কিশলয় বিদ্যানিকেতন
            <Typography className="text-sm  bg-gray-500 rounded-full mx-10 px-3 ">
              প্লে-গ্রুপ থেকে দশম শ্রেণী
            </Typography>
          </Typography>
        </div>

        <div className="hidden lg:block">{navList}</div>
        {/* <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          <span>Buy Now</span>
        </Button> */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className=" mx-auto">
          {navList}
          {/* <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button> */}
        </div>
      </MobileNav>
    </Navbar>
  );
}
