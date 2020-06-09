import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  window.$(document).ready(function() {
    window.$(".sidenav").sidenav();
  });
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="nav-wrapper blue-grey darken-3">
          <div className="container">
            <a href="/" className="brand-logo hide-on-med-and-down" id="nav">
              <img
                className="brand-logo"
                src={
                  window.location.origin +
                  "/images/non-gallery/pplogo_transw.png"
                }
                alt="peaceful painting Studio logo"
              />{" "}
              Peaceful Painting Studio
            </a>
            <a href="/" className="sidenav-trigger" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/Pricing">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/Peaceful-Painting-1028253260684179/"
                  className="btn-floating btn-small blue-grey darken-4 interHide"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/PaintPeaceful"
                  className="btn-floating btn-small blue-grey darken-4 interHide"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/peaceful.painting.studio/"
                  className="btn-floating btn-small blue-grey darken-4 interHide"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <div className="divider"></div>
        <li>
          <NavLink to="/Gallery">Gallery</NavLink>
        </li>
        <div className="divider"></div>
        <li>
          <NavLink to="/Pricing">Pricing</NavLink>
        </li>
        <div className="divider"></div>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <div className="divider"></div>
      </ul>
    </div>
  );
};

export default Navbar;
