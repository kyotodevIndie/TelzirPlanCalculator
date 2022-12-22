import { render, screen } from '@testing-library/react';
import DesktopNavItem from './DesktopNavItem';

describe('DesktopNavItem', () => {
  test('check if component have been rendered', async () => {
    render(<DesktopNavItem label="link" />);

    await screen.findByText('link');
  });
});
