import { useRef } from 'react'
import Arrow from "./Images/arrow.png"

export default function AboutOne() {

    const next = useRef(null);
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    return (
    <>
    <section className='aboutMe'>
        <div className="aboutMe-div">
            <div className="aboutMe-wrapper">
                <h3 className="aboutMeText">Hello! I'm Jose Gabriel Fortich Fabileña.</h3>
                <h4 className="aboutMeText">I graduated with a degree of <em>Bachelor of Science in Mathematics</em> at <em>Silliman University</em>, Dumaguete last March 2020.</h4>
            </div>
        </div>
    </section>  
    <section className="aboutOne">
        <div className="title">
            <div className="title-wrapper">
                <h1 className="title-item">Web Developer</h1>
                <h1 className="title-item">Cryptocurrency Trader</h1>
                <h1 className="title-item">Financial Advisor</h1>
            </div>
        </div>
        <div className="keepScrolling" onClick={() => scrollToSection(next)}>
            <img src={Arrow} alt="" className='arrowScrolling'/>
        </div>
    </section>
    <section ref={next}></section>
    </>
)
}