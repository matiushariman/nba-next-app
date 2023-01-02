import type {
  GetScoresDateGameTeamProfile,
  GetScoresDateGameTeamScore,
  GetScoresDateGameBoxscore,
} from '@nba-app/api-client';

export interface MiniTodayGameTeamProps
  extends Pick<GetScoresDateGameTeamProfile, 'id' | 'name' | 'abbr'>,
    Pick<GetScoresDateGameTeamScore, 'score'>,
    Pick<GetScoresDateGameBoxscore, 'status'> {
  teamRecord: string;
}