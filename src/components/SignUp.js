import React from "react";
import { signUpFields } from "./formFields";
import Input from "./Input";
import FormAction from "./FormAction";

const fields = signUpFields;
const fieldsState = {};
fields.forEach((field) => {
  fieldsState[field.name] = "";
});

function SignUp() {
  // USeState hook to set the state of the fields
  const [signUpState, setsignUpState] = React.useState(fieldsState);

  // handleChange to update the state of the fields when the user types
  const handleChange = (e) => {
    setsignUpState({ ...signUpState, [e.target.name]: e.target.value });
  };

  // handleSubmit to handle the submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpState);
    createAccount();
  };

  // Integrate API here...createAccount to create a new account.
  const createAccount = () => {};

  return (
    <form className="signUp-form" onSubmit={handleSubmit}>
      <div className="signUp-form__header">
        <h2>Create account</h2>
        {fields.map((field) => {
          <Input
            key={field.name}
            name={field.name}
            type={field.type}
            id={field.id}
            placeholder={field.placeholder}
            labelText={field.labelText}
            labelFor={field.labelFor}
            value={signUpState[field.name]}
            handleChange={handleChange}
            isRequired={field.isRequired}
          />;
        })}
      </div>
      <FormAction text="Continue" handleSubmit={handleSubmit} />
    </form>
  );
}

export default SignUp;
