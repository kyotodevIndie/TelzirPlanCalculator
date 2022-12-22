import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import { withRouter } from 'storybook-addon-react-router-v6';
import WithProviders from '../../../Helpers/WithProviders/WithProviders';
import Error404 from './Error404';

export default {
  component: Error404,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Error404 Page</Subtitle>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    },
    Error404: 'centered'
  },
  title: 'Telzir/Pages/Error404'
};

function Template(args) {
  return (
    <WithProviders>
      <Error404 {...args} />
    </WithProviders>
  );
}

export const Sample = Template.bind({});
