import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type {
  FetchScoresDateGameTeamScore,
  FetchScoresDateGameBoxscore,
} from '../../../../../api/fetchScores';

type Score = FetchScoresDateGameTeamScore['score'];

export interface GameScoreProps
  extends Pick<FetchScoresDateGameBoxscore, 'status'> {
  awayScore: Score;
  homeScore: Score;
}

const GameScore = ({ homeScore, awayScore, status }: GameScoreProps) => {
  if (status === '1') {
    return null;
  }
  const isGameOver = status === '3';
  const didAwayWin = isGameOver && awayScore > homeScore;
  const didHomeWin = isGameOver && homeScore > awayScore;

  return (
    <Box sx={{ display: 'flex' }}>
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

export default GameScore;
