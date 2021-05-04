import React, { Fragment } from 'react';
import { Card, CardDeck, Row, ListGroup } from 'react-bootstrap';
import PortfolioTexts from './PortfolioTexts';
import projectsLogo from '../img/let-projects.png';
import projectHappyTails from '../img/project-happy-tails.jpg';
import projectSurfConditions from '../img/project-surf-conditions.jpg';
import projectTechBlog from '../img/project-mvc-tech-blog.jpg';
import projectPwdGen from '../img/project-pwd-gen.jpg';
import projectTeamGen from '../img/project-team-profile-gen.jpg';
import projectWeatherDashboard from '../img/project-weather-dashboard.jpg';

const MainBodyStyling = { boxShadow: '8px 8px 20px rgb(41, 65, 78, 0.8)', margin: '0px 5% 0px 5%' };
const CardStylingProject = { margin: '3%', paddingTop: '2%', boxShadow: '8px 8px 8px rgb(41, 65, 78, 0.8)' };
const CardBorder = 'border border-info bg-dark text-light';


const Portfolio = () => {
   return (
      <Fragment>
         <div className="body-background text-center">
            <Card className="card-background title-font" style={MainBodyStyling} bg='light'>
               <Card.Header>
               <img src={projectsLogo} width="240" height="50" className="d-inline-block align-top" alt="Projects Logo" />
               </Card.Header>
               <Card.Body>
                  {/* START OF ROW 1 */}
                  <Row>
                     <CardDeck>
                        {/* START OF Happy Tails PROJECT */}
                        <Card style={CardStylingProject} className={CardBorder}>
                           <Card.Img variant='top' src={projectHappyTails} />
                           <Card.Body>
                              <Card.Title>Happy Tails</Card.Title>
                           
                              <React.Fragment><span className="small-font-size">{PortfolioTexts[0]}</span></React.Fragment>
                           </Card.Body>

                           <Card.Body>
                              <a href="https://github.com/shellienguyen/happy-tails" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" width="35px" height="35px" alt="GitHub Repo" /></a>
                              <a href="https://happy-happy-tails.herokuapp.com/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/domain.png" width="35px" height="35px" alt="Live Application" /></a>
                           </Card.Body>
                        </Card>
                        {/* END OF Happy Tails PROJECT */}

                        {/* START OF OC/LA Surf Conditions PROJECT */}
                        <Card style={CardStylingProject} className={CardBorder}>
                           <Card.Img variant='top' src={projectSurfConditions} />
                           <Card.Body>
                              <Card.Title>LA/OC Surf Conditions</Card.Title>
                           
                              <React.Fragment><span className="small-font-size">{PortfolioTexts[1]}</span></React.Fragment>
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
                        <Card style={CardStylingProject} className={CardBorder}>
                           <Card.Img variant='top' src={projectTechBlog} />
                           <Card.Body>
                              <Card.Title>The MVC Tech Blog</Card.Title>
                           
                              <React.Fragment><span className="small-font-size">{PortfolioTexts[2]}</span></React.Fragment>
                           </Card.Body>

                           <Card.Body>
                              <a href="https://github.com/shellienguyen/mvc-tech-blog" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" width="35px" height="35px" alt="GitHub Repo" /></a>
                              <a href="https://sn-mvc-tech-blog.herokuapp.com/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/domain.png" width="35px" height="35px" alt="Live Application" /></a>
                           </Card.Body>
                        </Card>
                        {/* END OF MVC Tech Blog PROJECT */}

                        {/* START OF Password Generator PROJECT */}
                        <Card style={CardStylingProject} className={CardBorder}>
                           <Card.Img variant='top' src={projectPwdGen} />
                           <Card.Body>
                              <Card.Title>Password Generator</Card.Title>
                           
                              <React.Fragment><span className="small-font-size">{PortfolioTexts[2]}</span></React.Fragment>
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
                        {/* START OF Team Profile Generator PROJECT */}
                        <Card style={CardStylingProject} className={CardBorder}>
                           <Card.Img variant='top' src={projectTeamGen} />
                           <Card.Body>
                              <Card.Title>Team Profile Generator</Card.Title>
                           
                              <React.Fragment><span className="small-font-size">{PortfolioTexts[4]}</span></React.Fragment>
                           </Card.Body>

                           <Card.Body>
                              <a href="https://github.com/shellienguyen/team-profile-generator" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" width="35px" height="35px" alt="GitHub Repo" /></a>
                           </Card.Body>
                        </Card>
                        {/* END OF Team Profile Generator PROJECT */}

                        {/* START OF the Weather Dashboard PROJECT */}
                        <Card style={CardStylingProject} className={CardBorder}>
                           <Card.Img variant='top' src={projectWeatherDashboard} />
                           <Card.Body>
                              <Card.Title>Weather Dashboard</Card.Title>
                           
                              <React.Fragment><span className="small-font-size">{PortfolioTexts[5]}</span></React.Fragment>
                           </Card.Body>

                           <Card.Body>
                              <a href="https://github.com/shellienguyen/weather-dashboard" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" width="35px" height="35px" alt="GitHub Repo" /></a>
                              <a href="https://shellienguyen.github.io/weather-dashboard/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/domain.png" width="35px" height="35px" alt="Live Application" /></a>
                           </Card.Body>
                        </Card>
                        {/* END OF the Weather Dashboard PROJECT */}
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