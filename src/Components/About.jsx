import { useRef } from 'react';
import React from "react";
import Portrait from "./Images/meBlack.jpg"
import "../Functions/AnimateScroll";
import "./CSS/About.css"
import "../Functions/AnimateScroll";
import Coursera from "./Images/Coursera.png"
import FreeCodeCamp from "./Images/fCC.png"

function AboutMe() {

  function Header(props) {
    return (
      <header data-aos="fade-right">
        <h1 className='primary text-center text-sm-start mt-5 mb-3'>{props.header}</h1>
      </header>
    )
  }

    const details = useRef(null);

    return (
    <>
    <main className="aboutContainer">
    <img className='blackPortrait' src={Portrait} alt='' data-aos="fade-left" />
      <section className="header main">
        <Header header="About Me"/>
        <div className="lato"  data-aos="fade-up">
          <span>
            <h1 className='mt-5'>G'Day!<img src='https://cdn-icons-png.flaticon.com/512/2121/2121101.png' alt="Code" className='icons' /></h1>
            <h1 className='mt-3'>I'm Jose Gabriel F. Fabileña.</h1>
          </span>
        </div>
      </section>

      <section className="aboutContainer">
      <article className='about-text-container' data-aos="fade-right">
        <p className='mb-5 primary'>Overview <img src='https://cdn-icons-png.flaticon.com/512/7756/7756168.png' alt="Code" className='icons' /></p>
        <span className='about-text secondary'>
            Pursuing Web Development <img src='https://cdn-icons-png.flaticon.com/512/3308/3308395.png' alt="Code" className='icons' /> as a career shifter,<br /> my next goal is <em >to obtain a Junior Web Developer <img src='https://cdn-icons-png.flaticon.com/512/3242/3242313.png' alt="Code" className='icons' /> position</em> that assists in building websites, apps or softwares <img src='https://cdn-icons-png.flaticon.com/512/9307/9307617.png' alt="Code" className='icons' />.
            <br />
            <br /> 
            I am excited to develop my skills and discover my potential while working with a team of experts and professionals <img src='https://cdn-icons-png.flaticon.com/512/8955/8955033.png' alt="Code" className='icons' />.
        </span>
        <br /><br />
        <p className='mt-5 mb-5 primary'>Web Development Journey <img src='https://cdn-icons-png.flaticon.com/512/3059/3059997.png' alt="Code" className='icons' /></p>
        <span className='about-text secondary'>
            I started learning Web Development last August 2022. I first practiced at FreeCodeCamp.org, where I started learning how to code using HTML <img src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png' alt="Code" className='icons' /> and CSS <img src='https://cdn-icons-png.flaticon.com/512/732/732190.png' alt="Code" className='icons' />. 
            <br />
            <br />  
            My interests in Cryptocurrencies, NFTs, Trading and Financial Technology led me to start learning how to code.
            <br />
            <br />
            I realized I was coding everyday, and I thought it was fun.
        </span>
      </article>
    </section>
    </main>
    


    <main ref={details} className="main">
      <article className="details">
        <h1 className="primary" data-aos="fade-right">Education</h1>
        <div className="text summary" data-aos="fade-up">
          <h3 className="secondary"><b>Kinder and Elementary</b></h3>
          <h4 className="secondary"><em>St. Paul University Dumaguete</em></h4>
          <p className="secondary">June 2003 - March 2011 </p>
        </div>
        <div className="text summary" data-aos="fade-up">
          <h3 className="secondary"><b>High School</b></h3>
          <h4 className="secondary"><em>Sibulan Science High School</em></h4>
          <p className="secondary">June 2011 - March 2015 </p>
        </div>
        <div className="text summary" data-aos="fade-up">
          <h3 className="secondary"><b>Bachelor of Science in Mathematics</b></h3>
          <h4 className="secondary"><em>Silliman University, Dumaguete</em></h4>
          <p className="secondary">June 2015 - March 2020 </p>
        </div>
      </article>      
      
      <article className="details">
        <h1 className="primary" data-aos="fade-right">Work<br />Experiences</h1>
        <div className="text summary" data-aos="fade-up">
          <h4 className="secondary"><em><b>ESL Teacher</b></em></h4>
          <h4 className="secondary"><em>Inspiro, Relia Inc. Dumaguete Site</em></h4>
          <p className="secondary">April 2019 - June 2019 </p>
          <p className="secondary">June 2020 - March 2021 </p>
        </div>

        <div className="text summary" data-aos="fade-up">
          <h4 className="secondary"><b>Financial Advisor</b></h4>
          <h4 className="secondary"><em>The Insular Life Assurance Co Ltd.</em></h4>
          <p className="secondary">August 2020 - December 2022 </p>
        </div>
      </article>
      <article className="details">
        <h1 className="primary" data-aos="fade-right">Bootcamps</h1>
        <div className="text summary" data-aos="fade-up">
          <h4 className="secondary"><b>Full-Stack Web Development</b></h4>
          <h4 className="secondary"><em>KodeGo</em></h4>
          <p className="secondary">September 30 2022 - Present </p>
        </div>
      </article>

      <article className="details">
        <h1 className="primary" data-aos="fade-right">Courses</h1>
        <div className="summary">
          <div className="courses" data-aos="fade-up">
            <a href="https://www.coursera.org/learn/project-management-foundations" target="blank">
              <p>Google Project Management</p>
            </a>
            <img src={Coursera} alt="" />
          </div>
          <div className="courses" data-aos="fade-up">
            <a href="https://www.coursera.org/learn/foundations-user-experience-design" target="blank">
              <p>Google UX Design</p>
            </a>
           <img src={Coursera} alt="" />
          </div>
          <div className="courses" data-aos="fade-up">
            <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/" target="blank">
              <p>(New) Responsive Web Design</p>
            </a>
            <img src={FreeCodeCamp} alt="" />
          </div>
          <div className="courses" data-aos="fade-up">
            <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="blank">
              <p>JavaScript Algorithms and Data Structures</p>
            </a>
            <img src={FreeCodeCamp} alt="" />
          </div>
          <div className="courses" data-aos="fade-up">
            <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/" target="blank">
              <p>Front End Development Libraries</p>
            </a>
            <img src={FreeCodeCamp} alt="" />
          </div>
        </div>
      </article>

      <article className="details">
        <h1 className="primary" data-aos="fade-right">Technical <br />Skills</h1>
        <div className="summary">
          <div className="skill">
              <span data-aos="fade-up">
                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
                <p>HTML</p>
              </span> 
              <span data-aos="fade-up">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
                <p>CSS</p>
              </span>
              <span data-aos="fade-up">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="" />
                <p>Bootstrap</p>
              </span>
              <span data-aos="fade-up">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
                <p>JavaScript</p>
              </span>
              <span data-aos="fade-up">
                <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="" />
                <p>React JS</p>
              </span>
              <span data-aos="fade-up">
                <img src="https://www.php.net//images/logos/new-php-logo.svg" alt="" />
                <p>PHP</p>
              </span>
          </div>
        </div>
      </article>
    </main>
    </>
)
}

export default AboutMe;