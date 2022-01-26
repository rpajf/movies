import styled from 'styled-components'

export const SelectContainer = styled.div`
  position: relative;

  margin-right: 24px;
  align-self: flex-start;
  select {
    background: #2A3140;
    position: relative;
    font-weight: 400;
    /* outline: none; */
    font-size: 16px;
    line-height: 24px;
    padding: 10px 15px 10px 10px;
    color: #e5e5e5;
    border-radius: 8px;
    border: 2px solid #A7A7B4;
    -webkit-appearance: none;
    appearance: none;
    :focus {
      outline: none;
    }
    option {
      position: absolute;
      transition: ease-in 1100ms;
      background: #2A3140;


    }
  }
  span {

    background: #2A3140;
    width: 0;
    height: 0;
    top: 45%;
    right: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-top: 5px solid #000;
    position: absolute;
    :hover {
      cursor: none;
    }
  }
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`

export const Arrow = styled.span``
export const Content = styled.select``
export const Opt = styled.option``
