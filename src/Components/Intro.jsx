import "./CSS/Intro.css"
import Me from './Images/meTransparent.png'

import { useRef, useState } from 'react'
import { Link } from "react-router-dom"


function Intro() {

    const next = useRef(null);
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    function CustomLink({ to, children, ...props}) {
        return (
            <Link to={to} {...props}>{children}</Link>
        )
    }

    const [headText, setHeadText] = useState("Get to know me!");

    return (
    <>
    <div>
    <section className="intro">
        <div className="left">
            <div className="left-wrapper">
                <h1 className="greet">Hey!<img src="https://cdn-icons-png.flaticon.com/512/3898/3898709.png" className="handWave" alt="" /></h1>
                <h1 className="greet">Nice to meet you!</h1>
                <h1 className="name">I'm Jose Gabriel Fabileña</h1>
            </div>
        </div>

        <div className="right">
            <div><img src={Me} alt="" className="myImg" /></div>
        </div>
    </section>
    <CustomLink to="/body" className="getToKnow" onClick={() => scrollToSection(next)} onMouseOver={() => setHeadText("Click to scroll down")} onMouseLeave={() => setHeadText("Get to know me!")}>
        {headText}
    </CustomLink>
    
    </div>

    <section ref={next}>
    </section>
    </>

)};

export default Intro;