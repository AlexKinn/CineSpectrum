import React from "react";
import classes from "./Navbar.module.scss";

export default function Navbar() {
    return (
        <header className={classes.header}>
          <div>
            <a>Home</a>
            <nav>
                <ul>
                    <li>
                    <a>Movies</a>
                    </li>
                    <li>
                    <a>Shows</a>
                    </li>
                    <li>
                    <a>Login</a>
                    </li>
                </ul>
            </nav>
          </div>
        </header> 
    )
}