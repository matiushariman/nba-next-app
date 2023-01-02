import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';

import { MobileTodayGame } from './MobileTodayGame';
import { useGamesContext } from '../../../../../../context/GamesContext';

export const MobileTodayGamesList = () => {
  const { games, isLoading } = useGamesContext();

  return (
    <>
      <Box
        sx={{
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          maxWidth: '100vw',
        }}
      >
        {games.map((game) => (
          <MobileTodayGame key={game.profile.gameId} game={game} />
        ))}
      </Box>
      <Backdrop open={isLoading} sx={{ position: 'absolute' }} />
    </>
  );
};
