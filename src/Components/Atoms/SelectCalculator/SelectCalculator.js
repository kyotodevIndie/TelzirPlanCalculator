import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';

function CalculatorSelect({ label, placeholder, onChange, options, isRequired }) {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel htmlFor={label} fontWeight="normal">
        {label}
      </FormLabel>
      <Select id={label} placeholder={placeholder} onChange={onChange}>
        {options}
      </Select>
    </FormControl>
  );
}

export default CalculatorSelect;
