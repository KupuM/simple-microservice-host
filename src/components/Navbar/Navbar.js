import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ items }) => {
    return (
        <nav>
            <ul>
                {items.map(({ link, title }, index) => (
                    <li>
                        <Link key={index} to={link}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Navbar.displayName = "Navbar";
