import React from "react";
import "./NavBar.css";

const NavBar = ({ children, shadow }) => React.createElement(
  "div",
  { className: shadow ? "nav-bar shadow" : "nav-bar" },
  children
);

export default NavBar;