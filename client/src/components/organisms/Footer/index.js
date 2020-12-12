import React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <StyleDiv className="text-center p-2">
      <Row>
        <Col>
          <p>
            Copyright &copy; <span>{thisYear()}</span>
          </p>
        </Col>
      </Row>
    </StyleDiv>
  );
};

const StyleDiv = styled.div`
  background: #343a40;
  color: #ffffff;
  font-size: 1.2rem;
`;

export default Footer;
