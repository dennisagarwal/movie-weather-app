import React from "react";
import "./NavBar.scss"
import logo from '../../assets/logo/LogoMakr.png'
import userIcaon from '../../assets/logo/LogoMakr.png'

function NavBar() {
  return (

    <div>
      <img
      className="NavBar__logo"
        src={logo}
        alt="image logo"
      />

      </div>


  )
}

export default NavBar
