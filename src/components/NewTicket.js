import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import { Card, Icon, Image } from 'semantic-ui-react';


function NewTicket(props) {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    categories: ""
  });

  const handleFormInput = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const valuesToPost = {
      ...formValues,
      status: "pending",
      student_id: props.userObject.user_id,
  
    }
    axiosWithAuth('student')
    .post(
      "/tickets", valuesToPost
      
    )
    .then(result => {
      console.log('post Message', result)
    })
    .catch(error => {
      console.log('post message error', error)
    })
    
    console.log(valuesToPost.student_id);
  }

  return (
    <Card>
      <h3>Add your request below:</h3>

      <form onSubmit={handleSubmit}>
        <div>
          Title
          <input
            type="text"
            placeholder="Request title"
            value={formValues.title}
            onChange={handleFormInput}
            name="title"
            required
          />
        </div>

        <label>
          Description
          <textarea
            name="description"
            value={formValues.description}
            onChange={handleFormInput}
            placeholder="Describe your request in detail. Help us help you."
            required
          />
        </label>

        <div>
          Categories
          <select name="categories" onChange={handleFormInput} value={formValues.categories} >
            <option value="">--Select a category--</option>
            <option value="javascript">Javascript</option>
            <option value="java">Java</option>
            <option value="ruby">ruby</option>
            <option value="backend">Backend</option>
            <option value="UX 1">UX 1</option>
          </select>
        </div>

        <button type="submit">Create New Request</button>
      </form>
  </Card>
  );
}

export default NewTicket;
