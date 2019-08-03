import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import * as actions from "../actions";
import { Timer } from "../components";
import { Button } from "../elements";
import { Animation } from "../ui";

const Timers = props => {
  const { className, timers } = props;
  const { openModal } = props;
  const mapTimersToComponents = timers =>
    timers.map(timer => <Timer key={timer.id} timer={timer} />);
  return (
    <div className={className}>
      <Button.fa
        className="add-icon"
        icon={faPlus}
        size="lg"
        onClick={e => {
          e.preventDefault();
          openModal();
        }}
      />
      {timers.length > 0 ? (
        mapTimersToComponents(timers)
      ) : (
        <span className="empty-message">
          Please add your todo timers <br />
          Original Product by Sangjun
        </span>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  timers: state.TimerHandler.timers,
  displayModal: state.UIHandler.displayModal,
  modal: state.UIHandler.modal
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
  ${Timer} {
    width: 40%;
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`);
