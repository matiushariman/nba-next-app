import type {
  GetScoresDateGameBoxscore,
  GetScoresDateGameProfile,
} from '@nba-app/api-client';

export type MobileTodayGameStatusProps = Pick<
  GetScoresDateGameBoxscore,
  'status' | 'statusDesc' | 'period' | 'periodClock'
> &
  Pick<GetScoresDateGameProfile, 'dateTimeEt'>;
