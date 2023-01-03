import type { FetchScoresDateGame } from '../../api';

export interface MobileScoresProps {
  readonly games: FetchScoresDateGame[];
  readonly shouldRefetch: boolean;
}
