import { TeamLogo } from '@nba-app/shared-ui';

export interface TeamScoreProps {
  teamId: string;
  teamName: string;
  teamAbbr: string;
}

export function TeamName({ teamName, teamId, teamAbbr }: TeamScoreProps) {
  return (
    <div className="flex items-center space-x-2">
      <TeamLogo id={teamId} name={teamName} width={24} height={24} />
      <p className="text-sm font-bold">{teamAbbr}</p>
    </div>
  );
}

export default TeamName;
