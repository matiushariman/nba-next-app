import { fetchScores, GetScoresDateGame } from '@nba-app/api-client';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { formatDate } from '@nba-app/date-utils';
import { useDesktopView } from '@nba-app/ui';
import { TodayGames } from '../components/pages/Home';

interface HomeProps {
  readonly games: GetScoresDateGame[];
}

export default function Home({
  games,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const isDesktopView = useDesktopView();

  return isDesktopView && <TodayGames games={games} />;
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
