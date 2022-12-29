import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Image from 'next/image';

import type { TodayGameTeamProps } from './TodayGameTeam.types';

export const TodayGameTeam = ({ id, name, teamRecord }: TodayGameTeamProps) => {
  const theme = useTheme();
  const logoMode = theme.palette.mode === 'dark' ? 'D' : 'L';

  return (
    <Stack sx={{ alignItems: 'center', width: 100 }}>
      <Image
        src={`https://cdn.nba.com/logos/nba/${id}/global/${logoMode}/logo.svg`}
        alt={name}
        width={52}
        height={52}
      />
      <Typography variant="body1">{name}</Typography>
      <Typography variant="body2">{teamRecord}</Typography>
    </Stack>
  );
};
