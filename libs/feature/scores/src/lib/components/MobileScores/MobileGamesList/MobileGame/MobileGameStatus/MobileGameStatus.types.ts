import type {
  GetScoresDateGameBoxscore,
  GetScoresDateGameProfile,
} from '../../../../../api';

export type MobileGameStatusProps = Pick<
  GetScoresDateGameBoxscore,
  'status' | 'statusDesc' | 'period' | 'periodClock'
> &
  Pick<GetScoresDateGameProfile, 'dateTimeEt'>;
