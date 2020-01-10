import React, { useState } from "react";

import { Card, Grid, Button, Segment, Form, TextArea } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import tokenDecode from '../utils/tokenDecode';
import axiosWithAuth from '../utils/axiosWithAuth';

function NewTicket(props) {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    categories: ""
  });

  const options = [
    {key: 'j', text: 'Javascipt', value:'javascript'},
    {key: 'v', text: 'Java', value:'java'},
    {key: 'r', text: 'Ruby', value:'ruby'},
    {key: 'b', text: 'Backend', value:'backend'},
    {key: 'u', text: 'UX 1', value:'ux 1'},
  ]

  const handleSelectChange = (e, data) => {
    // console.log(data);
    setFormValues({
      ...formValues,
      [data.name]: data.value
    })
  }

  const handleFormInput = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const tokenObj = tokenDecode();

    const valuesToPost = {
      ...formValues,
      status: "pending",

      student_id: tokenObj.subject.toString()
    };
    console.log("ticket values to post", valuesToPost);
    console.log("ticket values to post", tokenObj);

    axiosWithAuth("student")
      .post("/tickets", valuesToPost)
      .then(result => {
        console.log("post Message", result);
        props.history.push("/dashboard");
      })
      .catch(error => {
        console.log("post message error", error);
      });
  };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
  
      <h3>Add your request below:</h3>

      <Form sizw='large'  onSubmit={handleSubmit}>
      <Segment stacked>

          <h1>Title</h1>
          <Form.Input
            type="text"
            placeholder="Request title"
            value={formValues.title}
            onChange={handleFormInput}
            name="title"
            required
          />
        

        
          <h2>Description</h2>
          <TextArea
            name="description"
            value={formValues.description}
            onChange={handleFormInput}
            placeholder="Describe your request in detail. Help us help you."
            required
          />     
   
         <h2> Categories</h2>
          <Form.Select
            type="Categories"
            name="Categories"
            options={options}
            placeholder="Role"
            value={formValues.options}
            onChange={handleSelectChange}
            required
          />        

<Button type="submit">Create New Request</Button>

      </Segment>
      </Form>
      </Grid.Column>
      </Grid>
  
  );
}

const NewTicketWithRouter = withRouter(NewTicket);

export default NewTicketWithRouter;
