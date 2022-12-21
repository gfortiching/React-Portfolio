import "./CSS/Contact.css"
// import { useRef } from 'react'
// import Arrow from "./Images/arrow.png"

export default function Contact() {

    // const next = useRef(null);
    // const scrollToSection = (elementRef) => {
    //     window.scrollTo({
    //         top: elementRef.current.offsetTop,
    //         behavior: "smooth",
    //     });
    // };

    return (
    <>
    <section className="contactBg">
        <div>
            <h1>Contact</h1>
        </div>
        {/* <div className="keepScrolling" onClick={() => scrollToSection(next)}>
            <img src={Arrow} alt="" className='arrowScrolling'/>
        </div> */}
    </section>
    {/* <section ref={next}></section> */}
    </>
)
}