import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { displayFormattedTeamRecord } from '@nba-app/formatting-utils';

import { MiniTodayGameTeam } from './MiniTodayGameTeam';
import { MiniTodayGameStatus } from './MiniTodayGameStatus';

import type { MiniTodayGameProps } from './MiniTodayGame.types';

export const MiniTodayGame = ({ game }: MiniTodayGameProps) => (
  <Card
    square
    sx={(theme) => ({
      width: '100%',
      ...(theme.palette.mode === 'dark' && {
        backgroundColor: theme.palette.grey['900'],
      }),
    })}
    variant="outlined"
    aria-label={`${game.awayTeam.profile.name} @ ${game.homeTeam.profile.name}`}
  >
    <Box sx={{ p: 1 }}>
      <Stack spacing={1}>
        <MiniTodayGameStatus
          status={game.boxscore.status}
          statusDesc={game.boxscore.statusDesc}
          dateTimeEt={game.profile.dateTimeEt}
          period={game.boxscore.period}
          periodClock={game.boxscore.periodClock}
        />
        <Stack>
          <MiniTodayGameTeam
            id={game.awayTeam.profile.id}
            name={game.awayTeam.profile.name}
            abbr={game.awayTeam.profile.abbr}
            score={game.awayTeam.score.score}
            teamRecord={displayFormattedTeamRecord(
              game.awayTeam.matchup.wins,
              game.awayTeam.matchup.losses
            )}
            status={game.boxscore.status}
          />
          <MiniTodayGameTeam
            id={game.homeTeam.profile.id}
            name={game.homeTeam.profile.name}
            abbr={game.homeTeam.profile.abbr}
            score={game.homeTeam.score.score}
            teamRecord={displayFormattedTeamRecord(
              game.homeTeam.matchup.wins,
              game.homeTeam.matchup.losses
            )}
            status={game.boxscore.status}
          />
        </Stack>
      </Stack>
    </Box>
  </Card>
);