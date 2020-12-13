import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { REGISTER_REQUEST } from "redux/types";
import { Modals, LabelInput } from "components";

const RegisterModal = () => {
  const [form, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = form;
    const newUser = { name, email, password };
    console.log(newUser);
    dispatch({
      type: REGISTER_REQUEST,
      payload: newUser,
    });
  };

  return (
    <Modals onSubmit={onSubmit} text="SignUp">
      <LabelInput name="name" label="Name" onChange={onChange} />
      <LabelInput name="email" label="Email" onChange={onChange} />
      <LabelInput name="password" label="Password" onChange={onChange} />
    </Modals>
  );
};

export default RegisterModal;
