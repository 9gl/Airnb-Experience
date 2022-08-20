import React from "react";

export default function Navbar() {
    return (
        <nav>  
            <img className="nav-logo" src={process.env.PUBLIC_URL+"/images/airbnb-logo.png"} alt="" width="100px" />
        </nav>
    );
}