import Box from '@mui/material/Box';

import { TeamLogo } from '@nba-app/shared-components';

export interface ConferenceStandingsTableTeamNameProps {
  readonly teamId: string;
  readonly teamName: string;
  readonly teamRank: number;
}

const ConferenceStandingsTableTeamName = ({
  teamRank,
  teamId,
  teamName,
}: ConferenceStandingsTableTeamNameProps) => (
  <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
    {teamRank}
    <Box sx={{ ml: 2, mr: 1, display: 'flex', alignItems: 'center' }}>
      <TeamLogo id={teamId} name={teamName} width={24} height={24} />
    </Box>
    {teamName}
  </Box>
);

export default ConferenceStandingsTableTeamName;
