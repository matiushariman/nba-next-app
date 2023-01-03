import type { GetScoresDateGame } from '../../api';

export interface DesktopScoresProps {
  readonly games: GetScoresDateGame[];

  readonly shouldRefetch: boolean;
}
