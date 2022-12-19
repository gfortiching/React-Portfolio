import React from "react";
import Intro from "./Components/Intro"
import AboutMe from "./Components/About Me"
import Portfolio from "./Components/Portfolio"
import Contact from "./Components/Contact"
import Experience from "./Components/Experience"
import { useRef } from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

import "./Components/CSS/App.css"

function App() {

  const intro = useRef(null);
  const about = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);
  const portfolio = useRef(null);
  const scrollToSection = (elementRef) => {
      window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
      });
  };

  function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath()
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
  }

  return (
    <>
      <section ref={intro}><Intro /></section>
      <nav className="gabriel">
        <ul>
          <li onClick={() => scrollToSection(intro)}><CustomLink>gabriel</CustomLink></li>
          <li onClick={() => scrollToSection(about)}><CustomLink>about</CustomLink></li>
          <li onClick={() => scrollToSection(experience)}><CustomLink>experience</CustomLink></li>
          <li onClick={() => scrollToSection(contact)}><CustomLink>contact</CustomLink></li>
          <li onClick={() => scrollToSection(portfolio)}><CustomLink>portfolio</CustomLink></li>
        </ul>
      </nav>
      <section ref={about}><AboutMe /></section>
      <section ref={experience}><Experience /></section>
      <section ref={contact}><Contact /></section>
      <section ref={portfolio}><Portfolio /></section>
    </>
  )
}

export default App

