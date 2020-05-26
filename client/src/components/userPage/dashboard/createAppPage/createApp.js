import React, { useState } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { Container, Row, Col, Button, Card, Grid } from "react-bootstrap";
import Draggable, { DraggableCore } from "react-draggable";
import axios from 'axios';
import "./createApp.css";

//Components
import EntityBox from "./entityBox/entityBox";
import { useEffect } from "react";

export default function CreateAppPage() {
  const [state, setState] = useState({
    entityBoxes: [
      {
        entityName: "",
        entityId: "",
        inputFields: []
      }
    ]
  });

  const deployApplication = ()=>{
    const user = "s@g.c"
    const password = "saurav"
    const database = "testss"
    const tables = state.entityBoxes
    const payload = {
      user,
      password,
      database,
      tables
    }

    axios.post('http://localhost:3001/api/user/createApp',payload)
    .then((res)=>{
      console.log(res)
    })

  }

  const addNewEntityBox = () => {
    if (state.entityBoxes.length === 5) {
      alert("You are not permitted to add more than 5 Entities");
      return;
    }
    setState({
      entityBoxes: [
        ...state.entityBoxes,
        { entityName: "", entityId: "", inputFields: [] }
      ]
    });
  };

  const removeEntityBox = index => {
    var array = state.entityBoxes;
    array.splice(index, 1);
    setState({ entityBoxes: [...array] });
    console.log(
      `e box index removed= ${index}   new state = ${state.entityBoxes}`
    );
  };

  const addInputField = (index)=>{
    var array = state.entityBoxes
    array[index].inputFields.push("")
    setState({entityBoxes:[...array]})
  }
  const removeInputField = (entityIndex,inputIndex)=>{
    var array = state.entityBoxes
    array[entityIndex].inputFields.splice(inputIndex, 1);
    setState({entityBoxes:[...array]})
  }

  const changeInputFieldValue = (newValue,inputIndex,entityIndex)=>{
    var array = state.entityBoxes
    array[entityIndex].inputFields[inputIndex] = newValue
    setState({entityBoxes:[...array]})
  }
  const changeEntityNameFieldValue = (newValue,entityIndex)=>{
    var array = state.entityBoxes
    array[entityIndex].entityName = newValue
    setState({entityBoxes:[...array]})
  }


  return (
    <React.Fragment>
      <Card className="createAppCard" style={{ width: "90%", height: "80%" }}>
        <Container fluid style={{ height: "100%" }}>
          <Row className="createAppCardRow1">
            <img
              onClick={() => {
                addNewEntityBox();
              }}
              className="addCircleButton"
              src={require("../../../../../src/assets/images/addCircle.png")}
            />
          </Row>
          <Row className="createAppCardRow2">
            {state.entityBoxes.map((entity, index) => {
              return (
                <Draggable
                  grid={[25, 25]}
                  scale={1}
                  onStart={() => console.log("dragging start")}
                  onDrag={() => console.log("dragging")}
                  key={index}
                >
                  <div className="draggableDiv">
                    <EntityBox
                    changeInputFieldValue={changeInputFieldValue}
                      removeInputField={removeInputField}
                      entity={entity}
                      removeEntity={removeEntityBox}
                      addInputField={addInputField}
                      index={index}
                      inputFields={entity.inputFields}
                      changeEntityNameFieldValue={changeEntityNameFieldValue}
                    />
                  </div>
                </Draggable>
              );
            })}
          </Row>
        </Container>
          
      </Card>
      <Button onClick={()=>{deployApplication()}} style={{width:'30%',margin:'2%'}}variant="danger">Deploy</Button>
    </React.Fragment>
  );
}
