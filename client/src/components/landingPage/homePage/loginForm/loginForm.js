import React, { Component } from "react";
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Form
} from "react-bootstrap";

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

        <Form.Group className='loginFormUsernameTextfield' controlId="formBasicUsername">
            <Form.Control required className='loginFormUsernameTextfield' type="text" placeholder="Username/Email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className='loginFormPasswordTextfield' controlId="formBasicPassword">
            <Form.Control required className='loginFormPasswordTextfield' type="password" placeholder="Password" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

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
