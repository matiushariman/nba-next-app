import { GetScoresDateGameBoxscore } from '@nba-app/api-client';

type GetLiveStatusParams = Pick<
  GetScoresDateGameBoxscore,
  'statusDesc' | 'period' | 'periodClock'
>;

export const getLiveStatus = ({
  period,
  periodClock,
  statusDesc,
}: GetLiveStatusParams) => {
  if (periodClock === '') {
    return statusDesc;
  }
  const periodText =
    Number(period) <= 4 ? `Q${period}` : `OT${Number(period) - 4}`;

  return `LIVE ${periodText} ${periodClock}`;
};
