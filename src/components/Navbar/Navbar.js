import { useEffect, useState } from "react";
import React from "react";
import "./Navbar.css";
import logo from "../../images/netflix-logo.png"
import avatar from "../../images/Netflix-avatar.png"

const Navbar = () => {
  // const [show, setShow] = useState(false);
  // useEffect(() => {

  // }, []);

  return (
<<<<<<< HEAD
    <nav>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </nav>
=======
    <div className="nav">
      <img src={logo} className="nav__logo"/>
      <img src={avatar} className="nav__avatar" />
      
    </div>
   
>>>>>>> a54aa2c1c2d23a8203b40971210953fc70226d27
  );
};

export default Navbar;