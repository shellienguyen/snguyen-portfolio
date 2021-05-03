import React, { Fragment } from 'react';
import { Card, CardDeck, Row, ListGroup } from 'react-bootstrap';
import PortfolioTexts from './PortfolioTexts';
import projectHappyTails from '../img/project-happy-tails.jpg';
import projectSurfConditions from '../img/project-surf-conditions.jpg';
import projectTechBlog from '../img/project-mvc-tech-blog.jpg';
import projectPwdGen from '../img/project-pwd-gen.jpg';

const MainBodyStyling = { boxShadow: '8px 8px 20px rgb(41, 65, 78, 0.8)', margin: '0px 80px 0px 80px' };
const CardStylingProject1 = { margin: '30px 25px 25px 60px', paddingTop: '20px', boxShadow: '8px 8px 8px rgb(41, 65, 78, 0.8)',};
const CardStylingProject2 = { margin: '30px 60px 25px 20px', paddingTop: '20px', boxShadow: '8px 8px 8px rgb(41, 65, 78, 0.8)',};
const CardStylingProject3 = { margin: '25px 25px 25px 60px', paddingTop: '20px', boxShadow: '8px 8px 8px rgb(41, 65, 78, 0.8)',};
const CardStylingProject4 = { margin: '25px 60px 25px 25px', paddingTop: '20px', boxShadow: '8px 8px 8px rgb(41, 65, 78, 0.8)',};
const CardStylingProject5 = { margin: '25px 25px 30px 60px', paddingTop: '20px', boxShadow: '8px 8px 8px rgb(41, 65, 78, 0.8)',};
const CardStylingProject6 = { margin: '25px 60px 30px 25px', paddingTop: '20px', boxShadow: '8px 8px 8px rgb(41, 65, 78, 0.8)',};
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
                              <Card.Title>Happy Tails</Card.Title>
                           
                              <React.Fragment><span className="xsmall-font-size">{PortfolioTexts[0]}</span></React.Fragment>
                           
                              <ListGroup>
                                 <ListGroup.Item variant='info' className="small-font-size">Built with: </ListGroup.Item>
                                 <ListGroup.Item variant='secondary' className="xsmall-font-size">
                                    HTML, CSS, Materialize, JavaScript, Node.js, Express.js, MySQL, Sequelize, Bcrypt.js, Nodemailer, Express Session
                                 </ListGroup.Item>
                              </ListGroup>
                           </Card.Body>

                           <Card.Body>
                              <a href="https://github.com/shellienguyen/happy-tails" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" width="35px" height="35px" alt="GitHub Repo" /></a>
                              <a href="https://happy-happy-tails.herokuapp.com/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/domain.png" width="35px" height="35px" alt="Live Application" /></a>
                           </Card.Body>
                        </Card>
                        {/* END OF Happy Tails PROJECT */}

                        {/* START OF OC/LA Surf Conditions PROJECT */}
                        <Card style={CardStylingProject2} className={CardBorder}>
                           <Card.Img variant='top' src={projectSurfConditions} />
                           <Card.Body>
                              <Card.Title>LA/OC Surf Conditions</Card.Title>
                           
                              <React.Fragment><span className="xsmall-font-size">{PortfolioTexts[1]}</span></React.Fragment>
                           
                              <ListGroup>
                                 <ListGroup.Item variant='info' className="small-font-size">Built with: </ListGroup.Item>
                                 <ListGroup.Item variant='secondary' className="xsmall-font-size">
                                    HTML, CSS, JavaScript, localStorage, weather API, image API, Modal
                                 </ListGroup.Item>
                              </ListGroup>
                           </Card.Body>

                           <Card.Body>
                              <a href="https://github.com/shellienguyen/surf-forecast" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" width="35px" height="35px" alt="GitHub Repo" /></a>
                              <a href="https://shellienguyen.github.io/surf-forecast/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/domain.png" width="35px" height="35px" alt="Live Application" /></a>
                           </Card.Body>
                        </Card>
                        {/* END OF OC/LA Surf Conditions PROJECT */}
                     </CardDeck>
                  </Row>
                  {/* END OF ROW 1 */}

                  {/* START OF ROW 2 */}
                  <Row>
                     <CardDeck>
                        {/* START OF MVC Tech Blog PROJECT */}
                        <Card style={CardStylingProject3} className={CardBorder}>
                           <Card.Img variant='top' src={projectTechBlog} />
                           <Card.Body>
                              <Card.Title>The MVC Tech Blog</Card.Title>
                           
                              <React.Fragment><span className="xsmall-font-size">{PortfolioTexts[2]}</span></React.Fragment>
                           
                              <ListGroup>
                                 <ListGroup.Item variant='info' className="small-font-size">Built with: </ListGroup.Item>
                                 <ListGroup.Item variant='secondary' className="xsmall-font-size">
                                 HTML, CSS, JavaScript, Express.js, Node.js, MySQl Sequelize. Express Handlebars, Connect Session Sequelize, dotenv, bcrypt
                                 </ListGroup.Item>
                              </ListGroup>
                           </Card.Body>

                           <Card.Body>
                              <a href="https://github.com/shellienguyen/mvc-tech-blog" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" width="35px" height="35px" alt="GitHub Repo" /></a>
                              <a href="https://sn-mvc-tech-blog.herokuapp.com/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/domain.png" width="35px" height="35px" alt="Live Application" /></a>
                           </Card.Body>
                        </Card>
                        {/* END OF MVC Tech Blog PROJECT */}

                        {/* START OF Password Generator PROJECT */}
                        <Card style={CardStylingProject4} className={CardBorder}>
                           <Card.Img variant='top' src={projectPwdGen} />
                           <Card.Body>
                              <Card.Title>Password Generator</Card.Title>
                           
                              <React.Fragment><span className="xsmall-font-size">{PortfolioTexts[2]}</span></React.Fragment>
                           
                              <ListGroup>
                                 <ListGroup.Item variant='info' className="small-font-size">Built with: </ListGroup.Item>
                                 <ListGroup.Item variant='secondary' className="xsmall-font-size">
                                 HTML, CSS, JQuery, Bootstrap
                                 </ListGroup.Item>
                              </ListGroup>
                           </Card.Body>

                           <Card.Body>
                              <a href="https://github.com/shellienguyen/pwd-gen" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" width="35px" height="35px" alt="GitHub Repo" /></a>
                              <a href="https://shellienguyen.github.io/pwd-gen/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/domain.png" width="35px" height="35px" alt="Live Application" /></a>
                           </Card.Body>
                        </Card>
                        {/* END OF Password Generator PROJECT */}
                     </CardDeck>
                  </Row>
                  {/* END OF ROW 2 */}
                  
                  {/* START OF ROW 3 */}
                  <Row>
                     <CardDeck>
                        {/* START OF Teacm Profile Generator PROJECT */}
                        <Card style={CardStylingProject5} className={CardBorder}>
                           <Card.Img variant='top' src={projectHappyTails} />
                           <Card.Body>
                              <Card.Title>Team Profile Generator</Card.Title>
                           
                              <React.Fragment><span className="xsmall-font-size">{PortfolioTexts[4]}</span></React.Fragment>
                           
                              <ListGroup>
                                 <ListGroup.Item variant='info' className="small-font-size">Built with: </ListGroup.Item>
                                 <ListGroup.Item variant='secondary' className="xsmall-font-size">
                                 HTML, CSS, JQuery, Bootstrap
                                 </ListGroup.Item>
                              </ListGroup>
                           </Card.Body>

                           <Card.Body>
                              <a href="https://github.com/shellienguyen/team-profile-generator" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" width="35px" height="35px" alt="GitHub Repo" /></a>
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