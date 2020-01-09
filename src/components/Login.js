import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button, Grid, Segment, Message } from 'semantic-ui-react';

import axios from 'axios'

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const onSubmit = e => {
    e.preventDefault();

    console.log(credentials);
    
    axios
      .post(
        "https://devdesk-queue-2020.herokuapp.com/api/auth/login",
        credentials
      )
      .then(result => {
        console.log("post login", result);
        console.log("login props", props);

        localStorage.setItem("token", result.data.token);
        sessionStorage.setItem("userDetails", JSON.stringify(result.data));
        props.history.push("/dashboard");

      })
      .catch(error => console.log("login post error", error));
  };

  const handleChange = e => {
    // console.log(e);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <h1>Dev Desk</h1>
      <Form size='large' onSubmit={onSubmit}>
      <Segment stacked>
        <Form.Input
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleChange}
        />

        <br></br>

        <Form.Input
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChange}
        />

        <br></br>

        <Button color='teal' fluid size='large'>login</Button>
        </Segment>
        <Message>New User? <Link to="/register">Register </Link></Message>

      </Form>
      </Grid.Column>
  </Grid>
  );
};

export default Login;
