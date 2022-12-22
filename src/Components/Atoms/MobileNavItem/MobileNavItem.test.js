import { render, screen } from '@testing-library/react';
import MobileNavItem from './MobileNavItem';

describe('MobileNavItem', () => {
  test('check if component have been rendered', async () => {
    render(<MobileNavItem label="link" />);

    await screen.findByText('link');
  });
});
