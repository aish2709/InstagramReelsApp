import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import './Signup.css'
import insta from '../Assets/Instagram.JPG'
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Link} from 'react-router-dom'

export default function Signup() {
    const useStyles = makeStyles({
        text1:{
            color:'grey',
            textAlign:'center'
        },
        card2:{
            height:'8vh',
            textAlign:'center'
        }
    })
    const classes = useStyles();
  return (
    <div className='signupWrapper'>
    <div className='signupCard'>
         <Card variant='outlined'>
         <div className='insta-logo'>
            <img src={insta} alt=''/>
            </div>
            <CardContent>
            <Typography variant="subtitle1" className={classes.text1}>
               Signup to see photos & videos from your friends
            </Typography>
            {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin='dense' size='small'/>
            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin='dense' size='small'/>
            <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin='dense' size='small'/>
            <Button variant='outlined' color="secondary" fullWidth={true} margin='dense' startIcon={<CloudUploadIcon/>} component='label'>
            Upload Profile Image
            <input type='file' accept='image/' hidden></input>
            </Button>
            </CardContent>
        <CardActions>
            <Button  variant='contained' fullWidth={true} color="primary">
            Sign up
            </Button>
        </CardActions>
        <CardContent>
            <Typography variant="subtitle1" className={classes.text1}>
               By signing up, you agreeto our Terms, Data Policy and Cookie Policy. 
            </Typography>
            </CardContent>
    </Card>
    <Card variant='outlined' className={classes.card2}>
        <CardContent>
        <Typography variant="subtitle1" className={classes.text1}>
               Having an account ? <Link to="/login" style={{textDecoration:'none'}}>Login</Link>  
            </Typography>
        </CardContent>
    </Card>
    </div>
    </div>
  );
}
