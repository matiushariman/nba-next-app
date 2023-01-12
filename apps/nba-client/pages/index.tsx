import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { fetchScores, FetchScoresDateGame } from '@nba-app/scores-api';
import { Header } from '@nba-app/shared-ui';
import { Scoreboard } from '@nba-app/scores-feature';
interface HomeProps {
  readonly games: FetchScoresDateGame[];
}

export default function Home({
  games,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Header />
      <Scoreboard games={games} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const games = await fetchScores({
    gameDate: new Date(),
  });

  return {
    props: {
      games,
    },
  };
};
