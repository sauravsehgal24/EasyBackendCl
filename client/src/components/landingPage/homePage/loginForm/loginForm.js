import React, { Component } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { useCustomState } from "../../../hooks/customStateHook";
import { useDispatch } from "react-redux";
import axios from "axios";
import userActions from "../../../../global/actions/userActions";

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
  } = useCustomState("");
  const {
    value: password,
    setValue: setPassword,
    bind: bindPassword,
    reset: resetPassword
  } = useCustomState("");

  const login = () => {
    const payload = {
      email,
      password
    };

    axios
      .post("http://localhost:3001/api/user/auth", payload)
      .then(res => {
        if (res === "Unauthorized") {
          console.log("unauthorize");
          return;
        }
        
        const { token } = res.data;
        const { userId, username, email } = res.data.user;
        const payload = {
          token,
          userId,
          username,
          email
        };

        console.log(payload);
        dispatch(userActions._signUp(payload));
        props.history.push('/user');
      })

      .catch(err => {
        console.log(err);
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
            <Form.Text className="text-muted"></Form.Text>
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
            <Form.Text className="text-muted"></Form.Text>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => login()}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
