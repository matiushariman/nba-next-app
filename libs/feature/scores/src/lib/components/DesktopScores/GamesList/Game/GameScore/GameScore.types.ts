import type {
  GetScoresDateGameTeamScore,
  GetScoresDateGameBoxscore,
} from '@nba-app/api-client';

type Score = GetScoresDateGameTeamScore['score'];

export interface GameScoreProps
  extends Pick<GetScoresDateGameBoxscore, 'status'> {
  awayScore: Score;
  homeScore: Score;
}
