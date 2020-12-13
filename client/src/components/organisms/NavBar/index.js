import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  Container,
  NavbarToggler,
  Collapse,
  NavLink,
  Form,
  NavItem,
  Button,
} from "reactstrap";
import styled from "styled-components";
import { LoginModal } from "components";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_REQUEST } from "redux/types";
import RegisterModal from "../RegisterModal";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, userRole } = useSelector(
    (state) => state.auth,
  );
  console.log(userRole, ">>> userRole");
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  }, [dispatch]);

  useEffect(() => {
    setIsOpen(false);
  }, [user]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const addPostClick = () => {};

  const authLink = (
    <>
      <NavItem>
        {userRole === "Admin" ? (
          <Form className="col mt-2">
            <Link
              to="post"
              className="btn btn-success block text-white px-3"
              onClick={addPostClick}
            >
              Add Post
            </Link>
          </Form>
        ) : (
          ""
        )}
      </NavItem>
      <NavItem className="d-flex justify-content-center">
        <Form className="col mt-2">
          {user?.name ? (
            <Link to="#">
              <Button outline color="lignt" className="px-3" block>
                <strong>{user ? `welcome ${user.name}` : ""}</strong>
              </Button>
            </Link>
          ) : (
            <Button outline color="lignt" className="px-3" block>
              <strong>Find Not User</strong>
            </Button>
          )}
        </Form>
      </NavItem>
      <NavItem>
        <Form className="col">
          <Link onClick={onLogout} to="#">
            <Button outline color="light" className="mt-2" block>
              LogOut
            </Button>
          </Link>
        </Form>
      </NavItem>
    </>
  );

  const gusetLink = (
    <>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </>
  );

  return (
    <StyleDiv>
      <Navbar color="dark" dark expand="lg" className="sticky-top">
        <Container>
          <NavbarToggler onClick={handleToggle} />
          <Link to="/" className="text-white">
            Side Project's Blog
          </Link>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto d-flex justfy-content-around" navbar>
              {isAuthenticated ? authLink : gusetLink}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </StyleDiv>
  );
};

const StyleDiv = styled.div`
  h1 {
    color: #fff;
  }
`;

export default NavBar;
