import React from 'react';

import { Container } from './styles';

interface PaginationProps {
  pageNum: number;
  totalPages: number;
}
import { CustomText } from '../../../../components/Text';
const Pagination: React.FC<PaginationProps> = ({ pageNum, totalPages }) => {
  return (
    <Container>
      <CustomText textColor='#fff' size='20px'weight={400} >
        {pageNum}
        {' '}of {''}
        {totalPages}
      </CustomText>
    </Container>
  );
};

export default Pagination;
