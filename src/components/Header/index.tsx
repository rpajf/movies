import React from 'react';
import { CustomText } from '../Text';
import { Container, HeaderContent } from './styles';
// import Select from '../Select';

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
          {/* <Select /> */}
        </CustomText>
      </HeaderContent>
    </Container>
  );
};

export default Header;
