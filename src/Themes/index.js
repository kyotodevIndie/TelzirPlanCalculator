import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

const colors = {
  primary: '#71EBC6',
  text: '#BFE0D7',
  darkText: '#27232D',
  background: '#27232D'
};

// const fonts = {
//   heading: 'Roboto',
//   body: 'Roboto'
// };

const styles = {
  global: {
    body: {
      bg: '#27232D',
      color: 'gray.50'
    }
  }
};

const theme = extendTheme({ colors, config, styles });

export default theme;
