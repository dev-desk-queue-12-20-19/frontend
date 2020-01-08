import React, { useState } from "react";

function NewTicket() {
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
    console.log(formValues);
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
            onChange={handleFormInput}
            name="title"
            required
          />
        </div>

        <div>
          Description
          <input
            type="text"
            placeholder="Describe your request"
            onChange={handleFormInput}
            name="description"
            required
          />
        </div>

        <div>
          Categories
          <select name="category" onChange={handleFormInput}>
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
