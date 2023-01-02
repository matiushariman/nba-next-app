import Stack from '@mui/material/Stack';
import { ConferenceStandingsTable } from './ConferenceStandingsTable';
import type { ConferenceStandingsProps } from './ConferenceStandings.types';

export const ConferenceStandings = ({
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
