import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import Navbar from './Navbar';

export default {
  component: Navbar,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Navbar Component</Subtitle>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    },
    Navbar: 'centered'
  },
  title: 'Telzir/Organisms/Navbar'
};

function Template(args) {
  return <Navbar {...args} />;
}

export const Sample = Template.bind({});
