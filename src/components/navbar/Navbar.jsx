import Link from "next/link";
import React from "react";
import Links from "./links/Links";
import "./navbar.scss"

// import logo from "../../asset/naktech.png"

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src="../../../naktech.png" alt="" className="logo" />
      </div>
      <div>
        <Links />
      </div>
    </div>
  )
};

export default Navbar;
