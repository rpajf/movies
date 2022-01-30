import React from 'react';
import { CustomText } from '../Text';
import { Container } from './styles';

interface ErrorMessageProps {
  content: string;
  status: string;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ content, status }) => {
  return (
    <Container>
      {status === 'failed' && (
        <CustomText
          size="32px"
          textColor="#ea9515"
          lineHeight="40px"
          spacing="1px"
          weight={600}
        >
          Error: {content}
        </CustomText>
      )}
    </Container>
  );
};

export default ErrorMessage;
