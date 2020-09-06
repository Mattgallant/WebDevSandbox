import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="Navbar">
            <h1>
                <Link style={{ color: "#4dc0d1", fontSize: "3vw" }} to="/">
                    Calendar App
                </Link>
            </h1>
            <div className="nav-links">
                <Link className="btn" to="/calendar">
                    Calendar
                </Link>
                <Link className="btn" to="/todo">
                    Todo List
                </Link>
            </div>
        </header>
    );
}

export default Navbar;
