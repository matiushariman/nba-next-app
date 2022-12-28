interface GetScoresDateGameProfile {
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

interface GetScoresDateGameBoxscore {
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
  readonly status: string;
  readonly statusDesc: string;
  readonly ties: string;
}

interface GetScoresDateGameTeamProfile {
  readonly abbr: string;
  readonly city: string;
  readonly cityEn: string;
  readonly code: string;
  readonly conference: string;
  readonly displayAbbr: string;
  readonly displayConference: string;
  readonly division: string;
  readonly id: string;
  readonly isAllStarTeam: boolean;
  readonly isLeagueTeam: boolean;
  readonly leagueId: string;
  readonly name: string;
  readonly nameEn: string;
}

interface GetScoresDateGameTeamMatchup {
  readonly confRank: string;
  readonly divRank: string;
  readonly losses: string;
  readonly seriesText: null | string;
  readonly wins: string;
}

interface GetScoresDateGameTeamScore {
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

interface GetScoresDateGameTeam {
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
  readonly league: { readonly id: '00'; readonly name: 'NBA' };
  readonly season: {
    readonly isCurrent: string;
    readonly rosterSeasonType: number;
    readonly rosterSeasonYear: string;
    readonly rosterSeasonYearDisplay: string;
    readonly scheduleSeasonType: number;
    readonly scheduleSeasonYear: string;
    readonly scheduleYearDisplay: string;
    readonly statsSeasonType: number;
    readonly statsSeasonYear: string;
    readonly statsSeasonYearDisplay: string;
    readonly year: string;
    readonly yearDisplay: string;
  };
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
