import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import MobileNav from './MobileNav';

export default {
  component: MobileNav,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>MobileNav Component</Subtitle>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    },
    layout: 'centered'
  },
  title: 'Telzir/Molecules/MobileNav'
};

function Template(args) {
  return <MobileNav {...args} />;
}

export const Sample = Template.bind({});
