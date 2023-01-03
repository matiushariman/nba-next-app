import { render, screen } from '@nba-app/standings-test-utils';

import { ConferenceStandingsTableWinLoseRecord } from '../ConferenceStandingsTableWinLoseRecord';

describe('ConferenceStandingsTableWinLoseRecord', () => {
  it('should render winPct in success color if wins > losses', () => {
    render(
      <table>
        <tbody>
          <tr>
            <ConferenceStandingsTableWinLoseRecord wins="50" losses={25} />
          </tr>
        </tbody>
      </table>
    );

    expect(screen.getByLabelText(/winning record of 50 - 25/i)).toBeVisible();
  });

  it('should render winPct in error color if wins < losses', () => {
    render(
      <table>
        <tbody>
          <tr>
            <ConferenceStandingsTableWinLoseRecord wins={35} losses={50} />
          </tr>
        </tbody>
      </table>
    );

    expect(screen.getByLabelText(/losing record of 35 - 50/i)).toBeVisible();
  });
});
