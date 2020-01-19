import React from "react";
import { Route, Link, BrowserRouter as Router, Switch} from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage/landingPage";
import AdminPage from './components/adminPage/adminPage';
import UserPage from './components/userPage/userPage';
function App() {

  const ProtectedRoute = ({component:Component, ...rest})=>(
    <Route {...rest} render={(props)=>(
      <Component {...props}/>
    )} />
  );

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
