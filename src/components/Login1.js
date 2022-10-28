import React from "react";
import { loginFields } from "./formFields";
import Input from "./Input";
import FormAction from "./FormAction";

const fields = loginFields;
const fieldsState = {};
fields.forEach((field) => {
  fieldsState[field.name] = "";
});

function Login() {
  // USeState hook to set the state of the fields
  const [loginState, setLoginState] = React.useState(fieldsState);

  // handleChange to update the state of the fields when the user types
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  };

  // handleSubmit to handle the submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginState);
    // authenticateUser;
  };

  // Handle API to authenticate user
  // const authenticateUser = () => {};

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form__header">
        <h2>Login</h2>
        {fields.map((field) => {
          <Input
            key={field.name}
            name={field.name}
            type={field.type}
            id={field.id}
            placeholder={field.placeholder}
            labelText={field.labelText}
            labelFor={field.labelFor}
            value={loginState[field.name]}
            handleChange={handleChange}
            isRequired={field.isRequired}
          />;
        })}
      </div>
      <FormAction text="Continue" handleSubmit={handleSubmit} />
    </form>
  );
}

export default Login;
