import { SelectChangeEvent } from '@mui/material';
import React from 'react';

import { SelectContainer } from './styles';

export interface SelectBoxProps {
  element?: HTMLSelectElement;
  value?: string;
  setValue: (newValue: string) => void;


}

const Select: React.FC<SelectBoxProps> = ({setValue }) => {
  return (
    <SelectContainer >
      <select defaultValue="" onChange={(e) => setValue(e.target.value)}>
        <option disabled value="">
          Sort By:
        </option>

        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
        <option value="rating">Rating</option>
      </select>
    </SelectContainer>
  );
};
export default Select;
export {};
