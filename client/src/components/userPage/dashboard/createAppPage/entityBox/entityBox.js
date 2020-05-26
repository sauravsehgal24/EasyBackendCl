import React, { Component, useState } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import {
  Container,
  Row,
  Button,
  Card,
  Form,
  InputGroup,
  FormControl
} from "react-bootstrap";

import "./entityBox.css";
export default function EntityBox(props) {
  const [state, setState] = useState({
    inputFields: []
  });

  const addInput = () => {
    //setState({ inputFields: [...state.inputFields, ""] });
    props.addInputField(props.index)
  };

  const removeInput = index => {
    props.removeInputField(props.index,index)
    console.log(`index removed= ${index}   new state = ${props.inputFields}`);
  };

  const showState = () => {
    console.log(state.inputFields);
  };

  const handleChange = (e, indexField) => {
    //const newState = getNewState(e, state.inputFields, indexField);
    props.changeInputFieldValue(e.target.value,indexField,props.index)
    //setState({ inputFields: [...newState] });
  };

  const changeEntityNameFieldValue = (e,index) => {
    props.changeEntityNameFieldValue(e.target.value,index)
  };

  const eventLogger = (e, data) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };

  return (
    <Card className="entityBoxCard">
      <Card.Body>
        <Card.Title>
          <InputGroup className="entityName" controlId="entityName">
            
            <Form.Control
              className="entityName"
              type="text"
              placeholder="Table Name"
              value={props.entity.entityName}
              onChange={(e)=>{changeEntityNameFieldValue(e,props.index)}}
            />
            <InputGroup.Append>
            <Button
              onClick={() => props.removeEntity(props.index)}
              variant="danger"
            >-
            </Button>
            </InputGroup.Append>
              
          </InputGroup>
        </Card.Title>
        <hr />

        {props.inputFields.map((field, index) => {
          return (
            <React.Fragment>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Field Name"
                  onChange={e => handleChange(e, index)}
                  value={field}
                />
                <InputGroup.Append>
                  <Button onClick={() => removeInput(index)} variant="danger">
                    -
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </React.Fragment>
          );
        })}

        <Button
          onClick={() => addInput()}
          variant="primary"
          style={{ width: "100%" }}
        >
          Add Column
        </Button>
      </Card.Body>
    </Card>
  );
}
