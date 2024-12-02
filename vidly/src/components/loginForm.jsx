import React, { Component } from "react";
import Input from "./comman/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    // Event handler
    e.preventDefault(); // Prevent the default behavior of the form

    // Call the server
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    // Destructure the event object
    const account = { ...this.state.account }; // Clone the state
    account[input.name] = input.value; // Update the state
    this.setState({ account }); // Set the state
  };

  render() {
    const { account } = this.state; // Destructure the state

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
          />

          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
