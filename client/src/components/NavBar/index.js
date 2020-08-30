import React from "react";
import "./style.css";

function NavBar(props) {
    const links = ["Search", "Saved", "NoMatch"];
    const navLinks = links.map(link => {
        return (
            <li><a href={"/" + link}>{link}</a></li>
        )
    });

    return (
        <nav>
            <h2 className="logo"> <a href="/">{props.logoTitle}</a></h2>
            <ul>{navLinks}</ul>
        </nav>

    )
};

export default NavBar;