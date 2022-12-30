import type {
  GetScoresDateGameTeamScore,
  GetScoresDateGameBoxscore,
} from '@nba-app/api-client-old';

type Score = GetScoresDateGameTeamScore['score'];

export interface TodayGameScoreProps
  extends Pick<GetScoresDateGameBoxscore, 'status'> {
  awayScore: Score;
  homeScore: Score;
}
