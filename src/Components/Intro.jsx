import { useRef, useState } from 'react'
import "./CSS/Intro.css"
import Me from './Images/meTransparent.png'
import Scroll from "../Functions/Scroll";


function Intro() {

    const next = useRef(null);


    function GetToKnow() {

        const [headText, setHeadText] = useState("Get to know me!");
    
        return (
            <button className="getToKnow secondary" onClick={() => Scroll(next)} onMouseOver={() => setHeadText("Click to scroll down")} onMouseLeave={() => setHeadText("Get to know me!")}>
            {headText}
        </button>
        )
    }

    function Skills() {

        return (
        <>
        <section className="skills">
            <h1>Full-Stack Web Developer</h1>
            <h1>HTML</h1>
            <h1>CSS</h1>
            <h1>BOOTSTRAP</h1>
            <h1>JavaScript</h1>
            <h1>REACT JS</h1>
            <h1>PHP</h1>
        </section>
        </>
    )
    }

    return (
    <>
    <main className="introMain">
    <Skills />
    <section className="intro">
        <div className="left">
            <div className="left-wrapper">
                <h1 className="greet primary">Hey!
                <span><img src="https://cdn-icons-png.flaticon.com/512/3898/3898709.png" className="handWave" alt="" /></span></h1>
                <span><h1 className="greet primary">Nice to meet you!</h1></span>
                <span><h1 className="name primary">I'm Gabriel and I'm a Full-Stack Web Developer.</h1></span>
            </div>
        </div>
        <div className="right">
            <img src={Me} alt="" className="myImg" />
        </div>
        <GetToKnow />
    </section>
    </main>
    <section ref={next}></section>
    </>

)};

export default Intro;