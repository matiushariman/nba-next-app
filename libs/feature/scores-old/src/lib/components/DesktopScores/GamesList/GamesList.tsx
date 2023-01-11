import Stack from '@mui/material/Stack';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';

import Game from './Game';
import MiniGame from './MiniGame';
import { useScoresContext } from '../../../context/ScoresContext';

export interface GamesListProps {
  readonly isExpandedMode: boolean;
}

const GamesList = ({ isExpandedMode }: GamesListProps) => {
  const { games, isLoading } = useScoresContext();

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
          <Game game={game} key={game.profile.gameId} />
        ) : (
          <MiniGame game={game} key={game.profile.gameId} />
        )
      )}
      <Backdrop open={isLoading} sx={{ position: 'absolute' }} />
    </Stack>
  );
};

export default GamesList;
