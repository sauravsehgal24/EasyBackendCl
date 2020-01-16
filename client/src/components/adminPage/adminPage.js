import React from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Table from './table';
import AdminUsers from './adminUser';

export default function AdminPage() {
  return (
    <React.Fragment>
      <h1>Admin Page</h1>
      <hr></hr>
      <Switch>
        <Route exact path="/admin/table" component={Table} />
        <Route exact path="/admin/users" component={AdminUsers}/>
      </Switch>
    </React.Fragment>
  );
}
