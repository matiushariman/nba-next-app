import {
  fetchScores,
  GetScoresDateGame,
  useGetScoresWithSWR,
} from '@nba-app/api-client';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getTodayDate } from '../utils/getTodayDate';
import { TodayGames } from '../components/pages/Home';
import { useEffect, useState } from 'react';

interface HomeProps {
  readonly games: GetScoresDateGame[];
}

export default function Home({
  games,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [todayGames, setTodayGames] = useState(games);
  const { data } = useGetScoresWithSWR({
    data: {
      gameDate: getTodayDate(),
    },
    config: {
      refreshInterval: 10000,
    },
  });

  useEffect(() => {
    if (data) {
      setTodayGames(data);
    }
  }, [data]);

  return <TodayGames games={todayGames} />;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const games = await fetchScores(undefined, {
    gameDate: getTodayDate(),
  });

  return {
    props: {
      games,
    },
    revalidate: 20,
  };
};
