import React from 'react';
import { CustomText } from '../../../../components/Text';
import { Container, HeaderContent } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <CustomText
          spacing="0.5px"
          weight={600}
          textColor="#e5e5e5"
          size="26px"
        >
          MOVIE CATALOG
          <br />
          <CustomText spacing="0.5px" weight={500} textColor="#fff" size="22px">
            by Raphael
          </CustomText>
        </CustomText>
      </HeaderContent>
    </Container>
  );
};

export default Header;
