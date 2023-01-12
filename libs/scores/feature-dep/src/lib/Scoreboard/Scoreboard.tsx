import { GameDetails } from '@nba-app/scores-components';
import { formatDate } from '@nba-app/scores-utils';
import { createGameDetailsProps } from './Scoreboard.utils';

import type { FetchScoresDateGame } from '@nba-app/scores-api-dep';

export interface ScoreboardProps {
  games: FetchScoresDateGame[];
}

export function Scoreboard({ games }: ScoreboardProps) {
  return (
    <div className="border">
      <div className="container mx-auto flex min-h-[107px]">
        <div className="w-40 space-y-1 p-3">
          <p className="text-sm font-bold">
            {formatDate(new Date(), 'ddd, MMM D')}
          </p>
          <p className="text-sm">{games.length} game(s)</p>
        </div>
        {games.length > 0 ? (
          <div
            className="flex-grow divide-x overflow-auto whitespace-nowrap"
            aria-label="list of games"
          >
            {games.map((game) => (
              <GameDetails
                key={game.profile.gameId}
                {...createGameDetailsProps(game)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-grow items-center justify-center">
            <p className="font-bold">No games scheduled</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Scoreboard;
