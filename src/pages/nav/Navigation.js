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

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

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
        <a href="#" className="flex items-center hover:text-blue-500">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#About" className="flex items-center hover:text-blue-500">
          About Us
        </a>
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
