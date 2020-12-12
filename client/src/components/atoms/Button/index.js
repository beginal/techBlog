import React from "react";
import styled from "styled-components";
import cn from "classnames";

const Button = ({
  children,
  color = "black",
  bgColor = "white",
  size,
  className,
  type = "button",
  name,
  onClick,
  disabled = false,
}) => {
  const classCandiate = [size, className];
  const ectProps = {
    type,
    name,
    size,
    color,
    bgColor,
  };
  return (
    <StyledButton
      {...ectProps}
      onClick={onClick}
      className={cn(classCandiate)}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: stretch;
  border-radius: 3.7px;
  border: 0.7px solid black;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  cursor: pointer;
  outline: none;
  &.small {
    padding: 7px 7px;
    font-size: 1rem;
  }
  &.normal {
    padding: 10px 10px;
    font-size: 1.2rem;
  }
  &.big {
    padding: 14px 14px;
    font-size: 1.4rem;
  }
`;

export default Button;
