import React from "react";
import "../Functions/AnimateScroll";
import Coursera from "./Images/Coursera.png"
import FreeCodeCamp from "./Images/fCC.png"

function AboutDetails() {

  return(
    <>
    <section className="detailsContainer">
      <article className="details">
        <h1 className="arvo" data-aos="fade-right">Education</h1>
        <div className="text summary" data-aos="fade-up">
          <h3 className="lato"><b>Kinder and Elementary</b></h3>
          <h4 className="lato"><em>St. Paul University Dumaguete</em></h4>
          <p className="lato">June 2003 - March 2011 </p>
        </div>
        <div className="text summary" data-aos="fade-up">
          <h3 className="lato"><b>High School</b></h3>
          <h4 className="lato"><em>Sibulan Science High School</em></h4>
          <p className="lato">June 2011 - March 2015 </p>
        </div>
        <div className="text summary" data-aos="fade-up">
          <h3 className="lato"><b>Bachelor of Science in Mathematics</b></h3>
          <h4 className="lato"><em>Silliman University, Dumaguete</em></h4>
          <p className="lato">June 2015 - March 2020 </p>
        </div>
      </article>      
      
      <article className="details">
        <h1 className="arvo" data-aos="fade-right">Work<br />Experiences</h1>
        <div className="text summary" data-aos="fade-up">
          <h4 className="lato"><em><b>ESL Teacher</b></em></h4>
          <h4 className="lato"><em>Inspiro, Relia Inc. Dumaguete Site</em></h4>
          <p className="lato">April 2019 - June 2019 </p>
          <p className="lato">June 2020 - March 2021 </p>
        </div>

        <div className="text summary" data-aos="fade-up">
          <h4 className="lato"><b>Financial Advisor</b></h4>
          <h4 className="lato"><em>The Insular Life Assurance Co Ltd.</em></h4>
          <p className="lato">August 2020 - December 2022 </p>
        </div>
      </article>
      <article className="details">
        <h1 className="arvo" data-aos="fade-right">Bootcamps</h1>
        <div className="text summary" data-aos="fade-up">
          <h4 className="lato"><b>Full-Stack Web Development</b></h4>
          <h4 className="lato"><em>KodeGo</em></h4>
          <p className="lato">September 30 2022 - Present </p>
        </div>
      </article>

      <article className="details">
        <h1 className="arvo" data-aos="fade-right">Courses</h1>
        <div className="summary">
          <div className="box">
              <span data-aos="fade-up">
                <a href="https://www.coursera.org/learn/project-management-foundations" target="blank">
                  <h4>Google Project Management</h4>
                </a>
                <img src={Coursera} alt="" />
              </span>
              <span data-aos="fade-up">
                <a href="https://www.coursera.org/learn/foundations-user-experience-design" target="blank">
                  <h4>Google UX Design</h4>
                </a>
                <img src={Coursera} alt="" />
              </span>
              <span data-aos="fade-up">
                <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/" target="blank">
                  <h4>(New) Responsive Web Design</h4>
                </a>
                <img src={FreeCodeCamp} alt="" />
              </span>
              <span data-aos="fade-up">
                <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="blank">
                  <h4>JavaScript Algorithms and Data Structures</h4>
                </a>
                <img src={FreeCodeCamp} alt="" />
              </span>
              <span data-aos="fade-up">
                <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/" target="blank">
                  <h4>Front End Development Libraries</h4>
                </a>
                <img src={FreeCodeCamp} alt="" />
              </span>
          </div>
        </div>
      </article>

      <article className="details">
        <h1 className="arvo" data-aos="fade-right">Technical <br />Skills</h1>
        <div className="summary">
          <div className="skill">
              <span data-aos="fade-up">
                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
                <h4>HTML</h4>
              </span> 
              <span data-aos="fade-up">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
                <h4>CSS</h4>
              </span>
              <span data-aos="fade-up">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="" />
                <h4>Bootstrap</h4>
              </span>
              <span data-aos="fade-up">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
                <h4>JavaScript</h4>
              </span>
              <span data-aos="fade-up">
                <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="" />
                <h4>React JS</h4>
              </span>
              <span data-aos="fade-up">
                <img src="https://www.php.net//images/logos/new-php-logo.svg" alt="" />
                <h4>PHP</h4>
              </span>
          </div>
        </div>
      </article>
    </section>
    </>
  )
}

export default AboutDetails;