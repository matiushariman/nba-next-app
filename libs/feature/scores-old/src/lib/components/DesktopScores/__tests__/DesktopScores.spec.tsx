import { render, screen } from '@nba-app/scores-test-utils';
import userEvent from '@testing-library/user-event';

import DesktopScores from '../DesktopScores';

describe('DesktopScores', () => {
  beforeEach(() => {
    render(<DesktopScores games={[]} shouldRefetch={false} />);
  });

  it('should render expanded mode by default', () => {
    expect(screen.getByLabelText(/expanded/i)).toBeVisible();
  });

  it('should allow user to toggle to mini mode', async () => {
    await userEvent.click(screen.getByRole('button', { name: /minimize/i }));

    expect(screen.getByLabelText(/mini scoreboard/i)).toBeVisible();
  });
});
