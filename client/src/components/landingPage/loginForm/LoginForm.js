import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles(theme => ({
    card: {
        width: '65%',
        height: '100%',
        boxShadow:'9px 9px 20px rgba(0, 0, 0, 0.25), -12px -12px 30px #EDFFF0',
      },
   button:{
       backgroundColor:'#e6ebe7',
       width:'95%',
       boxShadow:'3px 3px 10px rgba(0, 0, 0, 0.25)',
       textTransform: "capitalize",
   },
   buttonLogin:{
    backgroundColor:'#d3ede0',
    textTransform: "capitalize",
    width:'95%',
    boxShadow:'3px 3px 10px rgba(0, 0, 0, 0.25)',
   },
   loginButtonFlex:{
    display:'flex',
    flexDirection:'column',
    marginTop:'7%',
   },
   formFlex:{
       display:'flex',
       flexDirection:'column',
   },
   textField:{
       height:'20px',
       width:'100%',
       marginTop:'12%',
   },
   grid:{
       height:'100%',
   },
   cardHeader:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#e6ebe7',
   },
  }));

  export default function LoginForm() {

    const classes = useStyles();

        return (
            <React.Fragment>
                 <Card className={classes.card}>  
                 
                    <Grid className={classes.grid} container> 

                        <Grid  item md={12} sm={12} lg={12} xs={12}>
                        <CardHeader className={classes.cardHeader} title='Join'/>
                        <CardContent >
                        <form  className={classes.formFlex} noValidate autoComplete="off">
                            <TextField required md={12} sm={12} lg={12} xs={12} className={classes.textField}  label="Email" variant="outlined" />
                            <TextField required md={12} sm={12} lg={12} xs={12} className={classes.textField} label="Username" variant="outlined" />
                            <TextField required md={12} sm={12} lg={12} xs={12} className={classes.textField} label="New Password" variant="outlined" />
                        </form>
                        </CardContent>

                        <CardActions className={classes.loginButtonFlex}>
                                <Button className={classes.button} size="large" variant="contained">SignUp</Button>
                                <Typography style={{margin:'2%'}} variant='body'>OR</Typography>
                                <Button className={classes.buttonLogin} size="large" variant="contained">Already SignedUp</Button>'
                        </CardActions>
                        
                        </Grid>

                        


                    </Grid> 
                </Card>
                
            </React.Fragment>
        ); 
    
}

