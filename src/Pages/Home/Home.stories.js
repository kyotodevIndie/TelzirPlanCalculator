import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import WithProviders from '../../Helpers/WithProviders/WithProviders';
import Home from './Home';

export default {
  component: Home,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Home Page</Subtitle>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    },
    Home: 'centered'
  },
  title: 'Telzir/Pages/Home'
};

function Template(args) {
  return (
    <WithProviders>
      <Home {...args} />
    </WithProviders>
  );
}

export const Sample = Template.bind({});
