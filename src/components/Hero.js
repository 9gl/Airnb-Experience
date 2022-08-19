import React from "react";
import hero from "../images/photos.png";
export default function Hero() {
    return (
        <section className="hero">
            <img className="hero--image" src={hero}alt=""/>
            <h1 className="hero--h1">Online Experience</h1>
            <p className="hero--text">Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}