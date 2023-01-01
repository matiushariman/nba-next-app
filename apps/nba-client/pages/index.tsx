import { fetchScores, GetScoresDateGame } from '@nba-app/api-client';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import { formatDate } from '@nba-app/date-utils';

import { TodayGames } from '../components/pages/Home';

interface HomeProps {
  readonly games: GetScoresDateGame[];
}

export default function Home({
  games,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return matches && <TodayGames games={games} />;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const games = await fetchScores({
    gameDate: formatDate(new Date()),
  });

  return {
    props: {
      games,
    },
  };
};
