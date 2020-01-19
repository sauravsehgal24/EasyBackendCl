import React, { Component } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";

import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

export default function LoginForm(props) {
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
            />
            <Form.Text className="text-muted"></Form.Text>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => props.onHide()}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
