import { render, screen } from '@nba-app/test-utils';
import { MiniTodayGameStatus } from '../MiniTodayGameStatus';

describe(MiniTodayGameStatus, () => {
  it('should render periodClock if game status is 2 (LIVE)', () => {
    render(
      <MiniTodayGameStatus
        period="4"
        periodClock="12:00"
        status="2"
        statusDesc=""
        dateTimeEt="2022-12-29T19:00"
      />
    );

    expect(screen.getByText('Q4 12:00')).toBeVisible();
  });

  it('should render statusDesc if game status is 3 (end game)', () => {
    render(
      <MiniTodayGameStatus
        period="4"
        periodClock=""
        status="3"
        statusDesc="FINAL"
        dateTimeEt="2022-12-29T19:00"
      />
    );

    expect(screen.getByText('FINAL')).toBeVisible();
  });
});
