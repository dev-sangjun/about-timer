import React, { Component } from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IconButton } from "@material-ui/core";
import { Settings, Close, PlayArrow, Pause, Replay } from "@material-ui/icons";
import * as actions from "../actions";
import { stamp } from "../images";

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const { timer } = this.props;
    const { id, running } = timer;
    const { subSecond } = this.props;
    const nextTimer = nextProps.timer;
    if (!running && nextTimer.running) {
      this.setState({
        timerInterval: setInterval(() => subSecond(id), 1000),
      });
    } else if (running && !nextTimer.running) {
      clearInterval(this.state.timerInterval);
    }
  }
  render() {
    const { className, timer } = this.props;
    const {
      id,
      title,
      originalMinutes,
      originalSeconds,
      minutes,
      seconds,
      running,
      completed,
    } = timer;
    const { openModal, updateModal } = this.props;
    const { deleteTimer, toggleTimer, resetTimer } = this.props;
    return (
      <div className={className}>
        <div className="top-bar">
          <span className="title">{title}</span>
          <div className="buttons">
            <IconButton
              onClick={e => {
                e.preventDefault();
                updateModal(id, title, originalMinutes, originalSeconds);
                openModal();
              }}
            >
              <Settings className="icon" />
            </IconButton>
            <IconButton
              onClick={e => {
                e.preventDefault();
                if (
                  window.confirm(`Are you sure you want to delete ${title}?`)
                ) {
                  deleteTimer(id);
                }
              }}
            >
              <Close className="icon" />
            </IconButton>
          </div>
        </div>
        <div className="bottom-container">
          <span className="time-display">
            {minutes}:{seconds}
          </span>
          <div className="buttons">
            <IconButton
              onClick={e => {
                e.preventDefault();
                toggleTimer(id);
              }}
            >
              {running ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton
              onClick={e => {
                e.preventDefault();
                resetTimer(id);
              }}
            >
              <Replay />
            </IconButton>
          </div>
          {completed && <img className="done-stamp" src={stamp} alt="stamp" />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.UIHandler,
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
  border-radius: 1rem;
  overflow: hidden;
  .top-bar {
    width: 100%;
    padding: 0.5rem 1rem 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: gray;
    .title {
      position: relative;
      top: -1px;
      left: 0;
      color: white;
      font-family: "Open Sans", sans-serif;
    }
    .buttons {
      display: flex;
      color: white;
      .MuiIconButton-root {
        width: 1rem;
        height: 1rem;
        margin-right: 0.25rem;
        &:last-child {
          margin-right: 0;
        }
        .icon {
          width: 1rem;
          height: 1rem;
          color: white;
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
      font-family: "Major Mono Display", monospace;
    }
    .buttons {
      display: flex;
      margin: 1.5rem 0;
    }
    .done-stamp {
      position: absolute;
      bottom: 0.5rem;
      right: 0.5rem;
      width: 3rem;
    }
  }
`);
