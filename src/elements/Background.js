import styled from "styled-components";

const Background = styled.div`
  position: relative;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default Background;
