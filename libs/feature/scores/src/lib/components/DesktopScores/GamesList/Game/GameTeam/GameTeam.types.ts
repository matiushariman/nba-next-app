import type { GetScoresDateGameTeamProfile } from '@nba-app/api-client';

export interface GameTeamProps
  extends Pick<GetScoresDateGameTeamProfile, 'id' | 'name'> {
  teamRecord: string;
}
