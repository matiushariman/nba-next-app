import { render, screen } from '@nba-app/test-utils';
import userEvent from '@testing-library/user-event';

import { TodayGames } from '../TodayGames';

import type { SuiteAPI } from 'vitest';

(describe as SuiteAPI)('TodayGames', () => {
  it('should allow the user to minimize scoreboard', async () => {
    render(<TodayGames games={[]} />);
    expect(screen.getByLabelText(/expanded scoreboard/i)).toBeDefined();

    await userEvent.click(
      screen.getByRole('button', { name: /minimize scoreboard/i })
    );

    expect(screen.getByLabelText(/mini scoreboard/i)).toBeDefined();
  });

  it('should allow the user to select game date', async () => {
    render(<TodayGames games={[]} />);
    await userEvent.click(screen.getByRole('button', { name: /choose date/i }));

    expect(screen.getByRole('dialog')).toBeDefined();

    await userEvent.click(screen.getByRole('gridcell', { name: '1' }));
  });
});
