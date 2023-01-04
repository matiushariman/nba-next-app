import Stack from '@mui/material/Stack';
import ConferenceStandingsTable from './ConferenceStandingsTable';

import type { FetchConferenceStandingsStandingGroup } from '../../../api/fetchConferenceStandings';

export interface ConferenceStandingsProps {
  readonly conferenceStandings: FetchConferenceStandingsStandingGroup[];
}

const ConferenceStandings = ({
  conferenceStandings,
}: ConferenceStandingsProps) => (
  <Stack spacing={4}>
    {conferenceStandings.map((conference) => (
      <ConferenceStandingsTable
        key={conference.conference}
        conference={conference}
      />
    ))}
  </Stack>
);

export default ConferenceStandings;
