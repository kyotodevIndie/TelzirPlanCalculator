import myTheme from '../src/Themes';
import { withRouter } from 'storybook-addon-react-router-v6';

export const parameters = {
  chakra: {
    theme: myTheme
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [withRouter, (Story) => <Story />];
