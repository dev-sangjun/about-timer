import { keyframes } from "styled-components";

export default {
  fadeIn: keyframes`
    0% {
      opacity: 0;
    }
  `,
  bounceIn: keyframes`
    0% {
      opacity: 0;
      transform: translate(-50%, -100px);
    }
  `,
  bounceOut: keyframes`
    0% {
      opacity: 1;
      transform: translate(-50%, -100px);
    }
  `
};
