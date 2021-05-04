import React, { Fragment } from 'react';
import Card from "react-bootstrap/Card";
import resumeLink from "../docs/resume.pdf";
import resumeIcon from "../img/resume-icon.png";

const MainBodyStyling = { boxShadow: '8px 8px 20px rgb(41, 65, 78, 0.8)', margin: '0px 5% 0px 5%' };


const Resume = () => {
   return (
      <Fragment>
      <div className="body-background">
         <div className="text-center">
            <Card className="card-background title-font" style={ MainBodyStyling } bg='light'>
               <Card.Header className="welcome-font-size">Resume</Card.Header>
               <Card.Body>
                  <p className="medium-font-size">
                     I give my mind to working at creating a healthy organization. With a
                     diverse backgrounds in technical, management, leadership, and retail,
                     I have seen the many ways organizations can improve their own systems
                     for the betterment of themselves and their employees. I believe in
                     growth, development, and lifelong learning and this applies to
                     organizations, individuals, and teams. Those who have the vision and
                     the drive to better themselves will always grow.
                  </p>

                  <Card.Title>Proficiencies</Card.Title>
                  <p className="medium-font-size">
                     HTML, CSS, Bootstrap, HandleBars, JavaScript, jQuery, IndexedDB, React.js,
                     MySQL, NoSQL, Sequelize, Node.js, Express.js, APIs, Templating
                  </p>

                  <br></br>

                  <a href={resumeLink} alt="Download resume" target="_blank" rel="noopener noreferrer" className="small-font-size"><img src={resumeIcon} width="50" height="50" alt="Resume Download Icon"></img><br></br>Download Resume</a>
               </Card.Body>
            </Card>
         </div>
      </div>
   </Fragment>
   );
};


export default Resume;