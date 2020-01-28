import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Container, Row, Button,Card} from 'react-bootstrap';
import './dashboard.css';

export default function ActiveServers() {

        return (
            <React.Fragment>
                <Container fluid className='activeServersContainer'>
                {/* <Card className='dashboardCard'>
                <img className='dashboardCardimage' src={require('../../../assets/images/developer.gif')}/>
                    <h3>Hmmm, Looks like you don't have any node server setup...</h3>
                   <hr></hr>
                    <Button variant='danger' size="lg" className='buttonCreateApp'> Create Application </Button>
                </Card> */}
                </Container>
            </React.Fragment>
        );
  
}
