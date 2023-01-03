import type { FetchScoresDateGameTeamProfile } from '../../../../../api';

export interface GameTeamProps
  extends Pick<FetchScoresDateGameTeamProfile, 'id' | 'name'> {
  teamRecord: string;
}
