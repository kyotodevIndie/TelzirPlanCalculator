import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import CurrencyLabel from './CurrencyLabel';

export default {
  argTypes: {
    currency: {
      description: 'Amount received to be converted to BRL'
    },
    withPlan: {}
  },
  component: CurrencyLabel,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>CurrencyLabel Component</Subtitle>
          <Description>component that converts a number into BRL currency</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    },
    layout: 'centered'
  },
  title: 'Telzir/Atoms/CurrencyLabel'
};

function Template(args) {
  return <CurrencyLabel {...args} />;
}

export const Sample = Template.bind({});
Sample.args = {
  currency: '50.00',
  withPlan: true
};
