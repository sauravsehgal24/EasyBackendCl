import React from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import userActions from '../../global/actions/userActions';

export default function UserPage(props) {

  const dispatch = useDispatch();

  const logout = ()=>{
    dispatch(userActions._auth());
    props.history.push('/');
  }

  return (
    <React.Fragment>
      <h1>User Page </h1>
      <Button onClick={()=>logout()}>Logout</Button>
    </React.Fragment>
  );
}
