import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  /* display: flex;
  align-self: center;
  justify-content: center;
  align-items: center; */
  margin-top: 20px;
`;
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  margin-left: 15px;
  border-top: 8px solid grey;
  border-right: 8px solid grey;
  border-bottom: 8px solid grey;
  border-left: 12px solid black;
  background: transparent;
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;
