import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import MobileNavItem from './MobileNavItem';

export default {
  component: MobileNavItem,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>MobileNavItem Component</Subtitle>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    },
    layout: 'centered'
  },
  title: 'Telzir/Atoms/MobileNavItem'
};

function Template(args) {
  return <MobileNavItem {...args} />;
}

export const Sample = Template.bind({});

Sample.args = {
  label: 'Link',
  href: '#'
};
