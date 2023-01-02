import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ConferenceStandings } from './ConferenceStandings';

import type { StandingsProps } from './Standings.types';

export const Standings = ({ conferenceStandings }: StandingsProps) => (
  <Stack spacing={1}>
    <Typography fontWeight="bold" variant="h5" textTransform="uppercase">
      Standings
    </Typography>
    <Card variant="outlined" square>
      <CardContent>
        <ConferenceStandings conferenceStandings={conferenceStandings} />
      </CardContent>
    </Card>
  </Stack>
);
