import {
  fetchScores,
  GetScoresDateGame,
  fetchConferenceStandings,
  FetchConferenceStandingsStandingGroup,
} from '@nba-app/api-client';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { formatDate } from '@nba-app/date-utils';
import { useDesktopView } from '@nba-app/ui';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { lazy, Suspense, useState, useEffect } from 'react';
import { Standings } from '@nba-app/feature-standings';

import { TodayGames } from '../components/pages/Home';
import { Header } from '../components/Header';

interface HomeProps {
  readonly games: GetScoresDateGame[];
  readonly shouldRefetch: boolean;
  readonly conferenceStandings: FetchConferenceStandingsStandingGroup[];
}

const MobileTodayGames = lazy(
  () => import('../components/pages/Home/Mobile/MobileTodayGames')
);

export default function Home({
  games,
  shouldRefetch,
  conferenceStandings,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const isDesktopView = useDesktopView();
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  if (isFirstMount) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      {isDesktopView && (
        <TodayGames games={games} shouldRefetch={shouldRefetch} />
      )}
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        {!isDesktopView && (
          <Suspense fallback={null}>
            <MobileTodayGames games={games} shouldRefetch={shouldRefetch} />
          </Suspense>
        )}
        <Container sx={{ pt: 4, pb: 2 }}>
          <Standings conferenceStandings={conferenceStandings} />
        </Container>
      </Box>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const games = await fetchScores({
    gameDate: formatDate(new Date()),
  });
  const conferenceStandings = await fetchConferenceStandings();

  // returns true if there is a live game
  const shouldRefetch = games.some((game) => game.boxscore.status === '2');

  return {
    props: {
      games,
      shouldRefetch,
      conferenceStandings: conferenceStandings.map((conference) => ({
        ...conference,
        teams: conference.teams.sort(
          (teamA, teamB) => teamB.standings.winPct - teamA.standings.winPct
        ),
      })),
    },
  };
};
