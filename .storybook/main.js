module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@chakra-ui/storybook-addon',
    'storybook-addon-react-router-v6',
    '@storybook/addon-a11y'
  ],
  features: {
    emotionAlias: false
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  }
};
