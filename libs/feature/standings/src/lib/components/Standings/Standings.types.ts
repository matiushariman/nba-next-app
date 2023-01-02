import type { FetchConferenceStandingsStandingGroup } from '@nba-app/api-client';

export interface StandingsProps {
  readonly conferenceStandings: FetchConferenceStandingsStandingGroup[];
}
