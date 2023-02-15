import React from "react";
import { Link } from "react-router-dom";
import PostTitle from "../PostTitle";

import "./index.css";

const links = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/posts",
    title: "Posts",
  },
  {
    to: "/images",
    title: "Images",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Link to="/ ">
        <img src="../Image/omnifood-logo.png" alt="header logo" />
      </Link>
      <nav className="main-nav">
        <ul className="main-nav-list">
          {links.map((link) => (
            <PostTitle key={link.to} to={link.to} title={link.title} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
