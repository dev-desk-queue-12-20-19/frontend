import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Grid, Segment } from 'semantic-ui-react';

const Registration = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    role: ""
  });

  const [fire, setFire] = useState(false);


  const [fire, setFire] = useState(
    false
  )
  const options = [
    {key: 's', text: 'Student', value: 'student'},
    {key: 'h', text: 'helper', value: 'helper'},
  ]
    

    
  

 function handleChange(event) {

    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
    // console.log(form)
  }
  // function handleChange1(event) {
  //   setForm({
  //     //...form, username: event.target.value
  //   });
  //   console.log(form)
  // }

  function handleSubmit(event) {
    event.preventDefault();
    setFire(true);
    console.log(form);
  }

  if (fire) {
    console.log(form);
    axios
      .post("https://devdesk-queue-2020.herokuapp.com/api/auth/register", form)

      .then(response => {
        if (response.statusText === "Created") {
          setFire(false);

          alert(response.statusText);
          console.log(response);
        }
      })
      .catch(error => {
        // this.setState({ fire: false });
        console.log("registration error", error);
      });
  }


  
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form size='large'  onSubmit={handleSubmit}>
        
          <Segment stacked>
          <Form.Input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <Form.Input
            type="username"
            name="username"
            placeholder="User name"
            value={form.username}
            onChange={handleChange}
            required
          />

          <Form.Input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <Form.Select
            type="role"
            name="role"
            options={options}
            placeholder="Role"
            value={form.role.options}
            onChange={handleChange}
            required
          />

<Button color='teal' fluid size='large' >Register</Button>
          </Segment>
          
        
        
       

      </Form>
      </Grid.Column>
      </Grid>
    );
}


export default Registration;