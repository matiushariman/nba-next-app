import { createContext } from 'react';

import type { FetchScoresDateGame } from '../../api/fetchScores';

export interface ScoresContextProps {
  games: FetchScoresDateGame[];
  isLoading: boolean;
}

const ScoresContext = createContext<ScoresContextProps>(
  {} as ScoresContextProps
);

export default ScoresContext;
