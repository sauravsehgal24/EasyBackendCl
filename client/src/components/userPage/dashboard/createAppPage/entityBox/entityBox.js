import React, {Component, useState} from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Container, Row, Button, Card, Form,InputGroup, FormControl} from 'react-bootstrap';

import './entityBox.css';
export default function EntityBox() {

    const [state, setState] = useState({
        inputFields:[]
    });

    const addInput = ()=>{
        setState({inputFields:[...state.inputFields, ""]})
    }

    const removeInput = (index)=>{
        var array = state.inputFields
        array.splice(index,1)
        setState({inputFields:[...array]})
        console.log(`index removed= ${index}   new state = ${state.inputFields}`);
    }

    const showState = () =>{
        console.log(state.inputFields);
    }

    const handleChange = (e,index)=>{
        const newState = getNewState(e,state.inputFields,index)
        setState({inputFields:[...newState]})
        
    }

    const getNewState = (e,array,index)=>{
        array[index] = e.target.value
        return array
    }
  
    


        return (
            <React.Fragment>
                   <Card className='entityBoxCard'>
                    <Card.Body>
                        <Card.Title>
                        <Form.Group
                            className="entityName"
                            controlId="entityName"
                        >
                            <Form.Control
                            className="entityName"
                            type="text"
                            placeholder="Table Name"
                            />
                        </Form.Group>
                        </Card.Title>
                        <hr />

                         {
                             state.inputFields.map((field,index)=>{
                                 return (
                                 <React.Fragment>
                                   <InputGroup className="mb-3">
                                   
                                    <FormControl placeholder="Field Name" onChange={(e)=>handleChange(e,index)}/>
                                    <InputGroup.Append>
                                        <Button onClick={()=>removeInput(index)} variant="danger" >-</Button>
                                    </InputGroup.Append>
                                  </InputGroup>
                                
                                </React.Fragment>
                                 )
                             })
                         }   

                        <Button onClick={()=>addInput()} variant="primary" style={{width:'100%'}}>Add Column</Button>
                    </Card.Body>
                    </Card>
            </React.Fragment>
        );
        
}
