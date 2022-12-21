// import { useRef } from 'react'
// import Arrow from "./Images/arrow.png"
// import AboutOne from './About One'
import "./CSS/About.css"
import Portrait from "./Images/meBlack.jpg"

export default function AboutMe() {

    // const next = useRef(null);
    // const scrollToSection = (elementRef) => {
    //     window.scrollTo({
    //         top: elementRef.current.offsetTop,
    //         behavior: "smooth",
    //     });
    // };

    return (
    <>
    <section className="aboutMe">
        <div class="waviy">
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
            <span style={{visibility: "hidden"}}>T</span>
            <span>M</span>
            <span>E</span>
        </div>
            <img className='blackPortrait' src={Portrait} alt='' />
        {/* <div className="keepScrolling" onClick={() => scrollToSection(next)}>
            <img src={Arrow} alt="" className='arrowScrolling'/>
        </div> */}
    </section>
    {/* <section ref={next}><AboutOne /></section> */}
    </>
)
}