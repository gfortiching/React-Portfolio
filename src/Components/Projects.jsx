import { useRef } from 'react';
import React from "react";
import "./CSS/Projects.css";
import "./CSS/Mini Project.css"
import RootsAndTools from "./Images/MP1.PNG"
import LittleWizards from "./Images/MP2.PNG"
import Kodego from "./Images/KodeGo.png"
import Arrow from "./Images/arrow.png";
import Extras from './Extras';
import Scroll from '../Functions/Scroll';
import "../Functions/AnimateScroll";  

function Projects() {

  const mp1 = useRef(null);

    return (
    <>
    <section className="portfolioBg main">
    <div className='kodego'><img src={Kodego} alt="" /></div>
      <article className="checkOut">
          <div data-aos="fade-right">
            <h1 className='arvo'>CHECK OUT SOME OF MY KODEGO PROJECTS</h1>
          </div>
      </article>
      <div className="keepScrolling" onClick={() => Scroll(mp1)}>
          <img src={Arrow} alt="" className='arrowScrolling'/>
      </div>
    </section>

    <section className="main" ref={mp1}>
      <div className='portfolioContainer'>
        <header data-aos="fade-right"><h1 className='arvo text-center text-sm-start'>Projects</h1></header>
        <div className='flexContainer d-flex justify-content-center flex-column flex-md-row' data-aos="zoom-in">
          <article className="miniProject">
              <div className="miniProjectImg">
                  <img src={RootsAndTools} alt="" loading="lazy"/>
              </div>
              <div className="miniProjectText">
                <h4 className='text-white mb-4 lato'><em>Mini Project 1</em></h4>
                <h1 className='mb-3 arvo'>Roots and Tools Essentials</h1>
                <p>Roots and Tools Essentials was built using HTML, CSS and Bootstrap. My inspiration for this project and niche is my hobby for succulents.</p>
              </div>
          </article>
          <article className="miniProject">
              <div className="miniProjectImg">
                  <img src={LittleWizards} alt="" loading="lazy"/>
              </div>
              <div className="miniProjectText2">
                <h4 className='text-white mb-4 lato'><em>Mini Project 2</em></h4>
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