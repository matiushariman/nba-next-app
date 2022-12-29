import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { displayFormattedTeamRecord } from '@nba-app/formatting-utils';

import { TodayGameTeam } from './TodayGameTeam';
import { TodayGameScore } from './TodayGameScore';
import { TodayGameStatus } from './TodayGameStatus';

import type { TodayGameProps } from './TodayGame.types';

export const TodayGame = ({ game }: TodayGameProps) => (
  <Card
    sx={(theme) => ({
      width: '100%',
      ...(theme.palette.mode === 'dark' && {
        backgroundColor: theme.palette.grey['900'],
      }),
    })}
    variant="outlined"
  >
    <CardContent sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <TodayGameStatus
        status={game.boxscore.status}
        statusDesc={game.boxscore.statusDesc}
        dateTimeEt={game.profile.dateTimeEt}
        period={game.boxscore.period}
        periodClock={game.boxscore.periodClock}
      />
    </CardContent>
    <Divider />
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TodayGameTeam
          name={game.awayTeam.profile.name}
          id={game.awayTeam.profile.id}
          teamRecord={displayFormattedTeamRecord(
            game.awayTeam.matchup.wins,
            game.awayTeam.matchup.losses
          )}
        />
        <Box sx={{ flexGrow: 1 }}>
          <TodayGameScore
            awayScore={game.awayTeam.score.score}
            homeScore={game.homeTeam.score.score}
            status={game.boxscore.status}
          />
        </Box>
        <TodayGameTeam
          name={game.homeTeam.profile.name}
          id={game.homeTeam.profile.id}
          teamRecord={displayFormattedTeamRecord(
            game.homeTeam.matchup.wins,
            game.homeTeam.matchup.losses
          )}
        />
      </Box>
    </CardContent>
  </Card>
);
