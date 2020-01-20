import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import userActions from '../../global/actions/userActions';
import SideBar from '../userPage/sideBar/sideBar';
import './userPage.css';
export default function UserPage(props) {

  const dispatch = useDispatch();

  const logout = ()=>{
    dispatch(userActions._auth());
    props.history.push('/');
  }

  return (
    <React.Fragment>
      <Container fluid>
      <Row>
          <Col xl={2} l={2} md={2} sm={12} xs={12} className='colSideBar'>
            <SideBar {...props} />
          </Col>
          <Col xl={10} l={10} md={10} sm={12} xs={12} className='colContent'>
            <h1>User Page </h1>
           
          </Col>
      </Row>
      </Container>
     
    </React.Fragment>
  );
}
