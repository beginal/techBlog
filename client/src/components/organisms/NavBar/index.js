import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  Container,
  NavbarToggler,
  Collapse,
  NavLink,
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
              {isAuthenticated ? (
                <NavLink onClick={onLogout} href="#">
                  Logout
                </NavLink>
              ) : (
                <>
                  <LoginModal />
                  <RegisterModal />
                </>
              )}
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
