import React, { Component, useState } from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import './signUpForm.css'
import LoginForm from '../loginForm/loginForm';
import customState, { useCustomState } from './customStateHook';

export default function SignUpForm() {

  
  //state
  const {value:loginDialogue, setValue:setLoginDialogueOpen} = useCustomState(false);
  const {value:email, setValue:setEmail, bind:bindEmail, reset:resetEmail} = useCustomState('');
  const {value:password, setValue:setPassword, bind:bindPassword, reset:resetPassword} = useCustomState('');

  const hideDialogue = ()=>{
    setLoginDialogueOpen(false);
  }

  const showDialogue = ()=>{
    setLoginDialogueOpen(true);
  }

  const signUp = ()=>{
    const payload = {
      username: email,
      email: email,
      password: password
    }
    resetEmail();
    resetPassword();

    console.log(payload);

    // const object = {
    //   email:'emailRef',
    //   userName:'userNameRef',
    // }

    // console.log(`Before: email: ${object.email} password: ${object.userName}\n`);

    // const newObj = {
    //   email:'testMail',
    // }

    // const key = Object.keys(newObj)[0];
    // object[key] = newObj[key];

    // console.log(`After: email: ${object.email} password: ${object.userName}`);
    
  }

  return (
    <React.Fragment>
      <Card className='card'>
        <Card.Body className='cardBody'>
          <header className='cardTitle'>Join The Community</header>
          <hr className='divider'/>
          <Form.Group className='emailTextfield' controlId="formBasicEmail">
            <Form.Control required className='emailTextfield' type="email" placeholder="Email" {...bindEmail}/>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className='usernameTextfield' controlId="formBasicUsername">
            <Form.Control readOnly='true' required className='usernameTextfield' type="text" placeholder="Username" {...bindEmail}/>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className='passwordTextfield' controlId="formBasicPassword">
            <Form.Control required className='passwordTextfield' type="password" placeholder="New Password" {...bindPassword}/>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button className='signUpButton' variant="primary" onClick={()=>signUp()}>Sign Up</Button>
          <hr className='divider' />
          <Button className='loginButton' variant="success" onClick={()=>showDialogue()}>Login</Button>
        </Card.Body>
      </Card>
      <LoginForm show={loginDialogue} onHide={hideDialogue}  />
    </React.Fragment>
  );
}
