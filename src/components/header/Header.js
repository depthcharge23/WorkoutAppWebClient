import React from "react";
import "./Header.css";

// Import Bootstrap Components
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <h1>The Workout App</h1>
            </Navbar.Brand>
        </Navbar>
    );
}

module.exports = Header;
