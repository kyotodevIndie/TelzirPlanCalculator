import { render, screen } from '@testing-library/react';
import CurrencyLabel from './CurrencyLabel';

describe('CurrencyLabel', () => {
  test('check if component have been rendered', async () => {
    render(<CurrencyLabel withPlan currency="50" />);

    await screen.findByText('Custo COM o plano:');
    await screen.findByText('R$ 50,00');
  });
});
