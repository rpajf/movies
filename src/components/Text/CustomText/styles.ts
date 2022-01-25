import styled from 'styled-components';

interface ContainerProps {
  textColor?: string;
  size?: string;
  weight?: number;
  spacing?: string;
  lineHeight?: string
}
export const Container = styled.text<ContainerProps>`
  color: ${(props) => props.textColor};
  line-height:${(props) => props.lineHeight};
  font-family: sans-serif;
  font-weight: ${(props) => (props.weight)};
  font-size: ${(props) => props.size};
  text-align: left;
  letter-spacing: ${(props) => (props.spacing)};
;
  margin-bottom: 8px;
`;
