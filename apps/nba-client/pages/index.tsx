import { fetchScores, GetScoresDateGame } from '@nba-app/api-client';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getTodayDate } from '../utils/getTodayDate';
import { TodayGames } from '../components/pages/Home';

interface HomeProps {
  readonly games: GetScoresDateGame[];
}

export default function Home({
  games,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <TodayGames games={games} />;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const games = await fetchScores(undefined, { gameDate: getTodayDate() });

  return {
    props: {
      games,
    },
  };
};
