import React from 'react';
import '../App.css';
import * as ReactBS from 'react-bootstrap';
import logo from '../img/logo.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const App = () => {
   return (
      <div>
         <ReactBS.Navbar className="container-fluid" bg="dark" variant="dark" expand="sm">
            <Link to="/Welcome">
               <ReactBS.Navbar.Brand href="#welcome">
                  <img src={logo} width="130" height="40"
                     className="d-inline-block align-top" alt="Shellie Nguyen Logo" />
               </ReactBS.Navbar.Brand>
            </Link>
            <ReactBS.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBS.Navbar.Collapse id="basic-navbar-nav">
               <ReactBS.Nav className="ml-auto navbar-font-size">
                  <Link to="/About">
                     <ReactBS.Nav.Link href="#about">About Me</ReactBS.Nav.Link>
                  </Link>
                  <Link to="/Portfolio">
                     <ReactBS.Nav.Link href="#portfolio">Portfolio</ReactBS.Nav.Link>
                  </Link>
                  <Link to="/Resume">
                     <ReactBS.Nav.Link href="#resume">Resume</ReactBS.Nav.Link>
                  </Link>
                  <Link to="/Contact">
                     <ReactBS.Nav.Link href="#contact">Contact</ReactBS.Nav.Link>
                  </Link>
               </ReactBS.Nav>
            </ReactBS.Navbar.Collapse>
         </ReactBS.Navbar>
      </div>
   );
};


export default App;