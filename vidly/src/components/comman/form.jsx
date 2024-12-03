import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

const Form = ({ schema, doSubmit, children }) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    if (!error) return null;

    const validationErrors = {};
    error.details.forEach(item => {
      validationErrors[item.path[0]] = item.message;
    });
    return validationErrors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const propSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, propSchema);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const newErrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) newErrors[input.name] = errorMessage;
    else delete newErrors[input.name];

    const newData = { ...data };
    newData[input.name] = input.value;

    setData(newData);
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const validationErrors = validate();
    setErrors(validationErrors || {});
    if (validationErrors) {
      console.log("Validation Errors: ", validationErrors);
      return;
    }
  
    console.log("Form is valid. Submitting...");
    console.log("Form data:", data); // Check if data is being submitted correctly
    doSubmit();
  };
  
  

  const renderButton = (label) => {
    return (
      <button disabled={validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };

  const renderSelect = (name, label, options) => {
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={handleChange}
        error={errors[name]}
      />
    );
  };

  const renderInput = (name, label, type = "text") => {
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        onChange={handleChange}
        error={errors[name]}
        type={type}
      />
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {children({ renderInput, renderSelect, renderButton, data, errors })}
    </form>
  );
};

export default Form;
