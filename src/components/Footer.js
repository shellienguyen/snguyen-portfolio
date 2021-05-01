import React from 'react';
import { Navbar, Container } from 'react-bootstrap';


function Footer() {   
   return (
      <div className="footer" id="footer">
         <a href="https://github.com/shellienguyen" target='_blank'><img width="30px" height="30px" src="https://img.icons8.com/fluent/48/000000/github.png" alt="Github" className="icon"/></a>
         &nbsp;&nbsp;&nbsp;
         <a href="https://www.linkedin.com/in/shellie-nguyen-020ab5132" target='_blank'><img width="30px" height="30px" src="https://cdn.exclaimer.com/Handbook%20Images/linkedin-icon_32x32.png?_ga=2.34630177.1287495699.1619853244-1673123240.1619853244" alt="LinkedIn" className="icon"/></a>
         &nbsp;&nbsp;&nbsp;
         <a href="https://stackoverflow.com/users/14721673/shellie-nguyen" target='_blank'><img width="30px" height="30px" src="https://img.icons8.com/color/48/000000/stackoverflow.png" alt="Stack Overflow" className="icon"/></a>
      </div>
   );
}; 


export default Footer;