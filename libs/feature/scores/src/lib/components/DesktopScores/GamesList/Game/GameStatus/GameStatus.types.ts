import type {
  GetScoresDateGameBoxscore,
  GetScoresDateGameProfile,
} from '../../../../../api';

export type GameStatusProps = Pick<
  GetScoresDateGameBoxscore,
  'status' | 'statusDesc' | 'period' | 'periodClock'
> &
  Pick<GetScoresDateGameProfile, 'dateTimeEt'>;
