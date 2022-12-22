import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import WithProviders from '../../../Helpers/WithProviders/WithProviders';
import PlanCalculatorForm from './PlanCalculatorForm';

export default {
  component: PlanCalculatorForm,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>PlanCalculatorForm Component</Subtitle>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    },
    layout: 'centered'
  },
  title: 'Telzir/Molecules/PlanCalculatorForm'
};

function Template(args) {
  return (
    <WithProviders>
      <PlanCalculatorForm {...args} />
    </WithProviders>
  );
}

export const Sample = Template.bind({});
