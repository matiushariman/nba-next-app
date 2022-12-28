import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import type { TodayGameTeamProps } from './TodayGameTeam.types';

export const TodayGameTeam = ({ id, name, teamRecord }: TodayGameTeamProps) => (
  <Stack sx={{ alignItems: 'center' }}>
    <Image
      src={`https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`}
      alt={name}
      width={52}
      height={52}
    />
    <Typography variant="body1">{name}</Typography>
    <Typography variant="body2">{teamRecord}</Typography>
  </Stack>
);
