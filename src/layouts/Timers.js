import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import * as actions from "../actions";
import { Timer } from "../components";
import { Button } from "../elements";

const Timers = ({ className, timers, openModal }) => {
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
      {mapTimersToComponents(timers)}
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
  width: 50%;
  padding: 1rem;
  margin: auto;
  text-align: center;
  .add-icon {
    margin-bottom: 0.5rem;
  }
  ${Timer} {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`);
