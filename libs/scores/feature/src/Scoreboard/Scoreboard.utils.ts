import type { GameDetailsProps } from '@nba-app/scores-components';
import type { FetchScoresDateGame } from '@nba-app/scores-api-dep';

export const createGameDetailsProps = (
  game: FetchScoresDateGame
): GameDetailsProps => ({
  period: game.boxscore.period,
  status: game.boxscore.status,
  periodClock: game.boxscore.periodClock,
  statusDesc: game.boxscore.statusDesc,
  dateTimeEt: game.profile.dateTimeEt,
  homeTeam: {
    teamId: game.homeTeam.profile.id,
    score: game.boxscore.homeScore,
    teamAbbr: game.homeTeam.profile.abbr,
    teamName: game.homeTeam.profile.name,
    teamRecord: '82-0',
  },
  awayTeam: {
    teamId: game.awayTeam.profile.id,
    score: game.boxscore.awayScore,
    teamAbbr: game.awayTeam.profile.abbr,
    teamName: game.awayTeam.profile.name,
    teamRecord: '82-0',
  },
});
