import type { GetScoresDateGame } from '@nba-app/api-client';

export interface TodayGamesProps {
  readonly games: GetScoresDateGame[];

  readonly shouldFetch: boolean;
}
