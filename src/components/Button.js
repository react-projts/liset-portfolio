import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled.div`
  appearance: none;
  background-color: transparent;
  /* border: 2px solid #1a1a1a; */
  border: 3px solid rgba(109, 109, 119, 0.5);
  border-radius: 15px;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  /* font-size: 16px; */
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
  width: fit-content;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #fff;
    /* background-color: #1a1a1a; */
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
    background: -webkit-linear-gradient(93deg, #00dbde 0%, #fc00ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: none;
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export default Button;
