import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import * as actions from "../actions";
import { Timer } from "../components";
import { Animation } from "../ui";

const Timers = props => {
  const { className, timers } = props;
  const { openModal } = props;
  const mapTimersToComponents = timers =>
    timers.map(timer => <Timer key={timer.id} timer={timer} />);
  return (
    <div className={className}>
      <IconButton
        onClick={e => {
          e.preventDefault();
          openModal();
        }}
      >
        <Add />
      </IconButton>
      <ul className="timers">
        {timers.length > 0 ? (
          mapTimersToComponents(timers)
        ) : (
          <span className="empty-message">
            Please add your todo timers <br />
            Original Product by Sangjun
          </span>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  timers: state.TimerHandler.timers,
  displayModal: state.UIHandler.displayModal,
  modal: state.UIHandler.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styled(Timers)`
  width: 100%;
  padding: 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .add-icon {
    margin-bottom: 0.5rem;
  }
  .empty-message {
    font-size: 1.5rem;
    font-family: "Major Mono Display", monospace;
    line-height: 3rem;
    animation: ${Animation.fadeIn} 2s forwards;
  }
  .timers {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    ${Timer} {
      width: 80%;
      max-width: 30rem;
      margin-bottom: 1rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`);
