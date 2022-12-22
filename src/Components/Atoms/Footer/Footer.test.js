import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('check if component have been rendered', async () => {
    render(<Footer />);

    await screen.findByText('Kyoto');
  });
});
