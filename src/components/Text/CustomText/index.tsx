import React, { ReactNode } from 'react';

import { Container } from './styles';

interface CustomTextProps {
  textColor?: string;
  size?: string;
  weight?: number;
  children: string | ReactNode[]|undefined;
  spacing?: string;
  lineHeight?:string
}
const CustomText: React.FC<CustomTextProps> = ({
  size,
  textColor,
  weight,
  children,
  spacing,
  lineHeight
}) => {
  return (
    <Container
      size={size}
      textColor={textColor}
      weight={weight}
      lineHeight={lineHeight}
      spacing={spacing}
    >
      {children}
    </Container>
  );
};

export default CustomText;
