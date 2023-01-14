import React , {useState, useEffect}  from 'react'
import {Grid,Paper,Avatar, TextField, FormControlLabel,Typography,Checkbox} from '@mui/material'
import LockPersonIcon from '@mui/icons-material/LockPerson';
import {Link} from 'react-router-dom'
import{Form,Row,Col,Button} from 'react-bootstrap'

//import {useDispatch,useSelector} from 'react-redux'


const paperStyle={padding:20,height:'70vh',width:380, margin:"20px auto"}
const avatarStyle={backgroundColor:'#1bbd7e'}
const btnstyle={margin:'8px'}

const handleChange = (event) => {
    const { name, value } = event.target;
   /*  setFormState({
      ...formState,
      [name]: value,
    }); */
  };

const Login = () => {
  return (
    <Grid>
        
      <Paper elevation ={10} style={paperStyle}>
      <Grid align="center" className='py-4'>
      <Avatar style={avatarStyle}><LockPersonIcon/></Avatar>
        Sign in 
        </Grid>

        <TextField id="filled-basic" className='mr-3 py-2' label="Username" variant="filled"  placeholder='Email Address' fullWidth required  onChange={handleChange}/>
        <TextField id="filled-basic"  className='mr-3' label="Password" variant="filled"  placeholder='Email Address' fullWidth required/>
        <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button as="input"variant='primary' type="submit" value="Sign in" className='m-4'/>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>


      </Paper>
    </Grid>


  )
}

export default Login
