import type { GetScoresDateGame } from '@nba-app/api-client';

export interface MobileTodayGamesProps {
  readonly games: GetScoresDateGame[];
  readonly shouldFetch: boolean;
}
