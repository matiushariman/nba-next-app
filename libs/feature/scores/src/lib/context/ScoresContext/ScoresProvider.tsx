import { useState, useMemo, useEffect, useContext } from 'react';
import { formatDate } from '@nba-app/date-utils';

import { ScoresContext } from './ScoresContext';
import { useFetchScores } from '../../hooks';

import type { ScoresProviderProps } from './ScoresProvider.types';
import type { ScoresContextProps } from './ScoresContext.types';

export const ScoresProvider = ({
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

export const ScoresConsumer = ScoresContext.Consumer;

export const useScoresContext = () => {
  return useContext(ScoresContext);
};
