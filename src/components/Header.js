import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "../Header.scss";

import enhancetw_logo from "../images/enhancetw_logo.png";

function Header() {
  return (
    <Router>
      <nav id="header" className="fixed full-width">
        <div className="container">
          <section className="main-logo">
            <HashLink smooth to="/#root">
              <img class="full-width-img" src={enhancetw_logo} />
            </HashLink>
          </section>
          <ul className="nav-list">
            <li className="nav-list-item">
              <HashLink smooth to="/#root">
                Home
              </HashLink>
            </li>
            <li className="nav-list-item">
              <HashLink smooth to="/#services">
                Services
              </HashLink>
            </li>
            <li className="nav-list-item">
              <HashLink smooth to="/#aboutus">
                About Us
              </HashLink>
            </li>
            <li className="nav-list-item">
              <HashLink smooth to="/#ourteam">
                Our Team
              </HashLink>
            </li>
            <li className="nav-list-item">
              <HashLink smooth to="/#contactus">
                Contact Us
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </Router>
  );
}

export default Header;
