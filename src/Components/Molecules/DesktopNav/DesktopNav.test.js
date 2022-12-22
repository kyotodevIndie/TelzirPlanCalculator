import { render, screen } from '@testing-library/react';
import navItens from '../../../Utils/navItens';
import DesktopNav from './DesktopNav';

describe('DesktopNav', () => {
  test('check if component have been rendered', async () => {
    render(<DesktopNav />);

    expect(screen.queryByText(navItens[0].label)).toBeInTheDocument();
    expect(screen.queryByText(navItens[1].label)).toBeInTheDocument();
    expect(screen.queryByText(navItens[2].label)).toBeInTheDocument();
  });
});
