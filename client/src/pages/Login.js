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
import { Form, Row, Col, Button, Container } from "react-bootstrap";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

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
    <Container>
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
          label="Username"
          variant="outlined"
          onChange={handleChange}
          placeholder="Email Address"
          fullWidth
          required
        />
        <br />
        <br />
        <br />
        <TextField
          id="password"
          name="password"
          type="password"
          label="Password"
          onChange={handleChange}
          variant="outlined"
          placeholder="*******"
          fullWidth
          required
        />
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}

        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <div align="center">
          <span className="m-4">
            <Button variant="success" className="" type="submit">
              Login
            </Button>
          </span>
          Don't have an account ?{" "}
          <span className="m-4">
            <Button variant="success" className="" type="submit" href="/signup">
              Sign up
            </Button>
          </span>
        </div>

        <Typography className="p-5">
          <Link href="#">Forgot password ?</Link>
        </Typography>
      </form>
    </Container>
  );
}

export default Login;
