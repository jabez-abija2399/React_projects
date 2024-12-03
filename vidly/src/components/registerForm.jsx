import React, { Component, useState } from "react";
import Joi from "joi-browser";
import Form from "./comman/form";

const RegistrationFrom = () => {
  const [data, setData] = useState({ username: "", password: "", name: "" });
  const [errors, setErrors] = useState({});
  const schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
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
            {renderInput("name", "Name")}
            {renderButton("Register")}
          </form>
        </div>
      )}
    </Form>
  );
};

export default RegistrationFrom;
