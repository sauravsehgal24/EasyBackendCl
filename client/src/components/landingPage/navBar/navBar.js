import React, { Component, useState, setState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {

  const [navHeading, setNavHeading] = useState('Home');

  const setNavHeadingFunc = function (name){
    setNavHeading(name);
  }

  return (
    <React.Fragment>
      <Navbar className="navBar" expand="lg">
      <Link onClick={()=> setNavHeadingFunc('Home')} to="/">
        <Navbar.Brand style={{ marginLeft: "1%" }}>
          <img
            src={require("../../../assets/images/gear.gif")}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        </Link>
        <h4> | {navHeading}</h4>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-5 fontSize"  >
              <Link onClick={()=> setNavHeadingFunc('Home')} style={{ color: "black" }} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="mr-5 fontSize" >
              <Link onClick={()=> setNavHeadingFunc('Developer')}  style={{ color: "black" }} to="/developer">
                Developer
              </Link>
            </Nav.Link>
            <Nav.Link className="mr-5 fontSize" >
              <Link onClick={()=> setNavHeadingFunc('Usage')}  style={{ color: "black" }} to="/usage">
                Usage
              </Link>
            </Nav.Link>
            <Nav.Link className="mr-5 fontSize"  >
              <Link onClick={()=> setNavHeadingFunc('About')} style={{ color: "black" }} to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link className="mr-5 fontSize" >
              <Link onClick={()=> setNavHeadingFunc('UpComing')} style={{ color: "black" }} to="/upComing">
                UpComing
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
