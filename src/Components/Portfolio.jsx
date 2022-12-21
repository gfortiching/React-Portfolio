import { useRef } from 'react';
import Arrow from "./Images/arrow.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "./CSS/Portfolio.css";
import MP1 from "./MP1";
import MP2 from "./MP2";


function Portfolio() {

  useEffect(() => {
    AOS.init({duration: 3000});
  }, []);

  const mp1 = useRef(null);
  const mp2 = useRef(null);
  const about = useRef(null);
  const scrollToSection = (elementRef) => {
      window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
      });
  };

    return (
    <>
    <section className="portfolioBg">
      <article className="checkOut">
          <div data-aos="fade-right">
            <h1>CHECK OUT MY SOME OF MY KODEGO PROJECTS</h1>
          </div>
      </article>
      <div className="keepScrolling" onClick={() => scrollToSection(mp1)}>
          <img src={Arrow} alt="" className='arrowScrolling'/>
      </div>
    </section>

    <section className="portfolioBg" ref={mp1}>
      <div className="cards" data-aos="fade-left">
        <MP1 />
      </div>
      <div className="keepScrolling" onClick={() => scrollToSection(mp2)}>
        <img src={Arrow} alt="" className='arrowScrolling'/>
      </div>
    </section>

    <section className="portfolioBg" ref={mp2}>
      <div className="cards">
        <MP2 />
      </div>
      <div className="keepScrolling" onClick={() => scrollToSection(about)}>
        <img src={Arrow} alt="" className='arrowScrolling'/>
      </div>
    </section>
    <section ref={about}></section>
    </>
)
}

export default Portfolio;