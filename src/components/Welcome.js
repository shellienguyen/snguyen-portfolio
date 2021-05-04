import React, { Fragment } from 'react';
import Card from "react-bootstrap/Card";
import welcomeLogo from '../img/while.png';

const MainBodyStyling = { boxShadow: '8px 8px 20px rgb(41, 65, 78, 0.8)', margin: '0px 5% 0px 5%' };


const Welcome = () => {
   return (
      <Fragment>
         <div className="body-background">
            <div className="text-center">
               <Card className="card-background title-font" style={ MainBodyStyling } bg='light'>
                  {/*<Card.Header className="welcome-font-size">while ( !seeBestView ) &#123; climbUntil() &#125;;</Card.Header>*/}
                  <Card.Header>
                     <img src={welcomeLogo} width="200" height="80" className="d-inline-block align-top" alt="Welcome Logo" />
                  </Card.Header>
                  <Card.Body>
                     <Card.Title>
                        <p className="welcome-body-font-size">
                           <br></br>
                           Hello and Welcome!
                           <br></br><br></br>
                           I am <span className="highlight"><i>Shellie Nguyen</i></span>.
                           <br></br><br></br>
                           I am a full-stack web developer.
                        </p>
                     </Card.Title>
                  </Card.Body>
               </Card>
            </div>
         </div>
      </Fragment>
   );
};


export default Welcome;