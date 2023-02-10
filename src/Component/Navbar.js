import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header class="header">
      <a Link="">
        <img src="../Image/omnifood-logo.png" alt="" />
      </a>
      <nav class="main-nav">
        <ul class="main-nav-list">
          <li>
            <Link to="/" class="main-nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/posts" class="main-nav-link">
              Posts
            </Link>
          </li>
          <li>
            <Link to="/images" class="main-nav-link">
              Images
            </Link>
          </li>
          <li>
            <Link to="" class="main-nav-link">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="" class="main-nav-link nav-cta">
              Try for free
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
