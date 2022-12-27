import { useRef } from 'react';
import Arrow from "./Images/arrow.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "./CSS/Portfolio.css";
import RootsAndTools from "./Images/MP1.PNG"
import LittleWizards from "./Images/MP2.PNG"
import Story from './Story';
import Kodego from "./Images/KodeGo.png"
import "./CSS/Mini Project.css"

function Portfolio() {

  AOS.init();

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  const mp1 = useRef(null);
  const scrollToSection = (elementRef) => {
      window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
      });
  };

    return (
    <>
    <section className="portfolioBg">
    <div className='kodego'><img src={Kodego} alt="" /></div>
      <article className="checkOut">
          <div data-aos="fade-right">
            <h1>CHECK OUT SOME OF MY KODEGO PROJECTS</h1>
          </div>
      </article>
      <div className="keepScrolling" onClick={() => scrollToSection(mp1)}>
          <img src={Arrow} alt="" className='arrowScrolling'/>
      </div>
    </section>

    <section className="portfolioContainer" ref={mp1}>
      <header data-aos="fade-right"><h1 className='text-center text-sm-start'>KodeGo Mini Projects</h1></header>
      <div className='flexContainer d-flex justify-content-center flex-column flex-md-row' data-aos="zoom-in">
        <article className="miniProject">
            <div className="miniProjectImg">
                <img src={RootsAndTools} alt="" loading="lazy"/>
            </div>
            <div className="miniProjectText">
                <h1 className='mb-2'>Roots and Tools Essentials</h1>
                <p>Roots and Tools Essentials was built using HTML, CSS and Bootstrap. My inspiration for this project and niche is my hobby for succulents.</p>
            </div>
        </article>
        <article className="miniProject">
            <div className="miniProjectImg">
                <img src={LittleWizards} alt="" loading="lazy"/>
            </div>
            <div className="miniProjectText2">
                <h1 className='mb-2'>Little Wizards</h1>
                <p>Little Wizards was built using HTML, CSS, Bootstrap and JavaScript. Our goal for this KodeGo Project is to create an eLearning website using HTML, CSS, Bootstrap and JavaScript.</p>
            </div>
        </article>
      </div>
    </section>
    
    <Story />
    </>
)
}

export default Portfolio;