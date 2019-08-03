import React, { Component } from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  faCog,
  faTimes,
  faPlay,
  faPause,
  faRedo
} from "@fortawesome/free-solid-svg-icons";
import * as actions from "../actions";
import { Button } from "../elements";
import { Shadow } from "../ui";
import { stamp } from "../images";

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const { timer } = this.props;
    const { id, running } = timer;
    const { subSecond, resetTimer } = this.props;
    const nextTimer = nextProps.timer;
    if (!running && nextTimer.running) {
      this.setState({
        timerInterval: setInterval(() => subSecond(id), 1000)
      });
    } else if (running && !nextTimer.running) {
      clearInterval(this.state.timerInterval);
    }
  }
  render() {
    const { className, timer, modal } = this.props;
    const {
      id,
      title,
      originalMinutes,
      originalSeconds,
      minutes,
      seconds,
      running,
      completed
    } = timer;
    const { openModal, updateModal } = this.props;
    const { deleteTimer, toggleTimer, resetTimer } = this.props;
    console.log("props", this.props);
    return (
      <div className={className}>
        <div className="top-bar">
          <span className="title">{title}</span>
          <div className="buttons">
            <Button.fa
              icon={faCog}
              size="sm"
              onClick={e => {
                e.preventDefault();
                updateModal(id, title, originalMinutes, originalSeconds);
                console.log(modal);
                openModal();
              }}
            />
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
            <Button.fa
              icon={running ? faPause : faPlay}
              size="md"
              onClick={e => {
                e.preventDefault();
                toggleTimer(id);
              }}
            />
            <Button.fa
              icon={faRedo}
              size="md"
              onClick={e => {
                e.preventDefault();
                resetTimer(id);
              }}
            />
          </div>
          {completed && <img className="done-stamp" src={stamp} alt="stamp" />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.UIHandler
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styled(Timer)`
  position: relative;
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
      font-family: "Major Mono Display", "Cutive Mono", monospace;
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
    .done-stamp {
      position: absolute;
      bottom: 0.5rem;
      right: 0.5rem;
      width: 3rem;
    }
  }
`);
