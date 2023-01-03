import type {
  GetScoresDateGameTeamScore,
  GetScoresDateGameBoxscore,
} from '../../../../../api';

type Score = GetScoresDateGameTeamScore['score'];

export interface GameScoreProps
  extends Pick<GetScoresDateGameBoxscore, 'status'> {
  awayScore: Score;
  homeScore: Score;
}
