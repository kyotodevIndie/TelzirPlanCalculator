import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import DesktopNavItem from './DesktopNavItem';

export default {
  component: DesktopNavItem,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>DesktopNavItem Component</Subtitle>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    },
    layout: 'centered'
  },
  title: 'Telzir/Atoms/DesktopNavItem'
};

function Template(args) {
  return <DesktopNavItem {...args} />;
}

export const Sample = Template.bind({});

Sample.args = {
  label: 'Link',
  href: '#'
};
