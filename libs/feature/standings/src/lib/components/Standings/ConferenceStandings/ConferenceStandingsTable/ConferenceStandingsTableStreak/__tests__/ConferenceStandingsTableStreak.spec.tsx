import { render, screen } from '@nba-app/standings-test-utils';

import { ConferenceStandingsTableStreak } from '../ConferenceStandingsTableStreak';

describe('ConferenceStandingsTableStreak', () => {
  it('should render streak in success color if winning', () => {
    render(
      <table>
        <tbody>
          <tr>
            <ConferenceStandingsTableStreak streak="Won 10" />
          </tr>
        </tbody>
      </table>
    );

    expect(screen.getByText(/won 10/i)).toBeVisible();
  });

  it('should render streak in error color if losing', () => {
    render(
      <table>
        <tbody>
          <tr>
            <ConferenceStandingsTableStreak streak="Lost 10" />
          </tr>
        </tbody>
      </table>
    );

    expect(screen.getByText(/lost 10/i)).toBeVisible();
  });
});
