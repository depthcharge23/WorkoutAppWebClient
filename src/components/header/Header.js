import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header row">
            <h1 className="column">The Workout App</h1>
            <div className="column">
                <ul className="row">
                    <li className="nav-item column">Your Regimens</li>
                    <li className="nav-item column">Workouts</li>
                </ul>
            </div>
            <p className="sign-out column">Sign Out</p>
        </div>
    );
}

export default Header;
