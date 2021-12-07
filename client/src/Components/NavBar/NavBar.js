import React from "react";
import "./NavBar.scss";
import logo from "../../assets/logo/LogoMakr.png";
import userIcon from "../../assets/logo/userLogo.png";
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

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

  return (
    <div className={`NavBar ${show && "NavBar__change"}`}>
      <img className="NavBar__logo" src={logo} alt="image logo" />
      {error && <p>"Logout Failed"</p>}
      <p>{currentUser.email}</p>
      <Link to="/updateprofile">
        <img className="NavBar__userIcon" src={userIcon} alt="user icon" />
      </Link>
      <button className="NavBar__button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
}

export default NavBar;
