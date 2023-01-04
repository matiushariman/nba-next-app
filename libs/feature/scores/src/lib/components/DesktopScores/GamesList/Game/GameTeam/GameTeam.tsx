import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TeamLogo } from '@nba-app/shared-components';

import type { FetchScoresDateGameTeamProfile } from '../../../../../api/fetchScores';

export interface GameTeamProps
  extends Pick<FetchScoresDateGameTeamProfile, 'id' | 'name'> {
  teamRecord: string;
}

const GameTeam = ({ id, name, teamRecord }: GameTeamProps) => (
  <Stack sx={{ alignItems: 'center', width: 100 }}>
    <TeamLogo id={id} name={name} />
    <Typography variant="body1">{name}</Typography>
    <Typography variant="body2">{teamRecord}</Typography>
  </Stack>
);

export default GameTeam;
