import React, { Component } from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import './signUpForm.css'

export default function SignUpForm() {
  return (
    <React.Fragment>
      <Card className='card'>
        <Card.Body className='cardBody'>
          <header className='cardTitle'>Join The Community</header>
          <hr className='divider'/>
          <Form.Group className='emailTextfield' controlId="formBasicEmail">
            <Form.Control required className='emailTextfield' type="email" placeholder="Email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className='usernameTextfield' controlId="formBasicUsername">
            <Form.Control readOnly='true' required className='usernameTextfield' type="text" placeholder="Username" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className='passwordTextfield' controlId="formBasicPassword">
            <Form.Control required className='passwordTextfield' type="password" placeholder="New Password" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button className='signUpButton' variant="primary">Sign Up</Button>
          <hr className='divider' />
          <Button className='loginButton' variant="success">Login</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
