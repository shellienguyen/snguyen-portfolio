import React, { Fragment } from 'react';
import Card from "react-bootstrap/Card";

const MainBodyStyling = { boxShadow: '8px 8px 20px rgb(41, 65, 78, 0.8)', margin: '0px 80px 0px 80px' };


const Welcome = () => {
   return (
      <Fragment>
         <div className="body-background">
            <div className="text-center">
               <Card className="card-background title-font" style={ MainBodyStyling } bg='light'>
                  <Card.Header className="welcome-font-size">while ( !seeBestView ) &#123; climbUntil() &#125;;</Card.Header>
                  <Card.Body>
                     <Card.Title className="welcome-body-font-size">
                        <br></br>
                        Hello and Welcome!
                        <br></br><br></br>
                        I am <span className="highlight"><i>Shellie Nguyen</i></span>.
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