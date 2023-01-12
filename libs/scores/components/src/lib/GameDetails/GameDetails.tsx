import { GameStatusText } from '../blocks/GameStatusText';
import { TeamDetails } from '../blocks/TeamDetails';

/* eslint-disable-next-line */
export interface GameDetailsProps {}

export function GameDetails(props: GameDetailsProps) {
  return (
    <div className="inline-block cursor-pointer space-y-1.5 bg-black bg-opacity-0 p-2 transition-opacity hover:bg-opacity-10">
      <GameStatusText
        statusDesc="FINAL"
        status="3"
        dateTimeEt=""
        period="4"
        periodClock=""
      />
      <div className="space-y-1">
        <TeamDetails
          teamId="1610612740"
          teamName="Pelicans"
          teamAbbr="NOP"
          score={114}
          teamRecord="25-17"
          hasGameStarted
          isWinner={false}
        />
        <TeamDetails
          teamId="1610612738"
          teamName="Celtics"
          teamAbbr="BOS"
          score={125}
          teamRecord="30-12"
          hasGameStarted
          isWinner
        />
      </div>
    </div>
  );
}

export default GameDetails;
