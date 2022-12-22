import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import Layout from './Layout';

export default {
  component: Layout,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Layout Component</Subtitle>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    },
    layout: 'centered'
  },
  title: 'Telzir/Organisms/Layout'
};

function Template(args) {
  return <Layout {...args} />;
}

export const Sample = Template.bind({});
