import { render, screen } from '@nba-app/test-utils';
import { MobileTodayGameTeam } from '../MobileTodayGameTeam';

describe('MobileTodayGameTeam', () => {
  it('should render team record if game has not started (status 1)', () => {
    render(
      <MobileTodayGameTeam
        teamRecord="26-10"
        abbr="BOS"
        id="1"
        name="Celtics"
        status="1"
        score={0}
      />
    );

    expect(screen.getByText('26-10')).toBeVisible();
  });

  it('should render score if game has started (status !== 1)', () => {
    render(
      <MobileTodayGameTeam
        teamRecord="26-10"
        abbr="BOS"
        id="1"
        name="Celtics"
        status="2"
        score={99}
      />
    );

    expect(screen.getByText('99')).toBeVisible();
  });
});
