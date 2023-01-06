import { useRef } from 'react';
import React from "react";
import Portrait from "./Images/meBlack.jpg"
import AboutDetails from "./AboutDetails";
import "../Functions/AnimateScroll";
import "./CSS/About.css"

function AboutMe() {

    const details = useRef(null);

    return (
    <>
    <main className="aboutContainer">
        <div className="waviy " data-aos="fade-right">
            <span className="arvo">A</span>
            <span className="arvo">B</span>
            <span className="arvo">O</span>
            <span className="arvo">U</span>
            <span className="arvo">T</span>
            <span className="arvo" style={{visibility: "hidden"}}>T</span>
            <span className="arvo">M</span>
            <span className="arvo">E</span>
        </div>
        <img className='blackPortrait' src={Portrait} alt='' data-aos="fade-left" />
    </main>
    <section ref={details}><AboutDetails /></section>
    </>
)
}

export default AboutMe;