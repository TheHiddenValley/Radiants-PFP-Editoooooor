import React from "react";
import logo from "../Images/logo.png";

function Navbar(props) {
    return (
        <nav className="navbar bg-black">
            <div className="container-fluid d-flex justify-content-center">
                <a className="navbar-brand" href="/" alt="preview">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{
                            maxWidth: "80vw",
                            minWidth: "40vw",
                            height: "auto",
                        }}
                        className="d-inline-block align-text-top"
                    />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
