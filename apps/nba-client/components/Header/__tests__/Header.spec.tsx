import { render, screen } from '@nba-app/test-utils';
import userEvent from '@testing-library/user-event';

import { Header } from '../Header';

describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('should allow user to switch between dark|light mode', async () => {
    const lightModeBtn = screen.getByRole('button', { name: /to dark mode/i });

    expect(lightModeBtn).toBeDefined();

    await userEvent.click(lightModeBtn);

    const darkModeBtn = screen.getByRole('button', { name: /to light mode/i });

    expect(darkModeBtn).toBeDefined();
  });
});
