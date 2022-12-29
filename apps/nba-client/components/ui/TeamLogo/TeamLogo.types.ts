import type { GetScoresDateGameTeamProfile } from '@nba-app/api-client';

export interface TeamLogoProps
  extends Pick<GetScoresDateGameTeamProfile, 'id' | 'name'> {
  width?: number;
  height?: number;
}
