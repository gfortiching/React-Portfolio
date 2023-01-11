import {React, useRef } from 'react';
import AOS from "aos";
import "./CSS/Projects.css";
import RootsAndTools from "./Images/MP1.PNG"
import LittleWizards from "./Images/MP2.png"
import Portfolio from "./Images/Portfolio.PNG"
import Kodego from "./Images/KodeGo.png"
import Arrow from "./Images/arrow.png";
import Extras from './Extras';
import Scroll from '../Functions/Scroll';
import AnimateScroll from "../Functions/AnimateScroll";

function Projects() {

  function Header(props) {
    return (
      <header data-aos="fade-right">
        <h1 className='primary text-center text-sm-start mt-5 mb-3'>{props.header}</h1>
      </header>
    )
  }

  AnimateScroll();
  AOS.init();
  const mp1 = useRef(null);

    return (
    <>
    <main className="portfolioBg main">
    <div className='kodego'><img src={Kodego} alt="" /></div>
      <article className="checkOut">
          <div className='waviy' data-aos="fade-right">
            <p className='primary'>CHECK OUT SOME OF MY KODEGO PROJECTS</p>
          </div>
      </article>
      <div className="keepScrolling" onClick={() => Scroll(mp1)}>
          <img src={Arrow} alt="" className='arrowScrolling'/>
      </div>
    </main>

    <section className="main" ref={mp1}>
      <Header header="Projects"/>
      <div className='portfolioContainer'>
        <div data-aos="fade-right">
          <h2 className='primary text-center text-sm-start mt-4 mb-5'>KodeGo Projects</h2>
        </div>
        <div className='flexContainer d-flex justify-content-center flex-column flex-md-row'>
          <article className="project" data-aos="zoom-in">
              <div className="projectImg">
                <a href='https://rootsandtools.netlify.app/index.html' target="blank">
                  <img src={RootsAndTools} alt="" loading="lazy"/>
                </a>
              </div>
              <div className="projectText">
                <h3 className='mb-4 primary'>Mini Project 1</h3>
                <h4 className='mb-3 primary'>Roots and Tools Essentials</h4>
                <h5>#HTML  #CSS #Bootstrap #ECommerce</h5>
              </div>
          </article>
          <article className="project" data-aos="zoom-in">
              <div className="projectImg">
                <a href='https://little-wizards.netlify.app/index.html' target="blank">
                  <img src={LittleWizards} alt="" loading="lazy"/>
                </a>
              </div>
              <div className="projectText">
                <h3 className='mb-4 primary'>Mini Project 2</h3>
                <h4 className='mb-3 primary'>Little Wizards</h4>
                <h5>#HTML #CSS #Bootstrap #JavaScript #ELearning</h5>
              </div>
          </article>
        </div>
        <div className='flexContainer d-flex justify-content-center flex-column flex-md-row' data-aos="zoom-in">
          <article className="project" data-aos="zoom-in">
              <div className="projectImg">
                <a href='https://rootsandtools.netlify.app/index.html' target="blank">
                  <img src={RootsAndTools} alt="" loading="lazy"/>
                </a>
              </div>
              <div className="projectText">
                <h3 className='mb-4 primary'>Capstone</h3>
                <h4 className='mb-3 primary'>Project Title</h4>
                <h5>#PHP #HTML #CSS #Bootstrap.</h5>
              </div>
          </article>
          <article className="project" data-aos="zoom-in">
              <div className="projectImg">
                <a href='https://gfortiching.github.io/React-Portfolio/' target="blank">
                  <img src={Portfolio} alt="" loading="lazy"/>
                </a>
              </div>
              <div className="projectText">
                <h3 className='mb-4 primary'>Portfolio</h3>
                <h4 className='mb-3 primary'>Gabriel</h4>
                <h5>#React JS #CSS #Bootstrap</h5>
              </div>
          </article>
        </div>
        <h3 className='primary mt-5'>More Projects Soon...</h3>
      </div>
    </section>
    
    <Extras />
    </>
)
}

export default Projects;