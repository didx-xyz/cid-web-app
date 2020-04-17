import React from "react";
import styled, { css } from "styled-components";

const Label = styled.label`
  font-size: 17px;
  color: #654cf0;
  font-weight: bold;
  height: 25px;
  width: 100%;
  text-align: left;
`;

const ErrorMessage = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #e90000;
  opacity: 0;
  transition: 0.2s ease-out;
  padding-top: 8px;
  text-align: right;
  font-style: italic;

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
    `}
`;

const FormLabel = ({ name, error, description }) => (
  <Label htmlFor={name}>
    {description} <ErrorMessage show={error}>{error}</ErrorMessage>
  </Label>
);

export default FormLabel;