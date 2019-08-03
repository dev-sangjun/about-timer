import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import * as actions from "../actions";
import { Button } from "../elements";
import { validateForm } from "../utilities";
import { Shadow } from "../ui";

const Modal = props => {
  const { className, modal } = props;
  const { displayModal, updateModal, closeModal } = props;
  const { createTimer } = props;
  const handleCreateTimer = () => {
    const form = document.forms["timer-form"];
    if (validateForm(form)) {
      const { title, originalMinutes, originalSeconds } = form;
      createTimer(title.value, originalMinutes.value, originalSeconds.value);
      closeModal();
    }
  };
  const handleUpdateModal = (
    title = "",
    originalMinutes = "",
    originalSeconds = ""
  ) => {
    updateModal(title, originalMinutes, originalSeconds);
    const form = document.forms["timer-form"];
    form.title.value = title;
    form.originalMinutes.value = originalMinutes;
    form.originalSeconds.value = originalSeconds;
  };
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
              value={modal.title}
              onChange={e => {
                e.preventDefault();
                handleUpdateModal(
                  e.target.value,
                  modal.originalMinutes,
                  modal.originalSeconds
                );
              }}
            />
            <input
              type="text"
              name="originalMinutes"
              placeholder="Minutes"
              value={modal.originalMinutes}
              onChange={e => {
                e.preventDefault();
                handleUpdateModal(
                  modal.title,
                  e.target.value,
                  modal.originalSeconds
                );
              }}
            />
            <input
              type="text"
              name="originalSeconds"
              placeholder="Seconds"
              value={modal.originalSeconds}
              onChange={e => {
                e.preventDefault();
                handleUpdateModal(
                  modal.title,
                  modal.originalMinutes,
                  e.target.value
                );
              }}
            />
          </div>
          <ul className="error-messages" />
          <div className="buttons">
            <Button.fa
              className="save-icon"
              icon={faCheck}
              size="lg"
              onClick={e => {
                e.preventDefault();
                handleCreateTimer();
              }}
            />
            <Button.fa
              className="cancel-icon"
              icon={faTimes}
              size="lg"
              onClick={e => {
                e.preventDefault();
                closeModal();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  displayModal: state.UIHandler.displayModal,
  modal: state.UIHandler.modal
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styled(Modal)`
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
    -webkit-transition: all 800ms;
    transition: all 800ms;
  }
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 3rem);
    width: 50%;
    padding: 1rem;
    background-color: white;
    ${Shadow.card};
    opacity: 0;
    -webkit-transition: all 800ms;
    transition: all 800ms;
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
  .fade-in {
    opacity: 0.5;
  }
  .bounce-in {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`);
