import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, Fragment } from 'react';
import { Button, Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


const Contact = () => {
   return (
      <Fragment>
         <div className="body-background">
            <div>
               <Card className="card-background" style={{ boxShadow: '8px 8px 20px rgb(41, 65, 78, 0.8)', margin: '0px 45px 30px 45px' }} bg='light'>
                  <Card.Header className="contact-font-size">Contact</Card.Header>
                  <Card.Body>
                     <Card.Title>
                        Blah
                     </Card.Title>
                     <Form onSubmit={this.handleClick} id='formInput'>
                        <Form.Group>
                           {/* controlId="formBasicName"> */}
                           <Col xs={6}>
                              <Form.Label>Name</Form.Label>
                              <Form.Control
                                 type='text'
                                 name=''
                                 placeholder='Name'
                                 id='entryName'
                                 value={name}
                                 onChange={this.handleChangeName}
                              ></Form.Control>

                              <Form.Label>Email address</Form.Label>
                              <Form.Control
                                 type='text'
                                 name=''
                                 placeholder='Email'
                                 id='eMail'
                                 value={email}
                                 onChange={this.handleChangeEmail}
                              />
                              <Form.Label>Message</Form.Label>
                              <Form.Control
                                 type='text'
                                 name=''
                                 placeholder='Message'
                                 id='message'
                                 value={message}
                                 onChange={this.handleChangeMessage}
                              />
                           </Col>
                        </Form.Group>
                     </Form>

                     <Col xs={6}>
                        <Button
                           onClick={this.handleClick}
                           variant='primary'
                           size='sm'
                           className='text-light'
                        >
                           Submit
                        </Button>
                     </Col>
                  </Card.Body>
               </Card>
            </div>
         </div>
      </Fragment>);
};


export default Contact;