import React from "react";
import { NavbarDefault } from "../nav/Navigation";
import Footer from "./Footer";
import Navbar from "../nav/Navbar";
import Example from "../nav/NavbarTailwind";
import NavbarTailwind from "../nav/NavbarTailwind";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarDefault />
      <NavbarTailwind />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
