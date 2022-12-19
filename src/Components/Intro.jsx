import "./CSS/Intro.css"
import Me from './Images/meTransparent.png'

import { useRef, useState } from 'react'

function Intro() {

    const next = useRef(null);
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    const [headText, setHeadText] = useState("Get to know me!");

    return (
    <>
    <main class="introMain">
    <section className="intro">
        <div className="left">
            <div className="left-wrapper">
                <h1 className="greet">Hey!
                <span><img src="https://cdn-icons-png.flaticon.com/512/3898/3898709.png" className="handWave" alt="" /></span></h1>
                <span><h1 className="greet">Nice to meet you!</h1></span>
                <span><h1 className="name">I'm Gabriel and I'm a Full-Stack Web Developer.</h1></span>
            </div>
        </div>

        <div className="right">
            <img src={Me} alt="" className="myImg" />
        </div>
    </section>
    <button className="getToKnow" onClick={() => scrollToSection(next)} onMouseOver={() => setHeadText("Click to scroll down")} onMouseLeave={() => setHeadText("Get to know me!")}>
        {headText}
    </button>
    </main>

    <section ref={next}>
    </section>
    </>

)};

export default Intro;