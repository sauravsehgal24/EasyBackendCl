import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {
        backgroundColor:"#83cc7c",
        display: 'flex',
        flexDirection: "row",
        justifyContent:"flex-end",
      },
      button: {
        textTransform: "capitalize",
        marginRight:"2%",
      },
      buttonFuture: {
        textTransform: "capitalize",
        marginRight:"2%",
        backgroundColor:"#dce6de",
      },
  }));

  export default function NavBar() {

    const classes = useStyles();

        return (
            <React.Fragment>
                <div className={classes.root}>
                <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Button size="large" className={classes.button} color="inherit">Home</Button>
                    <Button size="large" className={classes.button} color="inherit">Developer</Button>
                    <Button size="large" className={classes.button} color="inherit">Usage</Button>
                    <Button size="large" className={classes.button} color="inherit">About</Button>
                    <Button variant='contained' size="large" className={classes.buttonFuture} >Features To Come.....</Button>
                </Toolbar>
                </AppBar>
                </div>
                 
            </React.Fragment>
        ); 
    
}

