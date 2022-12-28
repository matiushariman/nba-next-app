import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { TodayGameScoreProps } from './TodayGameScore.types';

export const TodayGameScore = ({
  homeScore,
  awayScore,
  status,
}: TodayGameScoreProps) => {
  if (status === '1') {
    return null;
  }
  const isGameOver = status === '3';
  const didAwayWin = isGameOver && awayScore > homeScore;
  const didHomeWin = isGameOver && homeScore > awayScore;

  return (
    <Box sx={{ display: 'flex', p: 2 }}>
      <Typography variant="h5" fontWeight={didAwayWin ? 'bold' : 'normal'}>
        {awayScore}
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Typography variant="h5" fontWeight={didHomeWin ? 'bold' : 'normal'}>
        {homeScore}
      </Typography>
    </Box>
  );
};
