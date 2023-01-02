import Stack from '@mui/material/Stack';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';

import { TodayGame } from './TodayGame';
import { MiniTodayGame } from './MiniTodayGame';
import { useGamesContext } from '../../../../../context/GamesContext';

import type { TodayGamesListProps } from './TodayGamesList.types';

export const TodayGamesList = ({ isExpandedMode }: TodayGamesListProps) => {
  const { games, isLoading } = useGamesContext();

  if (games.length === 0) {
    return (
      <Stack sx={{ p: 4, position: 'relative' }}>
        <Typography textAlign="center" fontWeight="bold">
          No Games Scheduled
        </Typography>
        <Backdrop open={isLoading} sx={{ position: 'absolute' }} />
      </Stack>
    );
  }

  return (
    <Stack
      aria-label="List of games"
      sx={{
        position: 'relative',
        pt: 2,
        ...(isExpandedMode && { pl: 2, pr: 2 }),
      }}
      spacing={isExpandedMode ? 2 : 0}
    >
      {games.map((game) =>
        isExpandedMode ? (
          <TodayGame game={game} key={game.profile.gameId} />
        ) : (
          <MiniTodayGame game={game} key={game.profile.gameId} />
        )
      )}
      <Backdrop open={isLoading} sx={{ position: 'absolute' }} />
    </Stack>
  );
};
