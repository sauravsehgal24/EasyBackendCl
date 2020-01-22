import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Container, Row, Button,Card} from 'react-bootstrap';
import './dashboard.css';
export default function LandingPage() {

        return (
            <React.Fragment>
                <Container fluid className='dashboardContainer'>
                <Card className='dashboardCard'>
                    <h3>Looks like you don't have any server application setup...</h3>
                   <hr></hr>
                    <Button variant='danger' size="lg" className='buttonCreateApp'> Create Application </Button>
                </Card>
                </Container>
            </React.Fragment>
        );
  
}
