import React, { Component } from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  faCog,
  faTimes,
  faPlay,
  faRedo
} from "@fortawesome/free-solid-svg-icons";
import * as actions from "../actions";
import { Button } from "../elements";
import { Shadow } from "../ui";

class Timer extends Component {
  render() {
    const { className, timer } = this.props;
    const { id, title, minutes, seconds } = timer;
    const { deleteTimer } = this.props;
    return (
      <div className={className}>
        <div className="top-bar">
          <span className="title">{title}</span>
          <div className="buttons">
            <Button.fa icon={faCog} size="sm" />
            <Button.fa
              icon={faTimes}
              size="sm"
              onClick={e => {
                e.preventDefault();
                if (
                  window.confirm(`Are you sure you want to delete ${title}?`)
                ) {
                  deleteTimer(id);
                }
              }}
            />
          </div>
        </div>
        <div className="bottom-container">
          <span className="time-display">
            {minutes}:{seconds}
          </span>
          <div className="buttons">
            <Button.fa icon={faPlay} size="md" />
            <Button.fa icon={faRedo} size="md" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.UIHandler.modal
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styled(Timer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  ${Shadow.card}
  .top-bar {
    width: 100%;
    padding: 0.25rem 0.25rem 0.25rem 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    .title {
      position: relative;
      top: 0.125rem;
      left: 0;
      font-size: 0.75rem;
    }
    .buttons {
      display: flex;
      ${Button.fa} {
        margin-right: 0.25rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .bottom-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .time-display {
      font-size: 2rem;
      font-weight: lighter;
      margin: 1rem 0 0 0;
    }
    .buttons {
      display: flex;
      margin: 1.5rem 0;
      ${Button.fa} {
        margin-right: 1rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`);
