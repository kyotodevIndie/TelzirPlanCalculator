import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import Footer from './Footer';

export default {
  component: Footer,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Footer Component</Subtitle>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    },
    layout: 'centered'
  },
  title: 'Telzir/Atoms/Footer'
};

function Template(args) {
  return <Footer {...args} />;
}

export const Sample = Template.bind({});
