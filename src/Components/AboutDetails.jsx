import React from "react";
import "../Functions/AnimateScroll";
import Coursera from "./Images/Coursera.png"
import FreeCodeCamp from "./Images/fCC.png"

function AboutDetails() {

  return(
    <>
    <section className="detailsContainer">

      <header className="header">
        <h1 className="arvo text-start text-sm-center" data-aos="fade-right">
          My name is <br />
          <span>Jose Gabriel F. Fabileña</span>
          <br />
          <br />
          <span>
            <h3 className="arvo mt-5" data-aos="fade-right">My goal is to obtain an Associate or a Junior Web Developer position that assists and contributes in building websites for a better user experience.</h3>
          </span>
          <span>
            <h3 className="arvo mt-5" data-aos="fade-right">I am excited learn new technologies, develop my skills and gather experience while working with a team of experts and professionals.</h3>
          </span>
          <span>
            <h3 className="arvo mt-5" data-aos="fade-right">My daily target is to become a better Web Developer and to contribute to any company that I work for.</h3>
          </span>
        </h1>
      </header>

      <article className="details">
        <h2 className="arvo" data-aos="fade-right">Education</h2>
        <div className="text summary" data-aos="fade-up">
          <h3 className="lato"><b>Kinder and Elementary</b></h3>
          <h4 className="lato"><em>St. Paul University Dumaguete</em></h4>
          <br />
          <p className="lato">June 2003 - March 2011 </p>
        </div>
        <div className="text summary" data-aos="fade-up">
          <h3 className="lato"><b>High School</b></h3>
          <h4 className="lato"><em>Sibulan Science High School</em></h4>
          <br />
          <p className="lato">June 2011 - March 2015 </p>
        </div>
        <div className="text summary" data-aos="fade-up">
          <h3 className="lato"><b>Bachelor of Science in Mathematics</b></h3>
          <h4 className="lato"><em>Silliman University, Dumaguete</em></h4>
          <br />
          <p className="lato">June 2015 - March 2020 </p>
        </div>
      </article>

      <article className="details">
        <h2 className="arvo" data-aos="fade-right">Work<br />Experiences</h2>
        <div className="text summary" data-aos="fade-up">
          <h4 className="lato"><em><b>ESL Teacher</b></em></h4>
          <h4 className="lato"><em>Inspiro, Relia Inc. Dumaguete Site</em></h4>
          <br />
          <p className="lato">April 2019 - June 2019 </p>
          <p className="lato">June 2020 - March 2021 </p>
        </div>

        <div className="text summary" data-aos="fade-up">
          <h4 className="lato"><b>Financial Advisor</b></h4>
          <h4 className="lato"><em>The Insular Life Assurance Co Ltd.</em></h4>
          <br />
          <p className="lato">August 2020 - December 2022 </p>
        </div>
      </article>

      <article className="details">
        <h2 className="arvo" data-aos="fade-right">Bootcamps</h2>
        <div className="text summary" data-aos="fade-up">
          <h4 className="lato"><b>Full-Stack Web Development</b></h4>
          <h4 className="lato"><em>KodeGo</em></h4>
          <br />
          <p className="lato">September 30 2022 - Present </p>
        </div>
      </article>

      <article className="details">
        <h2 className="arvo" data-aos="fade-right">Courses</h2>
        <div className="summary">
          <div className="box">
              <span data-aos="fade-up">
                <a href="https://www.coursera.org/learn/react-basics" target="blank">
                  <h4>Foundations of Project Management</h4>
                </a>
                <img src={Coursera} alt="" />
              </span>
              <span data-aos="fade-up">
                <a href="https://www.coursera.org/learn/foundations-user-experience-design" target="blank">
                  <h4>Foundations of User Experience (UX) Design</h4>
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
        <h2 className="arvo" data-aos="fade-right">Technical <br />Skills</h2>
        <div className="summary">
          <div className="box skill">
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