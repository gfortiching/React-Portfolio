import React, { useRef } from "react";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

import "./Components/CSS/App.css";
import "./Components/CSS/Nav.css";

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Box } from "@mui/system";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Scroll from "./Functions/Scroll";

function App() {

  const intro = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const projects = useRef(null);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const ToggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
  }
  
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={ToggleDrawer(anchor, false)}
      onKeyDown={ToggleDrawer(anchor, false)}
    >
        <ul className="drawer-ul">
          <li className="arvo" onClick={() => Scroll(intro)}>gabriel</li>
          <li className="lato" onClick={() => Scroll(projects)}>projects</li>
          <li className="lato" onClick={() => Scroll(about)}>about</li>
          <li className="lato" onClick={() => Scroll(contact)}>contact</li>
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
          <Button onClick={ToggleDrawer(anchor, true)}>
              <span className="hideAnchor">{anchor}</span>
              <span className="dashboardIcon"><DashboardIcon /></span>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={ToggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
          ))}
      </div>
      <nav className="navbar">
        <div className="navContainer">
          <ul>
            <li className="arvo me-5" onClick={() => Scroll(intro)}>gabriel</li>
            <li className="lato" onClick={() => Scroll(projects)}>projects</li>
            <li className="lato" onClick={() => Scroll(about)}>about</li>
            <li className="lato" onClick={() => Scroll(contact)}>contact</li>
          </ul>
        </div>
      </nav>
      <section ref={projects}><Projects /></section>
      <section ref={about}><About /></section>
      <section ref={contact}><Contact /></section>
    </>
  )
}

export default App

