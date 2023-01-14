import React , {useState, useEffect}  from 'react'
import { useMutation } from '@apollo/client';
import {Grid,Paper,Avatar, TextField, FormControlLabel,Typography,Checkbox} from '@mui/material'
import LockPersonIcon from '@mui/icons-material/LockPerson';
import {Link} from 'react-router-dom'
import{Form,Row,Col,Button} from 'react-bootstrap'
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

//import {useDispatch,useSelector} from 'react-redux'



const Login = (props) => {


const paperStyle={padding:20,height:'70vh',width:380, margin:"20px auto"}
const avatarStyle={backgroundColor:'#1bbd7e'}
const btnstyle={margin:'8px'}

const [formState, setFormState] = useState({ email: '', password: '' });
const [login, { error }] = useMutation(LOGIN);


const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  
const handleChange = (event) => {
    const { name, value } = event.target;
   /*  setFormState({
      ...formState,
      [name]: value,
    }); */
  };

  return (
    <Grid>
        
      <Paper elevation ={10} style={paperStyle}>
      <Grid align="center" className='py-4'>
      <Avatar style={avatarStyle}><LockPersonIcon/></Avatar>
        Sign in 
        </Grid>
        <form onSubmit={handleFormSubmit}>
        <TextField id="filled-basic" className='mr-3 py-2' label="Username" variant="filled"  placeholder='Email Address' fullWidth required  onChange={handleChange}/>
        <TextField id="filled-basic" type='password' className='mr-3' label="Password" variant="filled"  placeholder='*******' fullWidth required/>
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
                     <Link to='/signup' >
                        Sign Up 
                </Link>
                </Typography>

                </form>
      </Paper>
    </Grid>


  )
}

export default Login
