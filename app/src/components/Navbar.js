import React from "react";

export default function Navbar() {
    return (
        <header>
          <div>
            <a to="/">Home</a>
            <nav>
                <ul>
                    <li>
                    <a to="/movie-page">Movies</a>
                    </li>
                    <li>
                    <a to="/show-page">Shows</a>
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