import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100%;*/
  height: 100%; 
  max-width: 500px;
  max-height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 60px 10px;
  border: 1px solid rgba(229, 229, 229, 0.31);
  position: absolute;
  background: #2a3140;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
