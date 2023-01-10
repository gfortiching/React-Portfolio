import {React, useRef } from 'react';
import AOS from "aos";
import "./CSS/Projects.css";
import "./CSS/Mini Project.css"
import RootsAndTools from "./Images/MP1.PNG"
import LittleWizards from "./Images/MP2.png"
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
          <div className='waviy' data-aos="fade-right">
            <span className='arvo'>CHECK OUT SOME OF MY KODEGO PROJECTS</span>
          </div>
      </article>
      <div className="keepScrolling" onClick={() => Scroll(mp1)}>
          <img src={Arrow} alt="" className='arrowScrolling'/>
      </div>
    </main>

    <section className="main" ref={mp1}>
      <header data-aos="fade-right">
        <h1 className='arvo text-center text-sm-start mt-5 mb-5'>PROJECTS</h1>
      </header>
      <div className='portfolioContainer'>
        <div data-aos="fade-right">
          <h2 className='arvo text-center text-sm-start mt-4 mb-5'>KodeGo Projects</h2>
        </div>
        <div className='flexContainer d-flex justify-content-center flex-column flex-md-row' data-aos="zoom-in">
          <article className="project">
              <div className="projectImg">
                <a href='https://rootsandtools.netlify.app/index.html' target="blank">
                  <img src={RootsAndTools} alt="" loading="lazy"/>
                </a>
              </div>
              <div className="projectText">
                <h3 className='mb-4 arvo'>Mini Project 1</h3>
                <h4 className='mb-3 arvo'>Roots and Tools Essentials</h4>
                <h5 style={{color: "#00F587"}}>#HTML  #CSS #Bootstrap #ECommerce</h5>
              </div>
          </article>
          <article className="project">
              <div className="projectImg">
                <a href='https://little-wizards.netlify.app/index.html' target="blank">
                  <img src={LittleWizards} alt="" loading="lazy"/>
                </a>
              </div>
              <div className="projectText">
                <h3 className='mb-4 arvo'>Mini Project 2</h3>
                <h4 className='mb-3 arvo'>Little Wizards</h4>
                <h5 style={{color: "#833ABA"}}>#HTML #CSS #Bootstrap #JavaScript #ELearning</h5>
              </div>
          </article>
        </div>
        <div className='flexContainer d-flex justify-content-center flex-column flex-md-row' data-aos="zoom-in">
          <article className="project">
              <div className="projectImg">
                <a href='https://rootsandtools.netlify.app/index.html' target="blank">
                  <img src={RootsAndTools} alt="" loading="lazy"/>
                </a>
              </div>
              <div className="projectText">
                <h3 className='mb-4 arvo'>Capstone</h3>
                <h4 className='mb-3 arvo'>Project Title</h4>
                <h5 style={{color: "#833ABA"}}>#PHP #HTML #CSS #Bootstrap.</h5>
              </div>
          </article>
        </div>
        <h3 className='arvo'>More Projects Soon...</h3>
      </div>
    </section>
    
    <Extras />
    </>
)
}

export default Projects;