import React, { Component } from "react";

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
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              value={this.state.account.username}
              onChange={this.handleChange}
              name="username"
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={this.state.account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="password"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
