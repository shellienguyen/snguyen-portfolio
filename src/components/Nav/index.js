import React from 'react';
import logo from '../../img/logo.png';


const Nav = () => {
   return (
      <header>
         <h2><img src={logo} alt="Logo" width="130" height="40"></img></h2>

         <nav>
            <ul className="flex-row">
               <li className="mx-2"><a href="#about">About Me</a></li>
               <li><span>Contact</span></li>
            </ul>
         </nav>
      </header>
   );
};


export default Nav;