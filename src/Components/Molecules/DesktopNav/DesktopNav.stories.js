import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import DesktopNav from './DesktopNav';

export default {
  component: DesktopNav,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>DesktopNav Component</Subtitle>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    },
    layout: 'centered'
  },
  title: 'Telzir/Molecules/DesktopNav'
};

function Template(args) {
  return <DesktopNav {...args} />;
}

export const Sample = Template.bind({});
