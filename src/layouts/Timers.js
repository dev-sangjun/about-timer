import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import * as actions from "../actions";
import { Timer } from "../components";
import { Button } from "../elements";

const Timers = ({ className, timers }) => {
  const mapTimersToComponents = timers => timers.map(timer => <Timer />);
  return (
    <div className={className}>
      <Button.fa className="add-icon" icon={faPlus} size="lg" />
      {mapTimersToComponents(timers)}
    </div>
  );
};

const mapStateToProps = state => ({
  timers: state.TimerHandler.timers
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
