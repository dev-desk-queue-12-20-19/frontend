import React, { useState } from "react";


function NewTicket(props) {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    category: ""
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
      student_id: props.userObject.user_id
    }

    console.log(valuesToPost.student_id);
  }

  return (
    <div>
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
          <select name="category" onChange={handleFormInput} value={formValues.category} >
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
    </div>
  );
}

export default NewTicket;
