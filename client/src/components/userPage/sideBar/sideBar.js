import React, { Component, useState, useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import {useSelector} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';
import userActions from '../../../global/actions/userActions';
import { Route, Link, BrowserRouter as Router } from "react-router-dom"
import './sideBar.css';

const useStyles = makeStyles(theme => ({
    large: {
      width: theme.spacing(14),
      height: theme.spacing(14),
    },
  }));

export default function SideBar(props) {

    
    const [selected, setSelected] = useState('Dashboard');
  
    const selectedTab = (data) =>{
        setSelected(data);
    }

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
            <Link to='/user' className='linkSideBar'>
                <Button variant="light" className='button' size="lg" onClick={()=> selectedTab('Dashboard')} style={{backgroundColor: selected == 'Dashboard'?'rgb(241, 78, 78)':'rgba(240, 248, 255,0)' }}>Dashboard</Button>
            </Link>

            <Link to='/user/profile' className='linkSideBar' >
                <Button variant="light" className='button' size="lg"  onClick={()=> selectedTab('Profile')} style={{backgroundColor: selected == 'Profile'?'rgb(241, 78, 78)':'rgba(240, 248, 255,0)'}}>Profile</Button>
            </Link>

            <Link to='/user/settings' className='linkSideBar'  >
                <Button variant="light" className='button' size="lg" onClick={()=> selectedTab('Settings')} style={{backgroundColor: selected == 'Settings'?'rgb(241, 78, 78)':'rgba(240, 248, 255,0)'}}>Settings</Button>
            </Link>

            <Link to='/user/help' className='linkSideBar'  >
                <Button variant="light" className='button' size="lg" onClick={()=> selectedTab('Help')} style={{backgroundColor: selected == 'Help'?'rgb(241, 78, 78)':'rgba(240, 248, 255,0)'}}>Help</Button>
            </Link>

            <Link onClick={()=>logout()} className='linkSideBar'>
                <Button variant="light" className='button' size="lg" style={{backgroundColor:'rgba(240, 248, 255,0)'}} >Logout</Button>
            </Link>

            
        </Container>
    </React.Fragment>
  )

  
}
