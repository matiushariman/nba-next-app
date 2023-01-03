import type {
  FetchScoresDateGameBoxscore,
  FetchScoresDateGameProfile,
} from '../../../../../api';

export type MiniGameStatusProps = Pick<
  FetchScoresDateGameBoxscore,
  'status' | 'statusDesc' | 'period' | 'periodClock'
> &
  Pick<FetchScoresDateGameProfile, 'dateTimeEt'>;
