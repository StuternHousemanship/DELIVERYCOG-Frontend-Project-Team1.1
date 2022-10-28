/* eslint-disable react/function-component-definition */
import React from "react";

const InputClass = "";

const Input = ({
  name,
  type,
  id,
  placeholder,
  labelText,
  labelFor,
  value,
  handleChange,
  isRequired = false,
  customClass,
}) => {
  return (
    <div>
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required={isRequired}
        className={InputClass + customClass}
      />
    </div>
  );
};

export default Input;
