import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import { TodayGameTeam } from './TodayGameTeam';
import { TodayGameScore } from './TodayGameScore';
import { TodayGameStatus } from './TodayGameStatus';
import { getTeamRecord } from '../../../../../utils/getTeamRecord';

import type { TodayGameProps } from './TodayGame.types';

export const TodayGame = ({ game }: TodayGameProps) => (
  <Card sx={{ width: '100%' }} variant="outlined">
    <CardContent>
      <TodayGameStatus
        status={game.boxscore.status}
        statusDesc={game.boxscore.statusDesc}
        dateTimeEt={game.profile.dateTimeEt}
      />
    </CardContent>
    <Divider />
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TodayGameTeam
          name={game.awayTeam.profile.name}
          id={game.awayTeam.profile.id}
          teamRecord={getTeamRecord(game.awayTeam.matchup)}
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
          teamRecord={getTeamRecord(game.homeTeam.matchup)}
        />
      </Box>
    </CardContent>
  </Card>
);
