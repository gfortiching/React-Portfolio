import { useRef } from 'react';
import AOS from "aos";

import React from "react";
import "./CSS/Projects.css";
import "./CSS/Mini Project.css"
import RootsAndTools from "./Images/MP1.PNG"
import LittleWizards from "./Images/MP2.PNG"
import Kodego from "./Images/KodeGo.png"
import Arrow from "./Images/arrow.png";
import Extras from './Extras';
import Scroll from '../Functions/Scroll';
import AnimateScroll from "../Functions/AnimateScroll";

function Projects() {

  AnimateScroll();
  AOS.init();
  const mp1 = useRef(null);

    return (
    <>
    <main className="portfolioBg main">
    <div className='kodego'><img src={Kodego} alt="" /></div>
      <article className="checkOut">
          <div data-aos="fade-right">
            <h1 className='arvo'>CHECK OUT SOME OF MY KODEGO PROJECTS</h1>
          </div>
      </article>
      <div className="keepScrolling" onClick={() => Scroll(mp1)}>
          <img src={Arrow} alt="" className='arrowScrolling'/>
      </div>
    </main>

    <section className="main" ref={mp1}>
    <header data-aos="fade-right"><h1 className='arvo text-center text-sm-start mt-5 mb-5'>Projects</h1></header>
      <div className='portfolioContainer'>
        <div data-aos="fade-right">
          <h1 className='arvo text-center text-sm-start mt-4 mb-4'>KodeGo Mini Projects</h1>
        </div>
        <div className='flexContainer d-flex justify-content-center flex-column flex-md-row' data-aos="zoom-in">
          <article className="miniProject">
              <div className="miniProjectImg">
                <a href='https://rootsandtools.netlify.app/index.html' target="blank">
                  <img src={RootsAndTools} alt="" loading="lazy"/>
                </a>
              </div>
              <div className="miniProjectText">
                <h2 className='mb-4 lato'>Mini Project 1</h2>
                <h1 className='mb-3 arvo'>Roots and Tools Essentials</h1>
                <p>Roots and Tools Essentials was built using HTML, CSS and Bootstrap. My inspiration for this project and niche is my hobby for succulents.</p>
              </div>
          </article>
          <article className="miniProject">
              <div className="miniProjectImg">
                <a href='https://little-wizards.netlify.app/index.html' target="blank">
                  <img src={LittleWizards} alt="" loading="lazy"/>
                </a>
              </div>
              <div className="miniProjectText2">
                <h2 className='mb-4 lato'>Mini Project 2</h2>
                <h1 className='mb-3 arvo'>Little Wizards</h1>
                <p>Little Wizards was built using HTML, CSS, Bootstrap and JavaScript. Our goal for this KodeGo Project is to create an eLearning website using HTML, CSS, Bootstrap and JavaScript.</p>
              </div>
          </article>
        </div>
      </div>
    </section>
    
    <Extras />
    </>
)
}

export default Projects;