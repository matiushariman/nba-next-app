import type {
  FetchScoresDateGameBoxscore,
  FetchScoresDateGameProfile,
} from '../../../../../api';

export type GameStatusProps = Pick<
  FetchScoresDateGameBoxscore,
  'status' | 'statusDesc' | 'period' | 'periodClock'
> &
  Pick<FetchScoresDateGameProfile, 'dateTimeEt'>;
