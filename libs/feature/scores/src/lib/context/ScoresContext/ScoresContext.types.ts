import type { FetchScoresDateGame } from '../../api';

export interface ScoresContextProps {
  games: FetchScoresDateGame[];
  isLoading: boolean;
}
