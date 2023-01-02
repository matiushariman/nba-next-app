import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { MobileTodayGame } from './MobileTodayGame';
import { useGamesContext } from '../../../../../../context/GamesContext';

export const MobileTodayGamesList = () => {
  const { games, isLoading } = useGamesContext();

  if (games.length === 0) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="body2" fontWeight="bold">
          No Games Scheduled
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {games.map((game) => (
        <MobileTodayGame key={game.profile.gameId} game={game} />
      ))}
      <Backdrop open={isLoading} sx={{ position: 'absolute' }} />
    </>
  );
};
