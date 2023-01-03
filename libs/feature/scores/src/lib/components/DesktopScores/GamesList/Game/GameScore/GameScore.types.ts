import type {
  FetchScoresDateGameTeamScore,
  FetchScoresDateGameBoxscore,
} from '../../../../../api';

type Score = FetchScoresDateGameTeamScore['score'];

export interface GameScoreProps
  extends Pick<FetchScoresDateGameBoxscore, 'status'> {
  awayScore: Score;
  homeScore: Score;
}
