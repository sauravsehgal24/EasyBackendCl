import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Container, Row, Col, Button, Card, Grid} from 'react-bootstrap';
import './createApp.css';

//Components
import EntityBox from './entityBox/entityBox';

export default function CreateAppPage() {
        return (
            <React.Fragment>
                   <Card  className='createAppCard' style={{width:'80%', height:'80%'}}>
                    <Container fluid style={{height:'100%'}}>
                        <Row className='createAppCardRow1'>
                            <img className='addCircleButton' src={require('../../../../../src/assets/images/addCircle.png')} />
                        </Row>
                        <Row  className='createAppCardRow2'>
                         <EntityBox />
                        </Row>
                    </Container>
                   </Card>
                   
            </React.Fragment>
        );
        
}