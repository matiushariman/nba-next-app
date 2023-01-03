import type { GetScoresDateGame } from '@nba-app/api-client';

export interface ScoresContextProps {
  games: GetScoresDateGame[];
  isLoading: boolean;
}
