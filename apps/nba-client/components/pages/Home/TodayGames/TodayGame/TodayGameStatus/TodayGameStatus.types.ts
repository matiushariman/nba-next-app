import type {
  GetScoresDateGameBoxscore,
  GetScoresDateGameProfile,
} from '@nba-app/api-client';

export type TodayGameStatusProps = Pick<
  GetScoresDateGameBoxscore,
  'status' | 'statusDesc'
> &
  Pick<GetScoresDateGameProfile, 'dateTimeEt'>;
