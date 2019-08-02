import React from "react";
import styled from "styled-components";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Animation } from "../ui";
import { Button } from "../elements";

const Modal = ({ className }) => {
  return (
    <div className={className}>
      <div className="modal-bg" />
      <div className="modal-content">
        <form className="timer-form" name="timerForm">
          <div className="inputs">
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Minutes" />
            <input type="text" placeholder="Seconds" />
          </div>
          <div className="buttons">
            <Button.fa className="save-icon" icon={faCheck} size="lg" />
            <Button.fa className="cancel-icon" icon={faTimes} size="lg" />
          </div>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {};

Modal.defaultProps = {};

export default styled(Modal)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  .modal-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.5;
    animation: ${Animation.fadeIn} 300ms ease-in-out;
  }
  .active {
    opacity: 0.5;
  }
  .bounce-in {
    transform: translate(-50%, -50%);
  }
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100px);
    width: 50%;
    height: 30%;
    padding: 0.5rem;
    background-color: white;
    opacity: 0;
    -webkit-transition: opacity 300ms;
    transition: opacity 300ms;
    .timer-form {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      input[type="text"] {
        width: 100%;
        height: 2rem;
        font-size: 1rem;
        padding: 0 0.5rem;
        margin-bottom: 0.5rem;
        &:last-child {
          margin-bottom: 0;
        }
        &:focus {
          outline: none;
        }
      }
      .buttons {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        ${Button.fa} {
          margin-right: 0.5rem;
          &:last-child {
            margin-right: 0;
          }
        }
        .save-icon {
          color: lightGreen;
        }
        .cancel-icon {
          color: lightCoral;
        }
      }
    }
  }
`;
