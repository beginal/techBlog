import React from "react";
import { Input, Label } from "reactstrap";

const LabelInput = ({ label, name, onChange }) => {
  const type = () => {
    switch (name) {
      case "email": {
        return "email";
      }
      case "password": {
        return "password";
      }
      default:
        return "text";
    }
  };
  return (
    <div>
      <Label for={name}>{label}</Label>
      <Input
        type={type()}
        name={name}
        id={name}
        placeholder={label}
        onChange={onChange}
      />
    </div>
  );
};

export default LabelInput;
