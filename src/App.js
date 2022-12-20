import { ChakraProvider } from '@chakra-ui/react';
import CalculatorProvider from './Contexts/CalculatorContext';
import AppRoutes from './Routes';
import theme from './Themes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CalculatorProvider>
        <AppRoutes />
      </CalculatorProvider>
    </ChakraProvider>
  );
}

export default App;
