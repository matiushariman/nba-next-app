import type { FetchScoresDateGame } from '../../api';

export interface DesktopScoresProps {
  readonly games: FetchScoresDateGame[];

  readonly shouldRefetch: boolean;
}
