import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { MobileTodayGame } from './MobileTodayGame';
import { useGamesContext } from '../../../../../../context/GamesContext';

export const MobileTodayGamesList = () => {
  const { games } = useGamesContext();

  if (games.length === 0) {
    return <Typography>NO GAMES SCHEDULED</Typography>;
  }

  return (
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
  );
};
