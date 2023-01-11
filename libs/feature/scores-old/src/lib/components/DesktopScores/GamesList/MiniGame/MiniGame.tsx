import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import MiniGameTeam from './MiniGameTeam';
import MiniGameStatus from './MiniGameStatus';
import { displayFormattedTeamRecord } from '../../../../utils';

import type { FetchScoresDateGame } from '../../../../api/fetchScores';

export interface MiniGameProps {
  readonly game: FetchScoresDateGame;
}

const MiniGame = ({ game }: MiniGameProps) => (
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
        <MiniGameStatus
          status={game.boxscore.status}
          statusDesc={game.boxscore.statusDesc}
          dateTimeEt={game.profile.dateTimeEt}
          period={game.boxscore.period}
          periodClock={game.boxscore.periodClock}
        />
        <Stack>
          <MiniGameTeam
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
          <MiniGameTeam
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

export default MiniGame;
