import React from "react";
import styled from "styled-components";
import {
  faCog,
  faTimes,
  faPlay,
  faRedo
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../elements";
import { Shadow } from "../ui";

const Timer = ({ className, timer }) => {
  const { title, minutes, seconds } = timer;
  return (
    <div className={className}>
      <div className="top-bar">
        <h2>{title}</h2>
        <div className="buttons">
          <Button.fa icon={faCog} size="sm" />
          <Button.fa icon={faTimes} size="sm" />
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
};

export default styled(Timer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  ${Shadow.card}
  .top-bar {
    width: 100%;
    padding: 0.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    h2 {
      position: relative;
      top: 0.125rem;
      left: 0;
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
`;
