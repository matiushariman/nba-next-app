import type { GetScoresDateGame } from '../../api';

export interface ScoresContextProps {
  games: GetScoresDateGame[];
  isLoading: boolean;
}
