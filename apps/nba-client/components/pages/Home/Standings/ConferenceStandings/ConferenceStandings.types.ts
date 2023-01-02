import type { FetchConferenceStandingsStandingGroup } from '@nba-app/api-client';

export interface ConferenceStandingsProps {
  readonly conferenceStandings: FetchConferenceStandingsStandingGroup[];
}
