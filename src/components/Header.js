import React from "react";
import Photo from "../assets/images/logo.svg";
function Header() {
  return (
    <div id="header">
      <div id="head-icon">
        <img src={Photo} alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li> New</li>
        <li> Popular</li>
        <li> Trending</li>
        <li> Categories</li>
      </ul>
    </div>
  );
}

export default Header;
