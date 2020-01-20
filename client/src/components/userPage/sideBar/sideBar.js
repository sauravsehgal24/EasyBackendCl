import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {useSelector} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';
import userActions from '../../../global/actions/userActions';
import './sideBar.css';

const useStyles = makeStyles(theme => ({
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  }));



export default function SideBar(props) {

    const user = useSelector(state=> state.userInfo);
    console.log(user);

    const classes = useStyles();

    //avatar components
    const userAvatarComponent = () =>{
        if(user.user.avatarUrl)
            return <Avatar alt="Remy Sharp" src={user.user.avatarUrl} className={classes.large} />
        else
            return <Avatar alt="Remy Sharp" src={require('../../../assets/images/defaultAvatar.png')} className={classes.large} />
        
    }

    const dispatch = useDispatch();
    const logout = ()=>{
        dispatch(userActions._auth());
        props.history.push('/');
      }

  return (
    <React.Fragment>
        <Container className='sideBarContainer' fluid>
        {
          userAvatarComponent() 
        }
            <Button variant="light" className='button' size="lg">Dashboard</Button>
            <Button variant="light" className='button' size="lg">Profile</Button>
            <Button variant="light" className='button' size="lg">Settings</Button>
            <Button variant="light" className='button' size="lg">Help</Button>
            <Button variant="light" className='button' size="lg" onClick={()=>logout()}>Logout</Button>
        </Container>
    </React.Fragment>
  );
}
