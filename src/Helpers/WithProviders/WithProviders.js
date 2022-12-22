import React from 'react';
import CalculatorProvider from '../../Contexts/CalculatorContext';

function WithProviders({ children }) {
  return <CalculatorProvider>{children}</CalculatorProvider>;
}

export default WithProviders;
