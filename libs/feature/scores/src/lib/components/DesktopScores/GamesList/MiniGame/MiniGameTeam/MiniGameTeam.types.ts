import type {
  GetScoresDateGameTeamProfile,
  GetScoresDateGameTeamScore,
  GetScoresDateGameBoxscore,
} from '../../../../../api';

export interface MiniGameTeamProps
  extends Pick<GetScoresDateGameTeamProfile, 'id' | 'name' | 'abbr'>,
    Pick<GetScoresDateGameTeamScore, 'score'>,
    Pick<GetScoresDateGameBoxscore, 'status'> {
  teamRecord: string;
}
