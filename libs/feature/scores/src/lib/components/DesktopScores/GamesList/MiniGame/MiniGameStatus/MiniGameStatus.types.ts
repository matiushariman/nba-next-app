import type {
  GetScoresDateGameBoxscore,
  GetScoresDateGameProfile,
} from '../../../../../api';

export type MiniGameStatusProps = Pick<
  GetScoresDateGameBoxscore,
  'status' | 'statusDesc' | 'period' | 'periodClock'
> &
  Pick<GetScoresDateGameProfile, 'dateTimeEt'>;
