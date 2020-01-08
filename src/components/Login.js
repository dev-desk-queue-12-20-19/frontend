import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
        props.setUserObject(result.data)
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
    <>
      <h1>Dev Desk</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleChange}
        />

        <br></br>

        <input
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChange}
        />

        <br></br>

        <button>login</button>
        <p>New User? <Link to="/register">Register </Link></p>
      </form>
    </>
  );
};

export default Login;
