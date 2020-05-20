import React, { Component } from "react";
import { Modal, Button, Form, InputGroup, Spinner } from "react-bootstrap";
import { useCustomState } from "../../../hooks/customStateHook";
import { useDispatch } from "react-redux";
import axios from "axios";
import userActions from "../../../../global/actions/userActions";
import './loginForm.css';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

export default function LoginForm(props) {


  //dispatch
  const dispatch = useDispatch();

  //state
  const {
    value: email,
    setValue: setEmail,
    bind: bindEmail,
    reset: resetEmail
  } = useCustomState("",'email');

  const {
    value: password,
    setValue: setPassword,
    bind: bindPassword,
    reset: resetPassword
  } = useCustomState("",'password');

  const {value:isSpinnerLoading, setValue:setIsSpinnerLoading} = useCustomState(false);
useCustomState('');

  //login api call to auth
  const login = () => {

    const payload = {
      email,
      password
    };
    const BASE_URL_DEV = 'http://localhost:3001';
    const BASE_URL_PROD = 'http://serverlatest.easybackendcl.ga';
    setIsSpinnerLoading(true);

    axios
      .post(`${BASE_URL_DEV}/api/user/auth`, payload)
      .then(res => {
        if (res === "Unauthorized") {
          console.log("unauthorize");
          return;
        }
        
        const { token } = res.data;
        const { userId, username, email , avatarUrl} = res.data.user;
        const payload = {
          token,
          userId,
          username,
          email,
          avatarUrl,
        };
        props.setErrorText('');
       setIsSpinnerLoading(false);
        console.log(payload);
        dispatch(userActions._signUp(payload));
        props.history.push('/user');
      })

      .catch(err => {
       setIsSpinnerLoading(false);
       props.setErrorText('Email/Username or Password is invalid');
      });
      
   
  };

  return (
    <React.Fragment>
      <Modal
        backdrop="static"
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="loginFormUsernameTextfield">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              required
              className="loginFormUsernameTextfield"
              type="text"
              {...bindEmail}
            />
          </InputGroup>
    

          <InputGroup className="loginFormPasswordTextfield mt-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              required
              className="loginFormPasswordTextfield"
              type="password"
              {...bindPassword}
            />
          </InputGroup>
         
        </Modal.Body>
        <Modal.Footer>
        
          <p style={{color:'red'}}>{props.errorTextLogin}</p>
          {
          isSpinnerLoading ?  <Button  variant="success" disabled>
          <Spinner
            as="span"
            animation="border"
            size="md"
            role="status"
            aria-hidden="true"
          />
          </Button>
          :
          <Button variant="success" onClick={() => login()}>
            Login
          </Button>
        }

          
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
