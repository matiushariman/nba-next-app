import type { GetScoresDateGameTeamProfile } from '../../../../../api';

export interface GameTeamProps
  extends Pick<GetScoresDateGameTeamProfile, 'id' | 'name'> {
  teamRecord: string;
}
