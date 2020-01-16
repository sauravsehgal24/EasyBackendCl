import React, {Component} from 'react';
import NavBar from './navBar/navBar';
import HomePage from './homePage/homePage';
import UsagePage from './usagePage/usagePage';
import DeveloperPage from './developerPage/developerPage';
import AboutPage from './aboutPage/aboutPage';
import UpComingPage from './upComingPage/upComingPage';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

export default function LandingPage() {

        return (
            <React.Fragment>
             <NavBar />
             <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/developer" component={DeveloperPage}/>
                <Route exact path="/usage" component={UsagePage}/>
                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/upComing" component={UpComingPage}/>
             </Switch>
            </React.Fragment>
        );
  
}
