import React from "react";
import styled from "styled-components";
import cn from "classnames";
const Input = ({
  children,
  placeholder,
  size,
  className,
  type = "text",
  name,
  value = "",
  setValue,
  onChange,
  onKeyDown,
}) => {
  const onChangeInput =
    onChange ||
    ((e) => {
      setValue(e.target.value);
    });
  const classCandiate = [size, className];
  const ectProps = {
    placeholder,
    type,
    name,
    value,
    onKeyDown,
    onChange: onChangeInput,
  };
  return (
    <StyledInput {...ectProps} className={cn(classCandiate)}>
      {children}
    </StyledInput>
  );
};

const StyledInput = styled.input`
  display: inline-block;
  border: 0.3px solid lightgray;
  &.small {
    min-height: 1.3em;
    font-size: 1rem;
    padding: 0.9em 1.2em;
  }
  &.normal {
    min-height: 1.8em;
    font-size: 1.2rem;
    padding: 0.7em 1.5em;
  }
  &.big {
    min-height: 2.1em;
    font-size: 1.8rem;
    padding: 0.26em 1.2em;
  }
`;

export default Input;
