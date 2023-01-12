import { TeamName } from '../TeamName';
import { TeamScore } from '../TeamScore';

export interface TeamDetailsProps {
  teamName: string;
  teamId: string;
  teamAbbr: string;
  score: number;
  teamRecord: string;
  hasGameStarted: boolean;
  isWinner: boolean;
}

export function TeamDetails({
  teamName,
  teamId,
  teamAbbr,
  score,
  teamRecord,
  hasGameStarted,
  isWinner,
}: TeamDetailsProps) {
  return (
    <div className="flex items-center space-x-1">
      <div className="min-w-[96px] flex-grow">
        <TeamName teamId={teamId} teamName={teamName} teamAbbr={teamAbbr} />
      </div>
      {hasGameStarted ? (
        <TeamScore score={score} isWinner={isWinner} />
      ) : (
        <p className="text-sm text-gray-400">{teamRecord}</p>
      )}
    </div>
  );
}

export default TeamDetails;
