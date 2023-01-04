import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import {
  Standings,
  fetchConferenceStandings,
  FetchConferenceStandingsStandingGroup,
} from '@nba-app/feature-standings';
import {
  fetchScores,
  FetchScoresDateGame,
  DesktopScores,
  MobileScores,
} from '@nba-app/feature-scores';

import { Header } from '../components/Header';
import useDesktopView from '../hooks/useDesktopView';

interface HomeProps {
  readonly games: FetchScoresDateGame[];
  readonly shouldRefetch: boolean;
  readonly conferenceStandings: FetchConferenceStandingsStandingGroup[];
}

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
        <DesktopScores games={games} shouldRefetch={shouldRefetch} />
      )}
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        {!isDesktopView && (
          <MobileScores games={games} shouldRefetch={shouldRefetch} />
        )}
        <Container
          sx={(theme) => ({
            pt: 4,
            pb: 2,
            [theme.breakpoints.down('md')]: {
              pl: 0,
              pr: 0,
              pt: 2,
            },
          })}
        >
          <Standings conferenceStandings={conferenceStandings} />
        </Container>
      </Box>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const games = await fetchScores({
    gameDate: new Date(),
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
