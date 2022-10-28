// This file is created to hold all input fields props like placeholder, value, name, type, and so on. This file is created to hold all input fields props like placeholder, value, name, type, and so on.

const signUpFields = [
  {
    name: "firstname",
    id: "firstname",
    type: "text",
    placeholder: "Firstname",
    labelText: "Firstname",
    labelFor: "firstname",
    autoComplete: "firstname",
    isRequired: true,
  },
  {
    name: "lastname",
    id: "lastname",
    type: "text",
    placeholder: "Lastname",
    labelText: "Lastname",
    labelFor: "lastname",
    autoComplete: "lastname",
    isRequired: true,
  },
  {
    name: "email",
    id: "email",
    type: "email",
    placeholder: "Email",
    labelText: "Email",
    labelFor: "email",
    autoComplete: "email",
    isRequired: true,
  },
  {
    name: "mobile",
    id: "mobile",
    type: "tel",
    labelText: "Mobile",
    labelFor: "mobile",
    autoComplete: "mobile",
    isRequired: true,
  },
  {
    name: "password",
    id: "password",
    type: "password",
    placeholder: "Password",
    labelText: "Password",
    labelFor: "password",
    autoComplete: "password",
    isRequired: true,
  },
  {
    name: "confirm-password",
    id: "confirm-password",
    type: "password",
    placeholder: "Confirm Password",
    labelText: "Confirm Password",
    labelFor: "confirm-password",
    autoComplete: "confirm-password",
    isRequired: true,
  },
];

const loginFields = [
  {
    name: "email",
    id: "email",
    type: "email",
    placeholder: "Email",
    labelText: "Email",
    labelFor: "email",
    autoComplete: "email",
    isRequired: true,
  },
  {
    name: "password",
    id: "password",
    type: "password",
    placeholder: "Password",
    labelText: "Password",
    labelFor: "password",
    autoComplete: "password",
    isRequired: true,
  },
];

export { signUpFields, loginFields };
