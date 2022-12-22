import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import WithProviders from '../../../Helpers/WithProviders/WithProviders';
import PlanCalculator from './PlanCalculator';

export default {
  component: PlanCalculator,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>PlanCalculator Component</Subtitle>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    },
    PlanCalculator: 'centered'
  },
  title: 'Telzir/Organisms/PlanCalculator'
};

function Template(args) {
  return (
    <WithProviders>
      <PlanCalculator {...args} />
    </WithProviders>
  );
}

export const Sample = Template.bind({});
