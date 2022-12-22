import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import InputCalculator from './InputCalculator';

export default {
  argTypes: {
    currency: {
      description: 'Amount received to be converted to BRL'
    },
    withPlan: {}
  },
  component: InputCalculator,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>InputCalculator Component</Subtitle>
          <Description>a Input component</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    },
    layout: 'centered'
  },
  title: 'Telzir/Atoms/InputCalculator'
};

function Template(args) {
  return <InputCalculator {...args} />;
}

export const Sample = Template.bind({});
Sample.args = {
  label: 'Tempo da ligação',
  placeholder: 'Ex: 80',
  // onChange:{() => {}},
  type: 'number',
  isRequired: true
};
