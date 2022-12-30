import { render, screen } from '@nba-app/test-utils';
import userEvent from '@testing-library/user-event';

import { TodayGames } from '../TodayGames';

describe(TodayGames, () => {
  beforeEach(() => {
    render(<TodayGames games={[]} />);
  });

  it('should allow the user to minimize scoreboard', async () => {
    expect(screen.getByLabelText(/expanded scoreboard/i)).toBeVisible();

    await userEvent.click(
      screen.getByRole('button', { name: /minimize scoreboard/i })
    );

    expect(screen.getByLabelText(/mini scoreboard/i)).toBeVisible();
  });

  it('should allow the user to select game date', async () => {
    await userEvent.click(screen.getByRole('button', { name: /choose date/i }));

    expect(screen.getByRole('dialog')).toBeVisible();

    await userEvent.click(screen.getByRole('gridcell', { name: '1' }));
  });
});
