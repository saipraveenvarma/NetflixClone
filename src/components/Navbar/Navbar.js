import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../images/netflix-logo.png"
import avatar from "../../images/Netflix-avatar.png"

const Navbar = () => {
  // const [show, setShow] = useState(false);
  // useEffect(() => {

  // }, []);

  return (
    <div className="nav">
      <img src={logo} className="nav__logo"/>
      <img src={avatar} className="nav__avatar" />
      
    </div>
   
  );
};

export default Navbar;
