import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import userActions from '../../global/actions/userActions';
import SideBar from '../userPage/sideBar/sideBar';
import ProfilePage from './profilePage/profilePage';
import SettingsPage from './settingsPage/settingsPage';
import HelpPage from './helpPage/helpPage';
import DocsPage from './docsPage/docsPage';
import Dashboard from './dashboard/dashboard';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './userPage.css';

export default function UserPage(props) {

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Container fluid>
      <Row>
        <Col xl={2} l={2} md={2} sm={12} xs={12} className='colSideBar'>
            <SideBar {...props} />
        </Col>
          
        <Col xl={10} l={10} md={10} sm={12} xs={12} className='colContent'>
             <Switch>
                <Route  path="/user/profile" component={ProfilePage}/>
                <Route  path="/user/settings" component={SettingsPage}/>
                <Route  path="/user/help" component={HelpPage}/>
                <Route  path="/user/docs" component={DocsPage}/>
                <Route  path="/user" component={Dashboard}/>
             </Switch>
        </Col>
      </Row>
      </Container>
     
    </React.Fragment>
  );
}
