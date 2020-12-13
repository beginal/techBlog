import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Button,
  Form,
  Modal,
  ModalBody,
  ModalHeader,
  NavLink,
} from "reactstrap";
import { CLEAR_ERROR_REQUEST } from "redux/types";

const Modals = ({ text, children, onSubmit }) => {
  const [modal, setModal] = useState(false);
  const [localMsg, setLocalMsg] = useState("");

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

  return (
    <div>
      <NavLink onClick={handleToggle} href="#">
        {text}
      </NavLink>
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>{text}</ModalHeader>
        <ModalBody>
          {localMsg ? <Alert color="danger">{localMsg}</Alert> : null}
          <Form onSubmit={onSubmit}>
            {children}
            <Button color="dark" className="mt-2" block>
              {text}
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Modals;
