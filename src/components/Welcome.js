import React, { Fragment } from 'react';
import Card from "react-bootstrap/Card";


const Welcome = () => {
   return (
      <Fragment>
         <div className="body-background">
            <div className="text-center">
               <Card className="card-background title-font" style={{ boxShadow: '8px 8px 20px rgb(41, 65, 78, 0.8)', margin: '0px 45px 30px 45px' }} bg='light'>
                  <Card.Header className="welcome-font-size">while ( !problemSolved ) &#123; keepCoding() &#125;;</Card.Header>
                  <Card.Body>
                     <Card.Title className="welcome-body-font-size">
                        <br></br>
                        Hello and Welcome!
                        <br></br><br></br>
                        I am <span className="hightlight"><i>Shellie Nguyen</i></span>.
                        <br></br><br></br>
                        I am a full-stack web developer.
                     </Card.Title>
                  </Card.Body>
               </Card>
            </div>
         </div>
      </Fragment>
   );
};


export default Welcome;