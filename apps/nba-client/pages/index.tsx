import { useState, useEffect } from 'react';
import {
  fetchScores,
  GetScoresDateGame,
  useGetScoresWithSWR,
} from '@nba-app/api-client';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

interface HomeProps {
  readonly games: GetScoresDateGame[];
}

export default function Home({
  games,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [todayGames, setTodayGames] = useState(games);
  const { data } = useGetScoresWithSWR({
    data: {
      gameDate: '2022-12-28',
    },
    config: {
      refreshInterval: 5000,
    },
  });

  useEffect(() => {
    if (data) {
      setTodayGames(data);
    }
  }, [data]);

  return (
    <ul>
      {todayGames.map((game) => (
        <li key={game.profile.gameId}>
          {game.awayTeam.profile.abbr} @ {game.homeTeam.profile.abbr}
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const games = await fetchScores(undefined, {
    gameDate: '2022-12-28',
  });

  return {
    props: {
      games,
    },
    revalidate: 20,
  };
};
