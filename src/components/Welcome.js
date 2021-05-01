import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import welcomeLogo from '../img/welcome.png';


const Welcome = () => {
   return (
      <Fragment>
         <div className="body-background">
            <div className="text-center">
               <Card className="card-background" style={{ boxShadow: '8px 8px 20px rgb(41, 65, 78, 0.8)', margin: '0px 45px 30px 45px' }} bg='light'>
                  <Card.Header><img src={welcomeLogo} className="Welcome-logo" alt="Welcome" /></Card.Header>
                  <Card.Body>
                     <Card.Title>Special title treatment</Card.Title>
                     <Card.Text>
                        Hello World!
                     </Card.Text>
                  </Card.Body>
               </Card>
            </div>
         </div>
      </Fragment>
   );
};


export default Welcome;