import type {
  GetScoresDateGameBoxscore,
  GetScoresDateGameProfile,
} from '@nba-app/api-client-old';

export type TodayGameStatusProps = Pick<
  GetScoresDateGameBoxscore,
  'status' | 'statusDesc' | 'period' | 'periodClock'
> &
  Pick<GetScoresDateGameProfile, 'dateTimeEt'>;
