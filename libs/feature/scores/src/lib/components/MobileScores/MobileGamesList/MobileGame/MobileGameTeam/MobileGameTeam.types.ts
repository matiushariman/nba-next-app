import type {
  FetchScoresDateGameTeamProfile,
  FetchScoresDateGameTeamScore,
  FetchScoresDateGameBoxscore,
} from '../../../../../api';

export interface MobileGameTeamProps
  extends Pick<FetchScoresDateGameTeamProfile, 'id' | 'name' | 'abbr'>,
    Pick<FetchScoresDateGameTeamScore, 'score'>,
    Pick<FetchScoresDateGameBoxscore, 'status'> {
  teamRecord: string;
}
