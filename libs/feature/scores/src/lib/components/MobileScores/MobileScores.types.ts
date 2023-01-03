import type { GetScoresDateGame } from '../../api';

export interface MobileScoresProps {
  readonly games: GetScoresDateGame[];
  readonly shouldRefetch: boolean;
}
