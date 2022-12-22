import { render, screen } from '@testing-library/react';
import navItens from '../../../Utils/navItens';
import MobileNav from './MobileNav';

describe('MobileNav', () => {
  test('check if component have been rendered', async () => {
    render(<MobileNav />);

    expect(screen.queryByText(navItens[0].label)).toBeInTheDocument();
    expect(screen.queryByText(navItens[1].label)).toBeInTheDocument();
    expect(screen.queryByText(navItens[2].label)).toBeInTheDocument();
  });
});
