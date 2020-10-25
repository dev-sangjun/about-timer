import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { Done, Close } from "@material-ui/icons";
import * as actions from "../actions";
import { Button } from "../elements";
import { validateForm } from "../utilities";
import { Shadow } from "../ui";

const Modal = props => {
  const { className, modal } = props;
  const { displayModal, closeModal } = props;
  const { createTimer, updateTimer } = props;
  const [title, setTitle] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const onClick = e => {
    e.preventDefault();
    const form = document.forms["timer-form"];
    if (validateForm(form)) {
      if (modal.id !== undefined) {
        updateTimer(modal.id, title, minutes, seconds);
      } else {
        createTimer(title, minutes, seconds);
      }
      closeModal();
    }
  };
  useEffect(() => {
    setTitle(modal.title);
    setMinutes(modal.originalMinutes);
    setSeconds(modal.originalSeconds);
  }, [modal]);
  return (
    <div className={`${className} ${displayModal ? "visible" : "collapse"}`}>
      <div
        className={`modal-bg ${displayModal && "fade-in"}`}
        onClick={e => {
          e.preventDefault();
          closeModal();
        }}
      />
      <div className={`modal-content ${displayModal && "bounce-in"}`}>
        <form className="timer-form" name="timer-form">
          <div className="inputs">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
            <input
              type="text"
              name="originalMinutes"
              placeholder="Minutes"
              value={minutes}
              onChange={e => {
                setMinutes(e.target.value);
              }}
            />
            <input
              type="text"
              name="originalSeconds"
              placeholder="Seconds"
              value={seconds}
              onChange={e => {
                setSeconds(e.target.value);
              }}
            />
          </div>
          <ul className="error-messages" />
          <div className="buttons">
            <IconButton onClick={onClick}>
              <Done />
            </IconButton>
            <IconButton
              onClick={e => {
                e.preventDefault();
                closeModal();
              }}
            >
              <Close />
            </IconButton>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  displayModal: state.UIHandler.displayModal,
  modal: state.UIHandler.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styled(Modal)`
  font-family: "Open Sans", sans-serif;
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
    opacity: 0;
    -webkit-transition: all 400ms ease-in-out;
    transition: all 400ms ease-in-out;
  }
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 3rem);
    padding: 1.5rem;
    background-color: white;
    border-radius: 1rem;
    ${Shadow.card};
    opacity: 0;
    -webkit-transition: all 400ms ease-in-out;
    transition: all 400ms ease-in-out;
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
      .error-messages {
        width: 100%;
        padding: 0 0.5rem;
        margin: 0.5rem 0;
        text-align: left;
        color: red;
        li {
          line-height: 1.5rem;
        }
      }
      .buttons {
        width: 100%;
        display: flex;
        justify-content: center;
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
  .fade-in {
    opacity: 0.5;
  }
  .bounce-in {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`);
