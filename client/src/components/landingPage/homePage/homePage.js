import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignUpForm from "./signUpForm/signUpForm";
import './homePage.css';
import DisplayInfo from "./displayInfo/displayInfo";

export default function HomePage(props) {
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col xl={7} l={7} md={7} sm={12} xs={12} className='colOne'>
            <DisplayInfo />
          </Col>
          <Col xl={5} l={5} md={5} sm={12} xs={12} className='colTwo'>
            <SignUpForm {...props}/>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
