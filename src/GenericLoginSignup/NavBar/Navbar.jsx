import MaskPic from "../../assets/mask1.png";
import React from "react";
import "./Navbar.css";
import Logout from "./Logout/Logout";

const Navbar = () => {
  return (
    <nav>
      <img src={MaskPic} alt="mask picture" id="logo" />
      <Logout />
    </nav>
  );
};

export default Navbar;
