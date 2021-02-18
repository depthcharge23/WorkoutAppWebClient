import React from "react";
import "./Header.css";

const Header = (props) => {
    return (
        <div className="header row">
            <h1 className="column">The Workout App</h1>
            <div className="column">
                <ul className="row">
                    {
                        props.navItems.map((navItem, index) => (
                            <li
                                className="nav-item column"
                                key={ index }
                            >
                                { navItem }
                            </li>
                        ))
                    }
                </ul>
            </div>
            <p className="sign-out column">Sign Out</p>
        </div>
    );
}

export default Header;
