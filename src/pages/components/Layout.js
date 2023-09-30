import React from "react";
import { NavbarDefault } from "../nav/Navigation";
import Footer from "./Footer";
import Navbar from "../nav/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarDefault />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
