import React from "react";
import "./NavBar.scss";
import logo from "../../assets/logo/LogoMakr.png";
import userIcon from "../../assets/logo/userLogo.png";
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router";

function NavBar() {
  const [show, handleShow] = useState(false);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

 async function handleLogOut() {
    setError("");
    try {
      await logout();
      history.pushState("/login");
    } catch {
      setError("Failed to logout");
    }
  }
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
      {error && <p>"Logout Failed"</p>}
      <p>{currentUser.email}</p>
      <img className="NavBar__userIcon" src={userIcon} alt="user icon" />
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
}

export default NavBar;
