import React from 'react';
import logo from '../../img/logo.png';


const Nav = () => {
   const navCategories = [
      { name: "Portfolio", description: "View my projects" },
      { name: "Resume", description: "View my full resume" }
   ];

   return (
      <>
         <div className="nav-vertical-center div-left">
            <a href="/"> <img src={logo} alt="Logo" width="130" height="40"></img></a>
         </div>

         <div className="nav-vertical-center bodyfont div-right">
            <span className="mx-1-nav">About Me</span>
            <span className="mx-1-nav">Contact</span>
            { navCategories.map(( category ) => (
               <span className="mx-1-nav" key={ category.name }>{ category.name }</span>
            ))}
         </div>
      </>
   );
};


export default Nav;