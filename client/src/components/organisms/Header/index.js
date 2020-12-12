import React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import img from "assets/img/header.png";

const Header = () => {
  return (
    <StyleDiv className="mb-3">
      <Row>
        <Col md="6" sm="auto" className="text-center m-auto">
          <h1>TechBlog</h1>
          <p>Beginal is TechBlog</p>
        </Col>
      </Row>
    </StyleDiv>
  );
};

const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  color: #fff;
  border-bottom: 1px solid #eee;
  h1 {
    font-size: 4rem;
    padding: 10px 0;
  }
  p {
    font-size: 1.2rem;
    color: #ddd;
  }
`;

export default Header;
