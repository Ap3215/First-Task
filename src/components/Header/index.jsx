import React from "react";
import { Link } from "react-router-dom";

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

const Header = () => (
    <header className="header">
        <Link to="/">
            <img
                src="../Image/omnifood-logo.png"
                className="header__logo"
                alt="OmniFood"
            />
        </Link>
        <nav>
            <ul className="nav-list">
                {links.map((link) => (
                    <li key={link.to}>
                        <Link to={link.to} className="nav-list__link">
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

export default Header;
