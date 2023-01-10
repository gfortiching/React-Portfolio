import { useRef } from 'react';
import React from "react";
import Portrait from "./Images/meBlack.jpg"
import AboutDetails from "./AboutDetails";
import "../Functions/AnimateScroll";
import "./CSS/About.css"

function AboutMe() {

    const details = useRef(null);

    return (
    <>
    <main className="aboutContainer">
      <section className="header main">
        <h1 className='arvo text-center text-sm-start mt-5 mb-5' data-aos="fade-right">ABOUT ME</h1>
        <div className="lato d-none d-lg-flex flex-column"  data-aos="fade-up">
          <span>
            <h1 className='mt-5'>G'Day!<img src='https://cdn-icons-png.flaticon.com/512/2121/2121101.png' alt="Code" className='icons' /></h1>
            <h1 className='mt-3'>I'm Jose Gabriel F. Fabileña.</h1>
          </span>
        </div>
      </section>
      <img className='blackPortrait' src={Portrait} alt='' data-aos="fade-left" />
    </main>
    
    <main className="aboutContainer">
      <section className="header main" data-aos="fade-right">
      <span>
            <h3 className="mb-3">As a career shifter pursuing <u>Web Development</u> <img src='https://cdn-icons-png.flaticon.com/512/3308/3308395.png' alt="Code" className='icons' />, my goal is <em >to obtain a <u>Junior Web Developer</u> <img src='https://cdn-icons-png.flaticon.com/512/1005/1005141.png' alt="Code" className='icons' /> position</em> that assists in building <img src='https://cdn-icons-png.flaticon.com/512/2238/2238255.png' alt="Code" className='icons' /> websites, apps or softwares for a better user experience.</h3>
            <h3>I am excited to develop my skills and discover my potential while working with a team of experts and professionals.</h3>
          </span>
      </section>
    </main>
    <section ref={details}><AboutDetails /></section>
    </>
)
}

export default AboutMe;