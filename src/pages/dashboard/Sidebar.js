import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { FcBullish } from "react-icons/fc";
import logo from "../../assets/logo-2.png";
import {
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlineQuestionMarkCircle,
  HiOutlineUsers,
  HiOutlineViewGrid,
} from "react-icons/hi";

const linkClass =
  "text-white flex items-center gap-2 font-light px-3 py-2 hover:bg-gray-800 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const Sidebar = () => {
  const { pathname } = useLocation();
  console.log("pathname: ", pathname);

  return (
    <div className="bg-gray-900 w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <div style={{ width: 22 }}>
          <img src={logo} alt="" />
        </div>
        <Link to="/" className="text-white text-lg">
          Kishalaya
        </Link>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        <Link
          to=""
          className={classNames(
            {
              "bg-gray-700 text-white": pathname === "/dashboard",
            },
            linkClass
          )}
        >
          <span className="text-xl">
            <HiOutlineViewGrid />
          </span>
          Dashboard
        </Link>
        <Link
          to="DbResults"
          className={classNames(
            {
              "bg-gray-700 text-white": pathname === "/dashboard/DbResults",
            },
            linkClass
          )}
        >
          <span className="text-xl">
            <HiOutlineUsers />
          </span>
          Results
        </Link>
        <Link
          to="DbClassRoutines"
          className={classNames(
            {
              "bg-gray-700 text-white":
                pathname === "/dashboard/DbClassRoutines",
            },
            linkClass
          )}
        >
          <span className="text-xl">
            <HiOutlineUsers />
          </span>
          Class Routines
        </Link>
        <Link
          to="DbNoticeBoard"
          className={classNames(
            {
              "bg-gray-700 text-white": pathname === "/dashboard/DbNoticeBoard",
            },
            linkClass
          )}
        >
          <span className="text-xl">
            <HiOutlineUsers />
          </span>
          Notice Board
        </Link>
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        <Link
          to="settings"
          className={classNames(
            {
              "bg-gray-700 text-white": pathname === "/dashboard/settings",
            },
            linkClass
          )}
        >
          <span className="text-xl">
            <HiOutlineCog />
          </span>
          Settings
        </Link>
        <Link
          to="helpandsupport"
          className={classNames(
            {
              "bg-gray-700 text-white":
                pathname === "/dashboard/helpandsupport",
            },
            linkClass
          )}
        >
          <span className="text-xl">
            <HiOutlineQuestionMarkCircle />
          </span>
          Help & Support
        </Link>

        <div className={classNames(linkClass, "cursor-pointer text-red-500")}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
