import type { League } from '../../../types/League.types';
import type { Season } from '../../../types/Season.types';
import type { TeamProfile } from '../../../types/Team.types';

export interface GetScoresDateGameProfile {
  readonly arenaLocation: string;
  readonly arenaName: string;
  readonly awayTeamId: string;
  readonly dateTimeEt: string;
  readonly gameId: string;
  readonly homeTeamId: string;
  readonly number: string;
  readonly scheduleCode: null;
  readonly seasonType: string;
  readonly sequence: string;
  readonly utcMillis: string;
}

export interface GetScoresDateGameBoxscore {
  readonly attendance: string;
  readonly awayScore: number;
  readonly gameLength: string;
  readonly homeScore: number;
  readonly leadChanges: number;
  readonly officialsDisplayName1: string;
  readonly officialsDisplayName2: string;
  readonly officialsDisplayName3: string;
  readonly period: string;
  readonly periodClock: string;
  readonly status: '1' | '2' | '3';
  readonly statusDesc: string;
  readonly ties: string;
}

export type GetScoresDateGameTeamProfile = TeamProfile;

export interface GetScoresDateGameTeamMatchup {
  readonly confRank: string;
  readonly divRank: string;
  readonly losses: string;
  readonly seriesText: null | string;
  readonly wins: string;
}

export interface GetScoresDateGameTeamScore {
  readonly assists: number;
  readonly biggestLead: number;
  readonly blocks: number;
  readonly blocksAgainst: number;
  readonly defRebs: number;
  readonly disqualifications: number;
  readonly ejections: number;
  readonly fastBreakPoints: number;
  readonly fga: number;
  readonly fgm: number;
  readonly fgpct: number;
  readonly flagrantFouls: number;
  readonly fouls: number;
  readonly fta: number;
  readonly ftm: number;
  readonly ftpct: number;
  readonly fullTimeoutsRemaining: number;
  readonly mins: number;
  readonly offRebs: number;
  readonly ot10Score: number;
  readonly ot1Score: number;
  readonly ot2Score: number;
  readonly ot3Score: number;
  readonly ot4Score: number;
  readonly ot5Score: number;
  readonly ot6Score: number;
  readonly ot7Score: number;
  readonly ot8Score: number;
  readonly ot9Score: number;
  readonly pointsInPaint: number;
  readonly pointsOffTurnovers: number;
  readonly q1Score: number;
  readonly q2Score: number;
  readonly q3Score: number;
  readonly q4Score: number;
  readonly rebs: number;
  readonly score: number;
  readonly seconds: number;
  readonly shortTimeoutsRemaining: number;
  readonly steals: number;
  readonly technicalFouls: number;
  readonly tpa: number;
  readonly tpm: number;
  readonly tppct: number;
  readonly turnovers: number;
}

interface GetScoresDateGameTeamGameLeaderProfile {
  readonly code: string;
  readonly country: string;
  readonly countryEn: string;
  readonly displayAffiliation: string;
  readonly displayName: string;
  readonly displayNameEn: string;
  readonly dob: string;
  readonly draftYear: string;
  readonly experience: string;
  readonly firstInitial: string;
  readonly firstName: string;
  readonly firstNameEn: string;
  readonly height: string;
  readonly jerseyNo: string;
  readonly lastName: string;
  readonly lastNameEn: string;
  readonly leagueId: string;
  readonly playerId: string;
  readonly position: string;
  readonly schoolType: string;
  readonly weight: string;
}

interface GetScoresDateGameTeamGameLeaderStatTotal {
  readonly assists: number;
  readonly blocks: number;
  readonly defRebs: number;
  readonly efficiency: number;
  readonly fga: number;
  readonly fgm: number;
  readonly fgpct: number;
  readonly fouls: number;
  readonly fta: number;
  readonly ftm: number;
  readonly ftpct: number;
  readonly mins: number;
  readonly offRebs: number;
  readonly points: number;
  readonly rebs: number;
  readonly secs: number;
  readonly steals: number;
  readonly technicalFouls: number;
  readonly tpa: number;
  readonly tpm: number;
  readonly tppct: number;
  readonly turnovers: number;
}

interface GetScoresDateGameTeamGameLeader {
  readonly profile: GetScoresDateGameTeamGameLeaderProfile;
  readonly statTotal: GetScoresDateGameTeamGameLeaderStatTotal;
}

export interface GetScoresDateGameTeam {
  readonly profile: GetScoresDateGameTeamProfile;
  readonly matchup: GetScoresDateGameTeamMatchup;
  readonly score: GetScoresDateGameTeamScore;
  readonly pointGameLeader: GetScoresDateGameTeamGameLeader;
  readonly assistGameLeader: GetScoresDateGameTeamGameLeader;
  readonly reboundGameLeader: GetScoresDateGameTeamGameLeader;
}

export interface GetScoresDateGame {
  readonly profile: GetScoresDateGameProfile;
  readonly boxscore: GetScoresDateGameBoxscore;
  readonly urls: [];
  readonly broadcasters: [];
  readonly homeTeam: GetScoresDateGameTeam;
  readonly awayTeam: GetScoresDateGameTeam;
  readonly ifNecessary: boolean;
  readonly seriesText: null | string;
}

export interface GetScoresDate {
  readonly games: GetScoresDateGame[];
  readonly dateMillis: string;
  readonly gameCount: string;
}

export interface GetScoresPayload {
  readonly league: League;
  readonly season: Season;
  readonly date: GetScoresDate | null;
  readonly nextAvailableDateMillis: string;
  readonly utcMillis: string;
}

export interface GetScoresBaseRes {
  readonly payload: GetScoresPayload;
}

export interface GetScoresReq {
  readonly gameDate: string;
}
