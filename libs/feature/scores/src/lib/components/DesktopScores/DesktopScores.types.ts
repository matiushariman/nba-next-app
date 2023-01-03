import type { GetScoresDateGame } from '@nba-app/api-client';

export interface DesktopScoresProps {
  readonly games: GetScoresDateGame[];

  readonly shouldRefetch: boolean;
}
