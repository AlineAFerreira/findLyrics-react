import styled, { keyframes } from "styled-components";

const show = keyframes`
  0%{ opacity: 0; }
  40%{ opacity: .7; }
  100%{ opacity: 1;}
`;

export const BoxLoading = styled.div`
  background-color: rgba(255, 255, 255, .7);
  color: blue;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0; left: 0;
  animation: ${show} .5s;
`;


