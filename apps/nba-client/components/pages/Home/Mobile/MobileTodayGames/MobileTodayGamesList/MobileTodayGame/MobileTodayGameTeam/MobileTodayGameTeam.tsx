import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TeamLogo } from '@nba-app/ui';

import type { MobileTodayGameTeamProps } from './MobileTodayGameTeam.types';

export const MobileTodayGameTeam = ({
  id,
  name,
  abbr,
  score,
  teamRecord,
  status,
}: MobileTodayGameTeamProps) => (
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
