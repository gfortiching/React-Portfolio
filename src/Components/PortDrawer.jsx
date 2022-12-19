import * as React from 'react';
import "./CSS/PortDrawer.css"

import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import PortOne from "./Portfolio One"
import PortTwo from "./Portfolio Two";
import Capstone from './Capstone';

function PortDrawer() {

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
          bottom: false,
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
                  <CustomLink to="/portone" element={<PortOne />} className="drawerLinks">Portfolio One</CustomLink>
                  <CustomLink to="/porttwo" element={<PortTwo />} className="drawerLinks">Portfolio Two</CustomLink>
                  <CustomLink to="/capstone" element={<Capstone />} className="drawerLinks">Capstone Project</CustomLink>
                </ListItem>
            </List>
          </Box>
        );
      
        return (
          <div className="hideButton">
            {['bottom'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button sx={{color: "black"}} onClick={toggleDrawer(anchor, true)}>
                    Open Portfolio
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

    return ( 
    <>
    <nav className="appBar" >
      <Navbar expand="sm">
        <div className='hiddenDrawer'>{TemporaryDrawer()}</div>
        <Navbar.Collapse id="basic-navbar-nav">
        <div className='navList'>
          <CustomLink to="/portone" element={<PortOne />}>Portfolio One</CustomLink>
          <CustomLink to="/porttwo" element={<PortTwo />} >Portfolio Two</CustomLink>
          <CustomLink to="/capstone" element={<Capstone />}>Capstone Project</CustomLink>
        </div>
        </Navbar.Collapse>
      </Navbar>
    </nav>

    </>
    )
}

export default PortDrawer;