import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Container, Row, Button,Card} from 'react-bootstrap';

//Components
import GetStartedPage from './getStartedPage/getStarted';
import CreateAppPage from './createAppPage/createApp';

import './dashboard.css';
export default function Dashboard() {

        return (
            <React.Fragment>
                <Container fluid className='dashboardContainer'>
                <Switch>
                    <Route exact path='/user' component={GetStartedPage}/>
                    <Route exact path='/user/createnewapp' component={CreateAppPage}/>  
                </Switch>
                </Container>
            </React.Fragment>
        );
  
}
