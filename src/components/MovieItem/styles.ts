import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px 32px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieImg = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-radius: 12px;

  align-items: center;
  justify-content: center;
  height: 170px;
  width: 330px;
  cursor: pointer;

  background-size: cover;
  background-position: center;
  margin-bottom: 8px;

  background-blend-mode: multiply;
`;
export const OverviewButton = styled.button`
  border: 0;
  height: 30px;
  width: 150px;
  transition: color 0.2;
  align-self: center;
  cursor: pointer;
  :hover {
    transform: scale(1.15);

    color: #f6ab0c;
    text-shadow: 2px 1.5px 3px rgba(245, 181, 15, 0.75);
  }
`;
export const ModalBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
`;
export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0;
`;
