import React, { Fragment } from 'react';
import Card from "react-bootstrap/Card";
import headshot from '../img/headshot.png';
import about from '../img/who-am-i.png';

const MainBodyStyling = { boxShadow: '8px 8px 20px rgb(41, 65, 78, 0.8)', margin: '0px 80px 0px 80px' };


const About = () => {
   return (
      <Fragment>
         <div className="body-background">
            <div className="text-center">
               <Card className="card-background" style={ MainBodyStyling } bg='light'>
                  <Card.Header><img src={about} alt="Who am I?" width="160" height="94"></img></Card.Header>
                  <Card.Body>
                     <Card.Title>
                        <img src={headshot} className="wrap-text" alt="Shellie's Headshot" width="150" height="150"></img>
                        
                        <p className="about-body-font-size">
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br><br></br>
                           Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.<br></br><br></br>
                           The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
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