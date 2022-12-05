import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function MyNavbar() {
    return ( 
    <Navbar className="nav" expand="md">
        <button className="navDrawer">{TemporaryDrawer()}</button>
        <Link to="/home" className="site-title">Tracked</Link>
        <button className="navDrawer d-md-none">{TemporaryDrawer2()}</button>
        <Navbar.Collapse id="basic-navbar-nav">
        <div className="aLogReg ms-5 ms-md-auto me-5 mt-4 mt-md-0">
            <CustomLink to="/login">Login</CustomLink>
            <CustomLink to="/register">Register</CustomLink>
        </div>
        </Navbar.Collapse>
    </Navbar>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

function TemporaryDrawer() {
    const [state, setState] = React.useState({
      left: false,
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
        className="bg-primary bg-opacity-25 h-100"
      >
        <List>
            <ListItem className="d-flex flex-column gap-3">
              <CustomLink to="/home" className="drawerLinks"><ListItemButton className="drawerButton">Homepage</ListItemButton>
              </CustomLink>
              <CustomLink to="/portfolio" className="drawerLinks"><ListItemButton className="drawerButton">My Portfolio</ListItemButton>
              </CustomLink>
              <CustomLink to="/tracker" className="drawerLinks"><ListItemButton className="drawerButton">Tracker</ListItemButton>
              </CustomLink>
              <CustomLink to="/about" className="drawerLinks"><ListItemButton className="drawerButton">About Me</ListItemButton>
              </CustomLink>
              <CustomLink to="/contact" className="drawerLinks"><ListItemButton className="drawerButton">Contact Me</ListItemButton>
              </CustomLink>
            </ListItem>
        </List>
      </Box>
    );
  
    return (
      <div className="hideButton">
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
    );
  }

  function TemporaryDrawer2() {
    const [state, setState] = React.useState({
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
        <List>
            <ListItem className="d-flex flex-column gap-3">
            <CustomLink to="/login" className="drawerLinks"><ListItemButton className="drawerButton">Login</ListItemButton></CustomLink>
            <CustomLink to="/register" className="drawerLinks"><ListItemButton className="drawerButton">Register</ListItemButton></CustomLink>

            </ListItem>
        </List>
      </Box>
    );
  
    return (
      <div className="hideButton">
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
                <span className="hideAnchor">{anchor}</span>
                <span className="dashboardIcon"><AccountCircleIcon /></span>
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
    );
  }