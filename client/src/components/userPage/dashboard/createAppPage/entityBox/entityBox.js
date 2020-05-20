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
    setState({ inputFields: [...state.inputFields, "asd"] });
  };

  const removeInput = index => {
    var array = state.inputFields;
    array.splice(index, 1);
    setState({ inputFields: [...array] });
    console.log(`index removed= ${index}   new state = ${state.inputFields}`);
  };

  const showState = () => {
    console.log(state.inputFields);
  };

  const handleChange = (e, index) => {
    const newState = getNewState(e, state.inputFields, index);
    setState({ inputFields: [...newState] });
  };

  const getNewState = (e, array, index) => {
    array[index] = e.target.value;
    return array;
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

        {state.inputFields.map((field, index) => {
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
