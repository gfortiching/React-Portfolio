import React, { useRef, useState } from "react";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Links from "./Components/Links";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Box } from "@mui/system";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Scroll from "./Functions/Scroll";
import Switch from "./Functions/Switch";
import "./Components/CSS/App.css";

function App() {

  const intro = useRef(null);
  const projects = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const links = useRef(null);

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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role="presentation"
      onClick={ToggleDrawer(anchor, false)}
      onKeyDown={ToggleDrawer(anchor, false)}
      className={ darkMode ? 'navDrawerDark' : 'navDrawerLight'}
      style={{height: "100vh"}}
    >
        <ul className="drawer-ul">
          <li className="arvo me-5" onClick={() => Scroll(intro)}>gabriel</li>
          <li className="lato" onClick={() => Scroll(projects)}>projects</li>
          <li className="lato" onClick={() => Scroll(about)}>about</li>
          <li className="lato" onClick={() => Scroll(contact)}>contact</li>
          <li className="lato" onClick={() => Scroll(links)}>links</li>
          <li>
            <img id="sun" className={darkMode ? 'on' : 'off'   } src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt=""/>
            <Switch rounded={false} onToggle={() => setDarkMode(!darkMode)}/>
            <img id="moon" className={darkMode ? 'off' : 'on'   } src="https://cdn-icons-png.flaticon.com/512/581/581601.png" alt=""/>
          </li>
        </ul>
    </Box>
  );

  const [darkMode, setDarkMode] = useState(true);  

  return (
    <main className={ darkMode ? 'dark-mode' : 'light-mode'}>
      <section ref={intro}><Intro /></section>
      <aside id="navDrawer">
          {['left'].map((anchor) => (
          <React.Fragment key={anchor} >
          <Button onClick={ToggleDrawer(anchor, true)}>
              <span className="hideAnchor">{anchor}</span>
              <span className="dashboardIcon"><DashboardIcon className={darkMode ? 'dashWhite' : 'dashBlack'} /></span>
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
      </aside>
      <nav className="navbar">
        <div className="navContainer">
          <ul className={darkMode ? 'navDark' : 'navLight'}>
            <li className="arvo me-5" onClick={() => Scroll(intro)}>gabriel</li>
            <li className="lato" onClick={() => Scroll(projects)}>projects</li>
            <li className="lato" onClick={() => Scroll(about)}>about</li>
            <li className="lato" onClick={() => Scroll(contact)}>contact</li>
            <li className="lato" onClick={() => Scroll(links)}>links</li>
            <li style={{marginLeft: "auto", marginRight: "0"}}>

            <Switch rounded={false} onToggle={() => setDarkMode(!darkMode)}/>
            <img id="moon" className={darkMode ? 'off' : 'on'   } src="https://cdn-icons-png.flaticon.com/512/581/581601.png" alt=""/>
            <img id="sun" className={darkMode ? 'on' : 'off'   } src="https://cdn-icons-png.flaticon.com/512/979/979585.png" alt=""/>

            </li>
          </ul>
        </div>
      </nav>
      <section ref={projects}><Projects /></section>
      <section ref={about}><About /></section>
      <section ref={contact}><Contact /></section>
      <section ref={links}><Links /></section>
    </main>
  )
}

export default App

