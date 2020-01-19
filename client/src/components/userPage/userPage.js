import React from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";

export default function UserPage(props) {

  console.log(props);
  return (
    <React.Fragment>
      <h1>User Page </h1>
      <Button onClick={()=>props.history.push('/')}>Logout</Button>
    </React.Fragment>
  );
}
