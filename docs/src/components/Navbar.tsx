import React from "react";
import { useLocation } from "react-router-dom";

const PageInfo = () => {
  const location = useLocation();

  console.log(location.pathname); // e.g. "/contact"

  return <div>Current page: {location.pathname}</div>;
};

const Navbar = () => {
  return (
    <>
      <div className="topnav">
        <a className={location.pathname === "/" ? "active" : ""} href="/">
          Home
        </a>
        <a
          className={location.pathname === "/News" ? "active" : ""}
          href="/News"
        >
          News
        </a>
        <a
          className={location.pathname === "/contacts" ? "active" : ""}
          href="/contacts"
        >
          Contact
        </a>
        <a
          className={location.pathname === "/about" ? "active" : ""}
          href="/about"
        >
          About
        </a>
      </div>
    </>
  );
};

export default Navbar;
