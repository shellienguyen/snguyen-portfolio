import React, { Fragment } from 'react';
import Card from "react-bootstrap/Card";
import headshot from '../img/headshot.png';
import about from '../img/who-am-i.png';

const MainBodyStyling = { boxShadow: '8px 8px 20px rgb(41, 65, 78, 0.8)', margin: '0px 5% 0px 5%' };

const About = () => {
   return (
      <Fragment>
         <div className="body-background">
            <div className="text-center">
               <Card className="card-background" style={ MainBodyStyling } bg='light'>
                  <Card.Header className="welcome-font-size">About Me</Card.Header>
                  <Card.Body>
                     <Card.Title>
                        <img src={headshot} className="wrap-text" alt="Shellie's Headshot" width="150" height="150"></img>
                        
                        <p className="about-body-font-size">
                        I give my mind to working at creating a healthy organization and relevant systems.
                        With a diverse backgrounds in technical, management, leadership, and retail, I have
                        seen the many ways organizations can improve their own systems for the betterment of
                        themselves and their employees. I believe in growth, development, and lifelong learning
                        and this applies to organizations, individuals, and teams. Those who have the vision and
                        the drive to better themselves will always grow.
                        </p>
                     </Card.Title>
                  </Card.Body>
               </Card>
            </div>
         </div>
      </Fragment>
   );
};


export default About;