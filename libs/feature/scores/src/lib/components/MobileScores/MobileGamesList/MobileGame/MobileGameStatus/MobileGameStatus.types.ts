import type {
  FetchScoresDateGameBoxscore,
  FetchScoresDateGameProfile,
} from '../../../../../api';

export type MobileGameStatusProps = Pick<
  FetchScoresDateGameBoxscore,
  'status' | 'statusDesc' | 'period' | 'periodClock'
> &
  Pick<FetchScoresDateGameProfile, 'dateTimeEt'>;
