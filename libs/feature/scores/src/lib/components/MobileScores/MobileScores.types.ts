import type { GetScoresDateGame } from '@nba-app/api-client';

export interface MobileScoresProps {
  readonly games: GetScoresDateGame[];
  readonly shouldRefetch: boolean;
}
