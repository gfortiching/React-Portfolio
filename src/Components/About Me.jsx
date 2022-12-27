import "./CSS/About.css"
import Portrait from "./Images/meBlack.jpg"
import React, { useEffect } from "react";
import AOS from "aos";
import Education from "./Education";

function AboutMe() {

    AOS.init();

    useEffect(() => {
      AOS.init({duration: 2000});
    }, []);

    return (
    <>
    <section className="aboutMe">
        <div className="waviy" data-aos="fade-right">
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
            <span style={{visibility: "hidden"}}>T</span>
            <span>M</span>
            <span>E</span>
        </div>
        <img className='blackPortrait' src={Portrait} alt='' data-aos="fade-left" />
    </section>
    <Education />
    </>
)
}

export default AboutMe;