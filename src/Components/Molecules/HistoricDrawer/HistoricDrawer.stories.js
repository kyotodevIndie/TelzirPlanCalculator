import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import WithProviders from '../../../Helpers/WithProviders/WithProviders';
import HistoricDrawer from './HistoricDrawer';

export default {
  component: HistoricDrawer,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    },
    layout: 'centered'
  },
  title: 'Telzir/Molecules/HistoricDrawer'
};

function Template(args) {
  return (
    <WithProviders>
      <HistoricDrawer {...args} />
    </WithProviders>
  );
}

export const Sample = Template.bind({});
