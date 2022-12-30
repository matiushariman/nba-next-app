import type { GetScoresDateGame } from '@nba-app/api-client-old';

export interface TodayGamesProps {
  readonly games: GetScoresDateGame[];
}
