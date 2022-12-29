import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TeamLogo } from '../../../../../ui/TeamLogo';

import type { MiniTodayGameTeamProps } from './MiniTodayGameTeam.types';

export const MiniTodayGameTeam = ({
  id,
  name,
  abbr,
  score,
  teamRecord,
  status,
}: MiniTodayGameTeamProps) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box sx={{ mr: 1 }}>
      <TeamLogo id={id} name={name} width={20} height={20} />
    </Box>
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="subtitle2" fontWeight="bold">
        {abbr}
      </Typography>
    </Box>
    {status === '1' ? (
      <Typography variant="caption">{teamRecord}</Typography>
    ) : (
      <Typography variant="subtitle2" fontWeight="bold">
        {score}
      </Typography>
    )}
  </Box>
);