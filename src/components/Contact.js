import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { validateEmail } from '../utils/helpers';
import { capitalizeFirstLetter } from '../utils/helpers';


const Contact = () => {
   const [formState, setFormState] = useState({ name: '', email: '', message: '' });
   const { name, email, message } = formState;
   const [errorMessage, setErrorMessage] = useState('');

   /*
   Use the setFormState function to update the formState value for the name
   property. Assign the value taken from the input field in the UI with
   e.target.value and assign this value to the property formState.name.
   Use the spread operator, ...formState to retain the other key-value pairs
   in this object. Without the spread operator, the formState object would be
   overwritten to only contain the name: value key pair.
   */
   const handleChange = (e) => {
      if (e.target.name === 'email') {
         const isValid = validateEmail(e.target.value);
         console.log(isValid);

         if (!isValid) {
            setErrorMessage('*** Your email is invalid! ***');
         }
         else {
            setErrorMessage('');
         };
      }
      else {
         if (!e.target.value.length) {
            let fieldName = capitalizeFirstLetter( e.target.name );
            setErrorMessage(`*** ${fieldName} is required! ***` );
         }
         else {
            setErrorMessage('');
         };
      };

      /* setFormState is asynchronous
      The name property of target actually refers to the name attribute of the
      form element. This attribute value matches the property names of
      formState (name, email, and message) and allows us to use [ ] to
      create dynamic property names.
      */
      if (!errorMessage) {
         setFormState({ ...formState, [e.target.name]: e.target.value });
      };

      console.log ('Error Message:', errorMessage);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formState);
   };

   return (
      <Fragment>
         <div className="body-background">
            <div>
               <Card className="card-background" style={{ boxShadow: '8px 8px 20px rgb(41, 65, 78, 0.8)', margin: '0px 45px 30px 45px' }} bg='light'>
                  <Card.Header className="contact-font-size">Contact</Card.Header>
                  <Card.Body>
                     {errorMessage && (
                        <div>
                           <p></p><p className="error-font">{errorMessage}</p>
                        </div>
                     )}

                     <Card.Title>
                        <form id="contact-form" onSubmit={handleSubmit}>
                           <div>
                              <label className="contact-body-font-size" htmlFor="name">Name:</label><br></br>
                              <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                           </div>

                           <div>
                              <label className="contact-body-font-size" htmlFor="email">Email address:</label><br></br>
                              <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                           </div>

                           <div>
                              <label className="contact-body-font-size" htmlFor="message">Message:</label><br></br>
                              <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                           </div>

                           <Col xs={6}>
                              <Button variant="primary" size="sm"
                                    className="text-light" data-testid="button" >
                                 Submit
                              </Button>
                           </Col>
                        </form>

                     </Card.Title>
                  </Card.Body>
               </Card>
            </div>
         </div>
      </Fragment>);
};


export default Contact;