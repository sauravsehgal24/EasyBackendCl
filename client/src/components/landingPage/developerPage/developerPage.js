import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./developerPage.css";
export default function DeveloperPage() {
  return (
    <React.Fragment>
      <Container className="containerDeveloperPage" fluid>
        <Card className="developerPageCard">
          <Card.Body className="developerPageCardBody">
            <header className="cardTitle">Hey Developers Whats Up!</header>
            <hr className="divider"></hr>
            <img
              src={require("../../../assets/images/myimg.png")}
              className="myProfilePic"
            />
            <div className="developersCardPara">
              My name is <strong>Saurav Sehgal</strong> and I am a Full-Stack
              Developer like most of you out there. I am a recent graduate from
              Sheridan College (Brampton, ON, CA) and this is my first open
              source and big project after my studies. After some research and
              going through the documentation for react, I came up with this
              project. Currently developing some of the major features and being
              an open source project, you can also contribute via my Github link
              provided down below.
            </div>
            <div className="contactImagesContainer">
                <a className='githubPicA' href='https://github.com/sauravsehgal24' target="_blank">
              <img
                src={require("../../../assets/images/github.png")}
                className='githubPic'
              /></a>
              <a className='linkindnPicA' href='http://www.linkedin.com/in/saurav-sehgal' target="_blank">
              <img
                src={require("../../../assets/images/linkindn.png")}
                className='linkindnPic'
              /></a>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
}
