import "./CSS/Education.css"
import React, { useEffect } from "react";
import AOS from "aos";

function Education() {

  AOS.init();

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return(
    <>
    <section className="aboutSections">
      <header className="details">
        <h1>My name is <span>Jose Gabriel F. Fabileña</span></h1>
      </header>
      <article className="details">
        <h1 data-aos="fade-right">Education</h1>
        <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis veniam eos eum magni distinctio totam, ea molestias consectetur repudiandae incidunt error natus minus adipisci praesentium dolor sapiente, facilis dolore.</p></div>
        <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis veniam eos eum magni distinctio totam, ea molestias consectetur repudiandae incidunt error natus minus adipisci praesentium dolor sapiente, facilis dolore.</p></div>
      </article>
      <article className="details">
        <h1 data-aos="fade-right">Certification</h1>
        <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis veniam eos eum magni distinctio totam, ea molestias consectetur repudiandae incidunt error natus minus adipisci praesentium dolor sapiente, facilis dolore.</p></div>
        <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis veniam eos eum magni distinctio totam, ea molestias consectetur repudiandae incidunt error natus minus adipisci praesentium dolor sapiente, facilis dolore.</p></div>
      </article>
      <article className="details">
        <h1 data-aos="fade-right">Experiences</h1>
        <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis veniam eos eum magni distinctio totam, ea molestias consectetur repudiandae incidunt error natus minus adipisci praesentium dolor sapiente, facilis dolore.</p></div>
        <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis veniam eos eum magni distinctio totam, ea molestias consectetur repudiandae incidunt error natus minus adipisci praesentium dolor sapiente, facilis dolore.</p></div>
      </article>
      <article className="details">
        <h1 data-aos="fade-right">Courses</h1>
        <div className="courses">
          <h4 className="text-white">Here are some courses I am currently learning</h4>
        </div>
        <div className="box">
          <div></div>
        </div>
      </article>
    </section>
    </>
  )
}

export default Education;