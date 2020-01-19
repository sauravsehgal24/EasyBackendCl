import React, { useState, useEffect }from "react";
import { Route, Link, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import "./App.css";
import {useSelector} from 'react-redux';
import LandingPage from "./components/landingPage/landingPage";
import AdminPage from './components/adminPage/adminPage';
import UserPage from './components/userPage/userPage';

function App() {
  
  const ProtectedRoute = ({component:Component, ...rest})=>{
    
    const user = useSelector(state=> state.userInfo);
    const isLoggedIn = user.isLoggedIn;

    return (<Route {...rest} render={(props)=>(
      isLoggedIn===true ?  <Component {...props}/> : <Redirect to='/' />
    )} />)

    };

  return (
    <div className="App">
      <Switch>
        <Route   path="/admin"  component={AdminPage} />
        <ProtectedRoute   path="/user" component={UserPage} />
        <Route   path="/"   component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
