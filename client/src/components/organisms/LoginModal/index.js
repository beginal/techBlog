import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { LOGIN_REQUEST } from "redux/types";
import { Modals, LabelInput } from "components";
const LoginModal = () => {
  const [form, setValues] = useState({
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
    const { email, password } = form;
    const user = { email, password };
    console.log(user);
    dispatch({
      type: LOGIN_REQUEST,
      payload: user,
    });
  };
  return (
    <Modals onSubmit={onSubmit} text="LogIn">
      <LabelInput type="email" name="email" label="Email" onChange={onChange} />
      <LabelInput name="password" label="Password" onChange={onChange} />
    </Modals>
  );
};

export default LoginModal;
