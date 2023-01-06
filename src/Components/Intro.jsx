import { useRef, useState } from 'react'

import "./CSS/Intro.css"
import Me from './Images/meTransparent.png'

import Skills from "./IntroSkills";
import Scroll from "../Functions/Scroll";

function Intro() {

    const next = useRef(null);
    const [headText, setHeadText] = useState("Get to know me!");

    return (
    <>
    <main className="introMain">
    <Skills />
    <section className="intro">
        <div className="left">
            <div className="left-wrapper">
                <h1 className="greet arvo">Hey!
                <span><img src="https://cdn-icons-png.flaticon.com/512/3898/3898709.png" className="handWave" alt="" /></span></h1>
                <span><h1 className="greet arvo">Nice to meet you!</h1></span>
                <span><h1 className="name arvo">I'm Gabriel and I'm a Full-Stack Web Developer.</h1></span>
            </div>
        </div>
        <div className="right">
            <img src={Me} alt="" className="myImg" />
        </div>
    </section>
    <button className="getToKnow lato" onClick={() => Scroll(next)} onMouseOver={() => setHeadText("Click to scroll down")} onMouseLeave={() => setHeadText("Get to know me!")}>
        {headText}
    </button>
    </main>

    <section ref={next}>
    </section>
    </>

)};

export default Intro;