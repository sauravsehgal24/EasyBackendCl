import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignUpForm from "./signUpForm/signUpForm";
import './homePage.css';
import DisplayInfo from "./displayInfo/displayInfo";

export default function HomePage() {
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col xl={6} l={6} md={6} sm={12} xs={12} className='colOne'>
            <DisplayInfo />
          </Col>
          <Col xl={6} l={6} md={6} sm={12} xs={12} className='colTwo'>
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
