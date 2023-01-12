import { GameDetails } from '@nba-app/scores-components';
import { formatDate } from '@nba-app/scores-utils';

/* eslint-disable-next-line */
export interface ScoreboardProps {}

const game = {
  statusDesc: 'FINAL',
  dateTimeEt: '2022-12-29T19:00',
  period: '4',
  periodClock: '12:00',
  awayTeam: {
    teamId: '1610612740',
    teamName: 'Pelicans',
    teamAbbr: 'NOP',
    score: 114,
    teamRecord: '25-17',
  },
  homeTeam: {
    teamId: '1610612738',
    teamName: 'Celtics',
    teamAbbr: 'BOS',
    score: 125,
    teamRecord: '30-12',
  },
};
export function Scoreboard(props: ScoreboardProps) {
  return (
    <div className="border">
      <div className="container mx-auto flex">
        <div className="w-48 p-3">
          <p className="text-sm font-bold">
            {formatDate(new Date(), 'ddd, MMM D')}
          </p>
        </div>
        <div className="flex-grow divide-x overflow-auto whitespace-nowrap">
          <GameDetails status="3" {...game} />
          <GameDetails status="3" {...game} />
          <GameDetails status="3" {...game} />
          <GameDetails status="3" {...game} />
          <GameDetails status="3" {...game} />
          <GameDetails status="3" {...game} />
          <GameDetails status="3" {...game} />
          <GameDetails status="3" {...game} />
          <GameDetails status="3" {...game} />
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
