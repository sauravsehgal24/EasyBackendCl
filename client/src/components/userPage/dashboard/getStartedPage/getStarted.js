import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Container, Row, Button,Card} from 'react-bootstrap';
import './getStarted.css';
export default function GetStartedPage(props) {
        return (
            <React.Fragment>
                <Card className='getStartedCard'>
                <img className='getStartedimage' src={require('../../../../assets/images/developer.gif')}/>
                    <h3>Hmmm, Looks like you don't have any node server setup...</h3>
                   <hr></hr>
                   <Link className='linkCreateApp' to='/user/createnewapp'>
                      Create Application
                    </Link>
                </Card>
            </React.Fragment>
        );
  
}
