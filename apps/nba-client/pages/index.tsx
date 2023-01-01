import { fetchScores, GetScoresDateGame } from '@nba-app/api-client';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { formatDate } from '@nba-app/date-utils';
import { useDesktopView } from '@nba-app/ui';
import Box from '@mui/material/Box';
import { lazy, Suspense } from 'react';
import { TodayGames } from '../components/pages/Home';
import { Header } from '../components/Header';

interface HomeProps {
  readonly games: GetScoresDateGame[];
}

const MobileTodayGames = lazy(
  () => import('../components/pages/Home/Mobile/MobileTodayGames')
);

export default function Home({
  games,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const isDesktopView = useDesktopView();

  return (
    <Box sx={{ display: 'flex' }}>
      {isDesktopView && <TodayGames games={games} />}
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        {!isDesktopView && (
          <Suspense fallback={null}>
            <MobileTodayGames games={games} />
          </Suspense>
        )}
      </Box>
    </Box>
  );
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
