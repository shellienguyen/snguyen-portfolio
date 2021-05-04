import React from 'react';
import Card from 'react-bootstrap/Card';


const PortfolioTexts = [
   <Card.Text>
      This is a task tracking site to help shelter employees/volunteers to track the
      dogs' daily activities.  The application tracks whether the dogs have been taken
      out for their twice-a-day walk and potty activities. The application also tracks
      by difficulty levels to make sure that all of the dogs are taken care of and paired
      with a compatible caretaker who meets the required experience.<br></br><br></br>
      (HTML, CSS, Materialize, JavaScript, Node.js, Express.js, MySQL, Sequelize,
      Bcrypt.js, Nodemailer, Express Session)
   </Card.Text>,

   <Card.Text>
      This is an application made for surfers in the OC/LA areas. It finds the current surf
      conditions for 7 tracked beaches along the OC/LA coastline, then returns a simplified
      layout of relevant surf and weather conditions for a user-selected beach. To add to
      a fun user experience, a relevant and random image that represents the current surf
      contidion is also displayed.<br></br><br></br>
      HTML, CSS, JavaScript, localStorage, weather API, image API, Modal
   </Card.Text>,

   <Card.Text>
      The MVC Tech BLog is a CMS-style blog site similar to a Wordpress site, where
      developers can publish their blog posts as well as comment on other developers’ posts.
      They can also modify and delete blog posts. This application follows the MVC paradigm
      in its architectural structure.<br></br><br></br>
      HTML, CSS, JavaScript, Express.js, Node.js, MySQl Sequelize. Express Handlebars,
      Connect Session Sequelize, dotenv, bcrypt
   </Card.Text>,
   
   <Card.Text>
      The application generates a random password based on user criteria. Upon clicking
      on the "Generate Password" button the user is greeted with a series of prompts to
      indicate the password length, whether to include lower case characters, uppercase
      characters, special characters, and/or numbers in the password.<br></br><br></br>
      HTML, CSS, JavaScript, JQuery, Bootstrap
   </Card.Text>,
   
   <Card.Text>
      The Team Profile Generator helps development teams to quickly generate team roster
      in the HTML format that displays the team's basic information. The application runs
      at the command prompt and when executed it will take the user through a series of
      command prompt questions to get user input.<br></br><br></br>
      HTML, CSS, JavaScript, Jest, Inquirer
   </Card.Text>,
   
   <Card.Text>
      The Team Profile Generator is to provide travelers with a weather dashboard
      that displays the current weather to a requested city. Upon page load, the
      page will display the weather information for the last searched city,
      if that information is available.<br></br><br></br>
      HTML, CSS, JavaScript, weater API
   </Card.Text>
];


export default PortfolioTexts;