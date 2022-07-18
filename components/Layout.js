import React from "react";
import Navbar from "./Navbar";
import Notify from "./Notify";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar />
        <Notify />

        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
