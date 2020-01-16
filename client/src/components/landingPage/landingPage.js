import React, {Component} from 'react';
import HomePage from './homePage/homePage';
import NavBar from './navBar/navBar';

export default function LandingPage() {

        return (
            <React.Fragment>
             <NavBar/>
             <HomePage/>
            </React.Fragment>
        );
  
}
