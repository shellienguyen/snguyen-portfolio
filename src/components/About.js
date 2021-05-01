import React from 'react';
import headshot from '../img/headshot.png';


const About = () => {
   return (
      <div className="App body-background">
         <h1 id="about">Who am I?</h1>
         <img src={headshot} alt="Shellie's Headshot" width="150" height="150"></img>
      </div>
   );
};


export default About;