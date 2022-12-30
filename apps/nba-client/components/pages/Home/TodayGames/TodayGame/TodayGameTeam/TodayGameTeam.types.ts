import type { GetScoresDateGameTeamProfile } from '@nba-app/api-client-old';

export interface TodayGameTeamProps
  extends Pick<GetScoresDateGameTeamProfile, 'id' | 'name'> {
  teamRecord: string;
}
