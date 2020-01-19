import React, { Component, useState } from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import userActions from '../../../../global/actions/userActions';
import './signUpForm.css'
import LoginForm from '../loginForm/loginForm';
import customState, { useCustomState } from '../../../hooks/customStateHook';
import axios from 'axios';

export default function SignUpForm(props) {

  //dispatch
  const dispatch = useDispatch();
  
  //state
  const {value:loginDialogue, setValue:setLoginDialogueOpen} = useCustomState(false);
  const {value:email, setValue:setEmail, bind:bindEmail, reset:resetEmail} = useCustomState('');
  const {value:password, setValue:setPassword, bind:bindPassword, reset:resetPassword} = useCustomState('');

  const hideDialogue = ()=>{
    
    setLoginDialogueOpen(false);
  }

  const showDialogue = ()=>{
    console.log(props);
    setLoginDialogueOpen(true);
  }


  const signUp = ()=>{
    const payload = {
      token:'tokendsc',
      userId:'dsac',
      username: email,
      email: email,
    }
    resetEmail();
    resetPassword();

    // axios.post('http://localhost:3001/api/user', payload)
    // .then(function (response) {

    //   const {token} = response.data;
    //   const {userId,username, email} = response.data.user[0];
    //   const payload = {
    //     token,
    //     userId,
    //     username,
    //     email,
    //   };
    //  //dispatch(userActions._signUp(payload));
      
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    dispatch(userActions._signUp(payload));
    props.history.push('/user');
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
      <LoginForm {...props} show={loginDialogue} onHide={hideDialogue}  />
    </React.Fragment>
  );
}
