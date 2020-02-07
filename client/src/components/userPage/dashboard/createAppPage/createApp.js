import React, {useState} from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Container, Row, Col, Button, Card, Grid} from 'react-bootstrap';
import Draggable, {DraggableCore} from 'react-draggable';

import './createApp.css';

//Components
import EntityBox from './entityBox/entityBox';

export default function CreateAppPage() {

    const [state, setState] = useState({
        entityBoxes:[
            {
                entityName:'usersTable',
                inputFields:[]
            },
          
        ]
    });

        return (
            <React.Fragment>
                   <Card  className='createAppCard' style={{width:'80%', height:'80%'}}>
                    <Container fluid style={{height:'100%'}}>
                        <Row className='createAppCardRow1'>
                            <img className='addCircleButton' src={require('../../../../../src/assets/images/addCircle.png')} />
                        </Row>
                        <Row  className='createAppCardRow2'>
                        {
                            state.entityBoxes.map((entity,index)=>{
                                return (
                                    <Draggable
                                   
                                    grid={[25, 25]}
                                    scale={1}
                                    onStart={()=>console.log('dragging start')}
                                    onDrag={()=>console.log('dragging')}
                                    
                                    ><div className='draggableDiv'>
                                       <EntityBox />
                                        </div>
                                    </Draggable>
                            )
                            })
                        }
                         
                        </Row>
                    </Container>
                   </Card>
                   
            </React.Fragment>
        );
        
}
