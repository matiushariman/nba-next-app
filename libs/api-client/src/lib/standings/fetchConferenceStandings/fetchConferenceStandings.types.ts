import type { League } from '../../../types/League.types';
import type { Season } from '../../../types/Season.types';
import type { TeamProfile } from '../../../types/Team.types';

type FetchConferenceStandingsStandingGroupTeamTeamProfile = TeamProfile;

interface FetchConferenceStandingsStandingGroupTeamStandings {
  readonly aheadAtHalfLoss: string;
  readonly aheadAtHalfWin: string;
  readonly aheadAtThirdLoss: string;
  readonly aheadAtThirdWin: string;
  readonly behindAtHalfLoss: string;
  readonly behindAtHalfWin: string;
  readonly behindAtThirdLoss: string;
  readonly behindAtThirdWin: string;
  readonly clinched: null;
  readonly confGamesBehind: number;
  readonly confLoss: number;
  readonly confRank: number;
  readonly confWin: number;
  readonly divGameBehind: number;
  readonly divLoss: number;
  readonly divRank: number;
  readonly divWin: number;
  readonly fewerTurnoversLoss: string;
  readonly fewerTurnoversWin: string;
  readonly homeLoss: number;
  readonly homeStreak: string;
  readonly homeWin: number;
  readonly last10: string;
  readonly last10Home: string;
  readonly last10Road: string;
  readonly leadInFgpctloss: string;
  readonly leadInFgpctwin: string;
  readonly leadInRebLoss: string;
  readonly leadInRebWin: string;
  readonly loseStreak: string;
  readonly losses: number;
  readonly onHotStreak: string;
  readonly oppover500Loss: string;
  readonly oppover500Win: string;
  readonly oppscore100PlusLoss: string;
  readonly oppscore100PlusWin: string;
  readonly otloss: string;
  readonly otwin: string;
  readonly pointsAgainst: number;
  readonly pointsDiff: number;
  readonly pointsFor: number;
  readonly roadLoss: number;
  readonly roadStreak: string;
  readonly roadWin: number;
  readonly score100PlusLoss: string;
  readonly score100PlusWin: string;
  readonly streak: string;
  readonly tenPtsOrMoreLoss: string;
  readonly tenPtsOrMoreWin: string;
  readonly threePtsOrLessLoss: string;
  readonly threePtsOrLessWin: string;
  readonly tiedAtHalfLoss: string;
  readonly tiedAtHalfWin: string;
  readonly tiedAtThirdLoss: string;
  readonly tiedAtThirdWin: string;
  readonly winPct: number;
  readonly winStreak: string;
  readonly wins: number;
}

interface FetchConferenceStandingsStandingGroupTeam {
  readonly profile: FetchConferenceStandingsStandingGroupTeamTeamProfile;
  readonly standings: FetchConferenceStandingsStandingGroupTeamStandings;
}

export interface FetchConferenceStandingsStandingGroup {
  readonly teams: FetchConferenceStandingsStandingGroupTeam[];
  readonly conference: 'Western' | 'Eastern';
  readonly displayConference: 'Western' | 'Eastern';
  readonly displayDivision: null;
  readonly division: null;
}

export interface FetchConferenceStandingsRes {
  readonly league: League;
  readonly season: Season;
  readonly grouping: 'conference';
  readonly standingGroups: FetchConferenceStandingsStandingGroup[];
}

export interface FetchConferenceStandingsBaseRes {
  readonly payload: FetchConferenceStandingsRes;
}
