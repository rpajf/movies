import styled from 'styled-components';

import { CustomTextProps } from '.';

export const Container = styled.div`
  max-width: 350px;
`;

export const Text = styled.text<CustomTextProps>`
  color: ${(props) => props.textColor};
  line-height: ${(props) => props.lineHeight};
  font-family: sans-serif;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  text-align: left;
  letter-spacing: ${(props) => props.spacing};
  margin-bottom: 8px;
`;
