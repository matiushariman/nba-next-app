import { GameStatusText } from '../blocks/GameStatusText';
import { TeamDetails } from '../blocks/TeamDetails';

interface Team {
  teamId: string;
  teamName: string;
  teamAbbr: string;
  score: number;
  teamRecord: string;
}

export interface GameDetailsProps {
  statusDesc: string;
  status: '1' | '2' | '3';
  dateTimeEt: string;
  period: string;
  periodClock: string;
  homeTeam: Team;
  awayTeam: Team;
}

export function GameDetails({
  status,
  statusDesc,
  periodClock,
  period,
  dateTimeEt,
  awayTeam,
  homeTeam,
}: GameDetailsProps) {
  const hasGameStarted = status !== '1';
  const hasGameEnded = status === '3';

  return (
    <div className="inline-block w-40 cursor-pointer space-y-1.5 bg-black bg-opacity-0 p-2 transition-opacity hover:bg-opacity-10">
      <GameStatusText
        statusDesc={statusDesc}
        status={status}
        dateTimeEt={dateTimeEt}
        period={period}
        periodClock={periodClock}
      />
      <div className="space-y-1">
        <TeamDetails
          {...awayTeam}
          hasGameStarted={hasGameStarted}
          isWinner={hasGameEnded && awayTeam.score > homeTeam.score}
        />
        <TeamDetails
          {...homeTeam}
          hasGameStarted={hasGameStarted}
          isWinner={hasGameEnded && homeTeam.score > awayTeam.score}
        />
      </div>
    </div>
  );
}

export default GameDetails;
