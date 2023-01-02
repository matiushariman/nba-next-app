import { useState, useMemo, useEffect, useContext } from 'react';
import { formatDate } from '@nba-app/date-utils';

import { GamesContext } from './GamesContext';
import { useFetchScoresWithSWR } from '../../pages/api/scores';

import type { GamesContextProps } from './GamesContext.types';
import type { GamesProviderProps } from './GamesProvider.types';
export const GamesProvider = ({
  children,
  gameDate,
  initialValues,
  shouldFetch,
}: GamesProviderProps) => {
  const [todayGames, setTodayGames] = useState(initialValues?.games ?? []);
  const { data: newGames, isLoading } = useFetchScoresWithSWR({
    data: {
      gameDate: formatDate(gameDate, 'YYYY-MM-DD'),
    },
    config: {
      refreshInterval: 30000,
    },
    shouldFetch,
  });

  useEffect(() => {
    if (newGames) {
      setTodayGames(newGames);
    }
  }, [newGames]);

  const memoizedValue = useMemo<GamesContextProps>(
    () => ({
      games: todayGames,
      isLoading,
    }),
    [todayGames, isLoading]
  );

  return (
    <GamesContext.Provider value={memoizedValue}>
      {children}
    </GamesContext.Provider>
  );
};

export const GamesConsumer = GamesContext.Consumer;

export const useGamesContext = () => {
  return useContext(GamesContext);
};
