import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./developerPage.css";
export default function DeveloperPage() {
  return (
    <React.Fragment>
      <Container xl={12} lg={12} md={12} sm={12} xs={12} className="containerDeveloperPage" fluid>
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
              Developer and Cloud Engineer. I felt a need to develop my very own server-less cloud infrastructure where 
              users can deploy their web apps. Currently developing some of the major features and being
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
