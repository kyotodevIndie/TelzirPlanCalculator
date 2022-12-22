import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import SelectCalculator from './SelectCalculator';

export default {
  argTypes: {
    currency: {
      description: 'Amount received to be converted to BRL'
    },
    withPlan: {}
  },
  component: SelectCalculator,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>SelectCalculator Component</Subtitle>
          <Description>a Select component</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    },
    layout: 'centered'
  },
  title: 'Telzir/Atoms/SelectCalculator'
};

function Template(args) {
  return <SelectCalculator {...args} />;
}

export const Sample = Template.bind({});
Sample.args = {
  label: 'Tipo de Plano',
  placeholder: 'Selecione seu plano',
  isRequired: true,
  options: 'test'
};
