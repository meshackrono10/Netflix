import React, { useState, useEffect } from "react";
import "./Nav.css";
import image1 from "./img/1.png";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrolly > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={image1} alt="netflix_logo" />
      <img
        className="nav_avator"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="netflix_logo"
      />
    </div>
  );
}

export default Nav;
