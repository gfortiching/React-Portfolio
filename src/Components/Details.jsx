import "./CSS/Details.css"
import React from "react";
import "../Functions/AnimateScroll";
import Coursera from "./Images/Coursera.png"
import FreeCodeCamp from "./Images/fCC.png"

function Details() {

  return(
    <>
    <section className="aboutSections">
      <header className="header">
        <h2 className="arvo" data-aos="fade-right">My name is <br /><br /><span>Jose Gabriel F. Fabileña</span></h2>
      </header>
      <article className="details">
        <h2 className="arvo" data-aos="fade-right">Education</h2>
        <div className="text schoolSummary">
          <h3 className="lato"><b>Kinder and Elementary</b></h3>
          <h4 className="lato"><em>St. Paul University Dumaguete</em></h4>
          <br />
          <p className="lato">June 2003 - March 2011 </p>
        </div>
        <div className="text schoolSummary">
          <h3 className="lato"><b>High School</b></h3>
          <h4 className="lato"><em>Sibulan Science High School</em></h4>
          <br />
          <p className="lato">June 2011 - March 2015 </p>
        </div>
        <div className="text schoolSummary">
          <h3 className="lato"><b>Bachelor of Science in Mathematics</b></h3>
          <h4 className="lato"><em>Silliman University, Dumaguete</em></h4>
          <br />
          <p className="lato">June 2015 - March 2020 </p>
        </div>
        {/* <div className="text"><p className="lato">In 2015, I entered <strong>Silliman University, Dumaguete</strong> and enrolled in Bachelor of Science in Accountancy. <br /><br />However, due to a failing final grade in one of my major subjects accompanied by struggles keeping up with the expenses for the course. I decided to shift to BS Mathematics Program.</p></div>
        <div className="text"><p className="lato">Summer after my first year, I shifted to Mathematics and took prerequisite subjects so I could catch up to the second year subjects. </p></div>
        <div className="text"><p className="lato">In 2017, I became a <strong>Student Assistant</strong> where I'd work in the Silliman University Library on my free time and on weekends.</p></div> */}

        {/* <div className="text"><p className="lato">In 2020, I graduated with a <strong>Bachelor's Degree in Mathematics.</strong></p></div> */}
      </article>
      <article className="details">
        <h2 className="arvo" data-aos="fade-right">Work<br />Experiences</h2>
        <div className="text experienceSummary">
          <h4 className="lato"><em><b>ESL Teacher</b></em></h4>
          <h4 className="lato"><em>Inspiro, Relia Inc. Dumaguete Site</em></h4>
          <br />
          <p className="lato">April 2019 - June 2019 </p>
          <p className="lato">June 2020 - March 2021 </p>
        </div>
        {/* <div className="text"><p className="lato">I had my first work experience in <strong>Inspiro Relia, Inc. Dumaguete Site</strong> as an <strong>ESL Teacher</strong> last April of 2019. Our clients were Japanese and our students were Japanese kids.</p></div>
        <div className="text"><p className="lato">It was a new account and we were part of the Pioneering Team. The contract lasted for 3 months which was a fit for my schedule since I had to go back to school after summer.</p></div>
        <div className="text"><p className="lato">In June 2020, after graduating, and months after the start of the lockdown, I applied again in Inspiro and continued to gather more experience as an ESL Teacher for Japanese kids and students.</p></div>
        <div className="text"><p className="lato">I learned a lot teaching Japanese kids, however, in March 2021, the clients did not extend the contract and the account lasted for only 2 years.</p></div> */}
        <div className="text experienceSummary">
          <h4 className="lato"><b>Financial Advisor</b></h4>
          <h4 className="lato"><em>The Insular Life Assurance Co Ltd.</em></h4>
          <br />
          <p className="lato">August 2020 - December 2022 </p>
        </div>
      </article>
      <article className="details">
        <h2 className="arvo" data-aos="fade-right">Certificates</h2>
        <div className="text"><p className="lato">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis veniam eos eum magni distinctio totam, ea molestias consectetur repudiandae incidunt error natus minus adipisci praesentium dolor sapiente, facilis dolore.</p></div>
        <div className="text"><p className="lato">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis veniam eos eum magni distinctio totam, ea molestias consectetur repudiandae incidunt error natus minus adipisci praesentium dolor sapiente, facilis dolore.</p></div>
      </article>
      <article className="details">
        <h2 className="arvo" data-aos="fade-right">Courses</h2>
        <div className="courses">
          {/* <h2 className="text-white">Courses I am currently studying  </h2> */}
          <div className="box">
            <div className="coursePictures">
              <span>
                <a href="https://www.coursera.org/learn/react-basics" target="blank">
                  <h3>React Basics</h3>
                </a>
                <img src={Coursera} alt="" />
              </span>
              <span>
                <a href="https://www.coursera.org/learn/foundations-user-experience-design" target="blank">
                  <h3>Foundations of User Experience (UX) Design</h3>
                </a>
                <img src={Coursera} alt="" />
              </span>
              <span>
                <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/" target="blank">
                  <h3>(New) Responsive Web Design</h3>
                </a>
                <img src={FreeCodeCamp} alt="" />
              </span>
              <span>
                <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="blank">
                  <h3>JavaScript Algorithms and Data Structures</h3>
                </a>
                <img src={FreeCodeCamp} alt="" />
              </span>
              <span>
                <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/" target="blank">
                  <h3>Front End Development Libraries</h3>
                </a>
                <img src={FreeCodeCamp} alt="" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </section>
    </>
  )
}

export default Details;