import { useState, useMemo, useEffect, useContext } from 'react';
import { formatDate } from '../../utils';

import ScoresContext, { ScoresContextProps } from './ScoresContext';
import useFetchScores from '../../hooks/useFetchScores';

import type { ReactNode } from 'react';
import type { Dayjs } from 'dayjs';
import type { FetchScoresDateGame } from '../../api/fetchScores';

export interface ScoresProviderProps {
  children?: ReactNode;
  gameDate: Dayjs | Date | string | null;
  initialValues?: {
    games: FetchScoresDateGame[];
  };
  shouldRefetch?: boolean;
}

const ScoresProvider = ({
  children,
  gameDate,
  initialValues,
  shouldRefetch,
}: ScoresProviderProps) => {
  const [todayGames, setTodayGames] = useState(initialValues?.games ?? []);
  const { data: newGames, isLoading } = useFetchScores({
    data: {
      gameDate: formatDate(gameDate, 'YYYY-MM-DD'),
    },
    config: {
      ...(shouldRefetch && { refreshInterval: 30000 }),
    },
  });

  useEffect(() => {
    if (newGames) {
      setTodayGames(newGames);
    }
  }, [newGames]);

  const memoizedValue = useMemo<ScoresContextProps>(
    () => ({
      games: todayGames,
      isLoading,
    }),
    [todayGames, isLoading]
  );

  return (
    <ScoresContext.Provider value={memoizedValue}>
      {children}
    </ScoresContext.Provider>
  );
};

export default ScoresProvider;

export const ScoresConsumer = ScoresContext.Consumer;

export const useScoresContext = () => {
  return useContext(ScoresContext);
};
