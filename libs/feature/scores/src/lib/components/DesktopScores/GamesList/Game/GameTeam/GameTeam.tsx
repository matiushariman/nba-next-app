import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TeamLogo } from '@nba-app/ui';

import type { GameTeamProps } from './GameTeam.types';

export const GameTeam = ({ id, name, teamRecord }: GameTeamProps) => (
  <Stack sx={{ alignItems: 'center', width: 100 }}>
    <TeamLogo id={id} name={name} />
    <Typography variant="body1">{name}</Typography>
    <Typography variant="body2">{teamRecord}</Typography>
  </Stack>
);
