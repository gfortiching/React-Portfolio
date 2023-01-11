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
      <section className="header main">
        <Header header="About Me"/>
        <div className="lato d-none d-lg-flex flex-column"  data-aos="fade-up">
          <span>
            <h1 className='mt-5'>G'Day!<img src='https://cdn-icons-png.flaticon.com/512/2121/2121101.png' alt="Code" className='icons' /></h1>
            <h1 className='mt-3'>I'm Jose Gabriel F. Fabileña.</h1>
          </span>
        </div>
      </section>
      <img className='blackPortrait' src={Portrait} alt='' data-aos="fade-left" />
    </main>
    
    <div className="aboutContainer">
      <section className="header main" data-aos="fade-right">
      <span>
            <h3 className="mb-3">As a career shifter pursuing <u>Web Development</u> <img src='https://cdn-icons-png.flaticon.com/512/3308/3308395.png' alt="Code" className='icons' />, my goal is <em >to obtain a <u>Junior Web Developer</u> <img src='https://cdn-icons-png.flaticon.com/512/1005/1005141.png' alt="Code" className='icons' /> position</em> that assists in building <img src='https://cdn-icons-png.flaticon.com/512/2238/2238255.png' alt="Code" className='icons' /> websites, apps or softwares.</h3>
            <h3>I am excited to develop my skills and discover my potential while working with a team of experts and professionals.</h3>
          </span>
      </section>
    </div>

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
              <h4>Google Project Management</h4>
            </a>
            <img src={Coursera} alt="" />
          </div>
          <div className="courses" data-aos="fade-up">
            <a href="https://www.coursera.org/learn/foundations-user-experience-design" target="blank">
              <h4>Google UX Design</h4>
            </a>
           <img src={Coursera} alt="" />
          </div>
          <div className="courses" data-aos="fade-up">
            <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/" target="blank">
              <h4>(New) Responsive Web Design</h4>
            </a>
            <img src={FreeCodeCamp} alt="" />
          </div>
          <div className="courses" data-aos="fade-up">
            <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="blank">
              <h4>JavaScript Algorithms and Data Structures</h4>
            </a>
            <img src={FreeCodeCamp} alt="" />
          </div>
          <div className="courses" data-aos="fade-up">
            <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/" target="blank">
              <h4>Front End Development Libraries</h4>
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