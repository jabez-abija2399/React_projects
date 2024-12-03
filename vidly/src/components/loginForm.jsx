import React, { useState } from "react";
import Joi from "joi-browser";
import Form from "./comman/form";

const LoginForm = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  return (
    <Form schema={schema} doSubmit={doSubmit}>
      {({ renderInput, renderButton }) => (
        <div>
          <h1>Login</h1>
          <form onSubmit={doSubmit}>
            {renderInput("username", "Username")}
            {renderInput("password", "Password", "password")}
            {renderButton("Login")}
          </form>
        </div>
      )}
    </Form>
  );
};

export default LoginForm;
