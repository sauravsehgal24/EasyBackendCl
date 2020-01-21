import React, { Component, useState } from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import userActions from '../../../../global/actions/userActions';
import './signUpForm.css'
import LoginForm from '../loginForm/loginForm';
import customState, { useCustomState } from '../../../hooks/customStateHook';
import axios from 'axios';
import { useEffect } from "react";

export default function SignUpForm(props) {

  

  //dispatch
  const dispatch = useDispatch();
  
  //state
  const {value:loginDialogue, setValue:setLoginDialogueOpen} = useCustomState(false);
  const {value:email, setValue:setEmail,validateResult:validateEmailMessage ,bind:bindEmail, reset:resetEmail} = useCustomState('','email');
  const {value:password, setValue:setPassword, validateResult:validatePasswordMessage, bind:bindPassword, reset:resetPassword} = useCustomState('','password');

  const hideDialogue = ()=>{
    setLoginDialogueOpen(false);
  }

  const showDialogue = ()=>{
    console.log(props);
    setLoginDialogueOpen(true);
  }

//signUp api call
  const signUp = ()=>{

    if(validateEmailMessage !== '' || validatePasswordMessage !== '') return;

    const data = {
      username: email,
      email: email,
      password: password,
    }

    resetEmail();
    resetPassword();

    const BASE_URL_DEV = 'http://localhost:3001';
    const BASE_URL_PROD = 'http://72.140.223.48:3001';

    axios.post(`${BASE_URL_DEV}/api/user`, data)
    .then(function (response) {

      console.log(response);
      const {token} = response.data;
      const {userId,username, email, avatarUrl} = response.data.user[0];
      const payload = {
        token,
        userId,
        username,
        email,
        avatarUrl,
      };
      dispatch(userActions._signUp(payload));
      props.history.push('/user');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <React.Fragment>
      <Card className='card'>
        <Card.Body className='cardBody'>
          <header className='cardTitle'>Join The Community</header>
          <hr className='divider'/>
          <Form.Group className='emailTextfield' controlId="formBasicEmail">
            <Form.Control required className='emailTextfield' type="email" placeholder="Email" {...bindEmail}/>
            <Form.Text className="validationTextSignUp">{validateEmailMessage}</Form.Text>
          </Form.Group>

          <Form.Group className='usernameTextfield' controlId="formBasicUsername">
            <Form.Control readOnly='true' required className='usernameTextfield' type="text" placeholder="Username" {...bindEmail}/>
           
          </Form.Group>

          <Form.Group className='passwordTextfield' controlId="formBasicPassword">
            <Form.Control required className='passwordTextfield' type="password" placeholder="New Password" {...bindPassword}/>
            <Form.Text className="validationTextSignUp">{validatePasswordMessage}</Form.Text>
          </Form.Group>
          
          <Button className='signUpButton' variant="primary" onClick={()=>signUp()}>Sign Up</Button>
          <hr className='divider' />
          <Button className='loginButton' variant="success" onClick={()=>showDialogue()}>Login</Button>
        </Card.Body>
      </Card>
      <LoginForm {...props} show={loginDialogue} onHide={hideDialogue}  />
    </React.Fragment>
  );
}
