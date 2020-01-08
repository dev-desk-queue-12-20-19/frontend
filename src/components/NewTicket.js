import React, { useState } from "react";

function NewTicket() {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    category: ""
  });

  return (
    <div>
      <h3>Add your request below:</h3>
      <form onSubmit={null}>
        <div>
          Title
          <input
            type="text"
            placeholder="Request title"
            onChange={null}
            name="title"
            required
          />
        </div>

        <div>
          Description
          <input
            type="text"
            placeholder="Describe your request"
            onChange={null}
            name="description"
            required
          />
        </div>

        <div>
          Categories
          <select name="category">
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
