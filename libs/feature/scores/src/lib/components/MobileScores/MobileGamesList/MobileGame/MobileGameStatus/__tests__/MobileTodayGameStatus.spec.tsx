import { render, screen } from '@nba-app/test-utils';
import { MobileGameStatus } from '../MobileGameStatus';

describe('MobileTodayGameStatus', () => {
  it('should render game time if game status is 1 (PRE GAME)', () => {
    render(
      <MobileGameStatus
        period=""
        periodClock=""
        status="1"
        statusDesc=""
        dateTimeEt="2022-12-29T19:00"
      />
    );

    expect(screen.getByLabelText(/game starting time/i)).toBeVisible();
  });

  it('should render periodClock if game status is 2 (LIVE)', () => {
    render(
      <MobileGameStatus
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
      <MobileGameStatus
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
