import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

function InputCalculator({ label, onChange, type, placeholder, isRequired }) {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel htmlFor={label} fontWeight="normal">
        {label}
      </FormLabel>
      <Input id={label} type={type} placeholder={placeholder} onChange={onChange} />
    </FormControl>
  );
}

export default InputCalculator;
