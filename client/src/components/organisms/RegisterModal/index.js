import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Button,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  NavLink,
} from "reactstrap";
import { CLEAR_ERROR_REQUEST, REGISTER_REQUEST } from "redux/types";

const RegisterModal = () => {
  const [modal, setModal] = useState(false);
  const [localMsg, setLocalMsg] = useState("");
  const [form, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { errorMsg } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      setLocalMsg(errorMsg);
    } catch (e) {
      console.log(e);
    }
  }, [errorMsg]);

  const handleToggle = () => {
    dispatch({
      type: CLEAR_ERROR_REQUEST,
    });
    setModal(!modal);
  };

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
    <div>
      <NavLink onClick={handleToggle} href="#">
        SignUp
      </NavLink>
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>SignUp</ModalHeader>
        <ModalBody>
          {localMsg ? <Alert color="danger">{localMsg}</Alert> : null}
          <Form onSubmit={onSubmit}>
            <Label>name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={onChange}
            />
            <Label>email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={onChange}
            />
            <Label>password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={onChange}
            />
            <Button color="dark" className="mt-2" block>
              SignUp
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RegisterModal;
