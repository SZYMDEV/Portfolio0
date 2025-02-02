import React from "react";
import "../styles/Navigation.css";

export const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item left">
          <a href="https://github.com/SZYMDEV" className="logo" target="_blank">
            SZYMDEV
          </a>
        </li>
        <div className="spacer"></div>
        <li className="navbar-item right">
          <a href="#portfolio">My Work</a>
        </li>
        <li className="navbar-item right">
          <a href="#contact" className="contact-button">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
