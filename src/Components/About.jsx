import "./CSS/About.css"
import Portrait from "./Images/meBlack.jpg"
import React from "react";
import Details from "./Details";

import "../Functions/AnimateScroll";

function AboutMe() {

    return (
    <>
    <section className="aboutMe">
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
    </section>
    <Details />
    </>
)
}

export default AboutMe;