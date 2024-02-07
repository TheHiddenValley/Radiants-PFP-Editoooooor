import React from "react";
import logo from "../Images/logo.png";
function Navbar(props) {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" alt="preview">
                    <img
                        src={logo}
                        alt="Logo"
                        width="auto"
                        height="10vh"
                        className="d-inline-block align-text-top"
                    />
                    &nbsp; Background Remover
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
