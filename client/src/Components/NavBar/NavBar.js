import React from "react";
import "./NavBar.scss";
import logo from "../../assets/logo/LogoMakr.png";
import userIcon from "../../assets/logo/userLogo.png";
import { useEffect } from "react";
import { useState } from "react";
import Search from "../Search/Search";


function NavBar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  // const[searchTerm,setSearchTerm]=useState('');

  return (
    <div className={`NavBar ${show && "NavBar__change"}`}>
      <img className="NavBar__logo" src={logo} alt="image logo" />

      <img className="NavBar__userIcon" src={userIcon} alt="user icon" />
    </div>
  );
}

export default NavBar;
