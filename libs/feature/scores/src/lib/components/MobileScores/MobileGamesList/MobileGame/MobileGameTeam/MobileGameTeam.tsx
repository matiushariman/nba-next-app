import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TeamLogo } from '@nba-app/shared-ui';

import type {
  FetchScoresDateGameTeamProfile,
  FetchScoresDateGameTeamScore,
  FetchScoresDateGameBoxscore,
} from '../../../../../api/fetchScores';

export interface MobileGameTeamProps
  extends Pick<FetchScoresDateGameTeamProfile, 'id' | 'name' | 'abbr'>,
    Pick<FetchScoresDateGameTeamScore, 'score'>,
    Pick<FetchScoresDateGameBoxscore, 'status'> {
  teamRecord: string;
}

const MobileGameTeam = ({
  id,
  name,
  abbr,
  score,
  teamRecord,
  status,
}: MobileGameTeamProps) => (
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

export default MobileGameTeam;
