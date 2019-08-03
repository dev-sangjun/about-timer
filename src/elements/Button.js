import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Shadow } from "../ui";

const getSize = size => {
  switch (size) {
    case "sm":
      return 16;
    case "md":
      return 24;
    case "lg":
      return 32;
    default:
      return 16;
  }
};
const fa = ({ className, icon, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon className="fa-icon" icon={icon} />
    </div>
  );
};

const Button = {
  fa: styled(fa)`
    position: relative;
    display: inline-block;
    width: ${({ size }) => getSize(size)}px;
    height: ${({ size }) => getSize(size)}px;
    border-radius: ${({ size }) => getSize(size) / 4}px;
    &:hover {
      cursor: pointer;
    }
    &:active {
      transform: translate(0, 0.125rem);
      ${Shadow.inset}
    }
    .fa-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      padding: 0.25rem;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
    }
  `
};

export default Button;
