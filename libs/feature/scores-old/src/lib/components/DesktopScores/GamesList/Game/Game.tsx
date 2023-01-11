import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import { displayFormattedTeamRecord } from '../../../../utils';

import GameTeam from './GameTeam';
import GameScore from './GameScore';
import GameStatus from './GameStatus';

import type { FetchScoresDateGame } from '../../../../api/fetchScores';

export interface GameProps {
  readonly game: FetchScoresDateGame;
}

const Game = ({ game }: GameProps) => (
  <Card
    sx={(theme) => ({
      width: '100%',
      ...(theme.palette.mode === 'dark' && {
        backgroundColor: theme.palette.grey['900'],
      }),
    })}
    variant="outlined"
    aria-label={`${game.awayTeam.profile.name} @ ${game.homeTeam.profile.name}`}
  >
    <CardContent sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <GameStatus
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
        <GameTeam
          name={game.awayTeam.profile.name}
          id={game.awayTeam.profile.id}
          teamRecord={displayFormattedTeamRecord(
            game.awayTeam.matchup.wins,
            game.awayTeam.matchup.losses
          )}
        />
        <Box sx={{ flexGrow: 1 }}>
          <GameScore
            awayScore={game.awayTeam.score.score}
            homeScore={game.homeTeam.score.score}
            status={game.boxscore.status}
          />
        </Box>
        <GameTeam
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

export default Game;
