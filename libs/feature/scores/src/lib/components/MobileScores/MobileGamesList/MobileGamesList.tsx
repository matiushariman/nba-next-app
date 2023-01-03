import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { MobileGame } from './MobileGame';
import { useScoresContext } from '../../../context/ScoresContext';

export const MobileGamesList = () => {
  const { games, isLoading } = useScoresContext();

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
        <MobileGame key={game.profile.gameId} game={game} />
      ))}
      <Backdrop open={isLoading} sx={{ position: 'absolute' }} />
    </>
  );
};
