import React from "react";
import { NavbarDefault } from "../nav/Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarDefault />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
