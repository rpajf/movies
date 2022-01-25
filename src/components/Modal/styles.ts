import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  border: 1px solid rgba(229, 229, 229, 0.31);
  position: absolute;
  background: #2a3140;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
