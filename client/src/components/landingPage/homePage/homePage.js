import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import LoginForm from '../loginForm/LoginForm';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    grid: {
       padding:'5%',
       height:'90vh',
      },
      item:{
       
        display:'flex',
        flexDirection:"row",
        justifyContent:"flex-end" ,
      
      }
      
   
  }));

export default function HomePage() {
 
       const classes = useStyles();

        return (
            <React.Fragment>
                <Grid className={classes.grid} container >
                    <Grid item sm={12} xs={12} md={6} lg={6}>
                        <Typography>EasyBackEndCL</Typography>
                    </Grid>
                    <Grid className={classes.item}  item s={12} xs={12} md={6} lg={6}>
                        <LoginForm />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
}

