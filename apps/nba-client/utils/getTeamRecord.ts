import { GetScoresDateGameTeamMatchup } from '@nba-app/api-client';

export const getTeamRecord = (matchup: GetScoresDateGameTeamMatchup) =>
  `${matchup.wins} - ${matchup.losses}`;
