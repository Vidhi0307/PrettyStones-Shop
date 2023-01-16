import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Typography,
  Checkbox,
} from "@mui/material";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { Form, Row, Col, Button } from "react-bootstrap";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 380,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px" };

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
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center" className="py-4">
          <Avatar style={avatarStyle}>
            <LockPersonIcon />
          </Avatar>
          Sign in
        </Grid>
        <form onSubmit={handleFormSubmit}>
          <TextField
            id="email"
            name="email"
            type="email"
            className="mr-3 py-2"
            label="Username"
            variant="filled"
            onChange={handleChange}
            placeholder="Email Address"
            fullWidth
            required
          />
          <TextField
            id="password"
            name="password"
            type="password"
            className="mr-3"
            label="Password"
            onChange={handleChange}
            variant="filled"
            placeholder="*******"
            fullWidth
            required
          />
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}

          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <div className="m-4">
            <Button  variant="success" className="" type="submit">Login</Button>
          </div>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account ?<Link to="/signup" >Sign Up</Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
}

export default Login;
