import { displayFormattedTeamRecord } from '@nba-app/formatting-utils';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { MobileGameStatus } from './MobileGameStatus';
import { MobileGameTeam } from './MobileGameTeam';

import type { MobileGameProps } from './MobileGame.types';

export const MobileGame = ({ game }: MobileGameProps) => (
  <Box
    aria-label={`Game between ${game.awayTeam.profile.name} and ${game.homeTeam.profile.name}`}
    sx={{ display: 'inline-block', width: 140, p: 1, pr: 2, pl: 2 }}
  >
    <Stack>
      <MobileGameStatus
        status={game.boxscore.status}
        statusDesc={game.boxscore.statusDesc}
        dateTimeEt={game.profile.dateTimeEt}
        period={game.boxscore.period}
        periodClock={game.boxscore.periodClock}
      />
      <MobileGameTeam
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
      <MobileGameTeam
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
  </Box>
);
