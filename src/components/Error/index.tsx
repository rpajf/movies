import React from 'react';
import { CustomText } from '../Text';
import { Container } from './styles';

interface ErrorMessageProps {
  content: string;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ content }) => {
  return (
    <Container>
      <CustomText
        size="32px"
        textColor="#ea9515"
        lineHeight="40px"
        spacing="1px"
        weight={600}
      >
        Error: {content}
      </CustomText>
    </Container>
  );
};

export default ErrorMessage;
