import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      role: "",
      registrationErrors: "",
      fire: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, username, password, role } = this.state;
    this.setState({ fire: true });
    if (this.state.fire) {
      axios
        .post("https://devdesk-queue.herokuapp.com/api/auth/register", {
          email: email,
          username: username,
          password: password,
          role: role
        })

        .then(response => {
          if (response.data.status === "created") {
            this.props.handleSuccessfulAuth(response.data);
            this.setState({ fire: false });
          }
        })
        .catch(error => {
          this.setState({ fire: false });
          console.log("registration error", error);
        });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="username"
            name="username"
            placeholder="User name"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <input
            type="role"
            name="role"
            placeholder="Role"
            value={this.state.role}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
