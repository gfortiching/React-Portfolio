import React from "react";
import Intro from "./Components/Intro"
import AboutMe from "./Components/About Me"
import Portfolio from "./Components/Portfolio"
import Contact from "./Components/Contact"
import { useRef } from 'react'

import "./Components/CSS/App.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';


function App() {

  const intro = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const portfolio = useRef(null);
  const scrollToSection = (elementRef) => {
      window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
      });
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <ul>
          <li onClick={() => scrollToSection(intro)}>gabriel</li>
          <li onClick={() => scrollToSection(portfolio)}>portfolio</li>
          <li onClick={() => scrollToSection(about)}>about</li>
          <li onClick={() => scrollToSection(contact)}>contact</li>
        </ul>
    </Box>
  );

  return (
    <>
      <section ref={intro}><Intro /></section>
      <aside className="linkedIn">
          <a href="https://www.linkedin.com/in/gabrielfabilena/" target="blank"><LinkedInIcon sx={{fontSize: "2em"}}/></a>
      </aside>
      <div className="navDrawer">
          {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
              <span className="hideAnchor">{anchor}</span>
              <span className="dashboardIcon"><DashboardIcon /></span>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
          ))}
      </div>
      <nav className="navbar">
          <ul>
            <li onClick={() => scrollToSection(intro)}>gabriel</li>
            <li onClick={() => scrollToSection(portfolio)}>portfolio</li>
            <li onClick={() => scrollToSection(about)}>about</li>
            <li onClick={() => scrollToSection(contact)}>contact</li>
          </ul>
      </nav>
      <section ref={portfolio}><Portfolio /></section>
      <section ref={about}><AboutMe /></section>      <section ref={contact}><Contact /></section>
    </>
  )
}

export default App

