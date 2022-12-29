import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TeamLogo } from '../../../../../ui/TeamLogo';

import type { TodayGameTeamProps } from './TodayGameTeam.types';

export const TodayGameTeam = ({ id, name, teamRecord }: TodayGameTeamProps) => (
  <Stack sx={{ alignItems: 'center', width: 100 }}>
    <TeamLogo id={id} name={name} />
    <Typography variant="body1">{name}</Typography>
    <Typography variant="body2">{teamRecord}</Typography>
  </Stack>
);
