import React, { Fragment } from 'react';
import { Card, CardDeck, Button, Container, Row, Col, ListGroup, ListGroupItem, } from 'react-bootstrap';
import PortfolioTexts from './PortfolioTexts';
import projectHappyTails from '../img/project-happy-tails.jpg';

const MainBodyStyling = { boxShadow: '8px 8px 20px rgb(41, 65, 78, 0.8)', margin: '0px 80px 0px 80px' };
const CardStylingProject1 = { margin: '30px 20px 20px 50px', paddingTop: '20px', boxShadow: '8px 8px 8px rgb(41, 65, 78, 0.8)',};
const CardStylingProject2 = { margin: '30px 50px 20px 20px', paddingTop: '20px', boxShadow: '8px 8px 8px rgb(41, 65, 78, 0.8)',};
const CardStylingProject3 = { margin: '20px 20px 20px 50px', paddingTop: '20px', boxShadow: '8px 8px 8px rgb(41, 65, 78, 0.8)',};
const CardStylingProject4 = { margin: '20px 50px 20px 20px', paddingTop: '20px', boxShadow: '8px 8px 8px rgb(41, 65, 78, 0.8)',};
const CardStylingProject5 = { margin: '20px 20px 30px 50px', paddingTop: '20px', boxShadow: '8px 8px 8px rgb(41, 65, 78, 0.8)',};
const CardStylingProject6 = { margin: '20px 50px 30px 20px', paddingTop: '20px', boxShadow: '8px 8px 8px rgb(41, 65, 78, 0.8)',};
const CardBorder = 'border border-info bg-dark text-light';


const Portfolio = () => {
   return (
      <Fragment>
         <div className="body-background text-center">
            <Card className="card-background title-font" style={MainBodyStyling} bg='light'>
               <Card.Header className="contact-font-size">let <span class="highlight">myProjects</span> = [];</Card.Header>
               <Card.Body>
                  {/* START OF ROW 1 */}
                  <Row>
                     <CardDeck>
                        {/* START OF Happy Tails PROJECT */}
                        <Card style={CardStylingProject1} className={CardBorder}>
                           <Card.Img variant='top' src={projectHappyTails} />
                           <Card.Body>
                              <Card.Title>Project 1</Card.Title>
                           </Card.Body>
                        </Card>
                        {/* END OF Happy Tails PROJECT */}

                        {/* START OF 2nd PROJECT */}
                        <Card style={CardStylingProject2} className={CardBorder}>
                           <Card.Img variant='top' src={projectHappyTails} />
                           <Card.Body>
                              <Card.Title>Project 2</Card.Title>
                           </Card.Body>
                        </Card>
                        {/* END OF 2nd PROJECT */}
                     </CardDeck>
                  </Row>
                  {/* END OF ROW 1 */}

                  {/* START OF ROW 2 */}
                  <Row>
                     <CardDeck>
                        {/* START OF 3rd PROJECT */}
                        <Card style={CardStylingProject3} className={CardBorder}>
                           <Card.Img variant='top' src={projectHappyTails} />
                           <Card.Body>
                              <Card.Title>Project 3</Card.Title>
                           </Card.Body>
                        </Card>
                        {/* END OF 3rd PROJECT */}

                        {/* START OF 4th PROJECT */}
                        <Card style={CardStylingProject4} className={CardBorder}>
                           <Card.Img variant='top' src={projectHappyTails} />
                           <Card.Body>
                              <Card.Title>Project 4</Card.Title>
                           </Card.Body>
                        </Card>
                        {/* END OF 4th PROJECT */}
                     </CardDeck>
                  </Row>
                  {/* END OF ROW 2 */}
                  
                  {/* START OF ROW 3 */}
                  <Row>
                     <CardDeck>
                        {/* START OF 5th PROJECT */}
                        <Card style={CardStylingProject5} className={CardBorder}>
                           <Card.Img variant='top' src={projectHappyTails} />
                           <Card.Body>
                              <Card.Title>Project 5</Card.Title>
                           </Card.Body>
                        </Card>
                        {/* END OF 5th PROJECT */}

                        {/* START OF 6th PROJECT */}
                        <Card style={CardStylingProject6} className={CardBorder}>
                           <Card.Img variant='top' src={projectHappyTails} />
                           <Card.Body>
                              <Card.Title>Project 6</Card.Title>
                           </Card.Body>
                        </Card>
                        {/* END OF 6th PROJECT */}
                     </CardDeck>
                  </Row>
                  {/* END OF ROW 3 */}
               </Card.Body>
            </Card>
         </div>
      </Fragment>
   );
};


export default Portfolio;