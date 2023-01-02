import { render, screen } from '@nba-app/test-utils';

import { ConferenceStandingsTableWinPct } from '../ConferenceStandingsTableWinPct';

describe('ConferenceStandingsTableWinPct', () => {
  it('should render winPct in success color if winPct >= 50', () => {
    render(
      <table>
        <tbody>
          <tr>
            <ConferenceStandingsTableWinPct winPct={75} />
          </tr>
        </tbody>
      </table>
    );

    expect(screen.getByLabelText(/winning record of 75%/i)).toBeVisible();
  });

  it('should render winPct in error color if winPct >= 50', () => {
    render(
      <table>
        <tbody>
          <tr>
            <ConferenceStandingsTableWinPct winPct={35} />
          </tr>
        </tbody>
      </table>
    );

    expect(screen.getByLabelText(/losing record of 35%/i)).toBeVisible();
  });
});
