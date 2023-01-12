import { createGameDetailsProps } from './Scoreboard.utils';
import type { FetchScoresDateGame } from '@nba-app/scores-api';

const mockGame: FetchScoresDateGame = {
  profile: {
    arenaLocation: 'Charlotte, NC',
    arenaName: 'Spectrum Center',
    awayTeamId: '1610612760',
    dateTimeEt: '2022-12-29T19:00',
    gameId: '0022200523',
    homeTeamId: '1610612766',
    number: '523',
    scheduleCode: null,
    seasonType: '2',
    sequence: '1',
    utcMillis: '1672358400000',
  },
  boxscore: {
    attendance: '19,425',
    awayScore: 113,
    gameLength: '130',
    homeScore: 121,
    leadChanges: 8,
    officialsDisplayName1: 'Brian Forte',
    officialsDisplayName2: 'John Goble',
    officialsDisplayName3: 'Brandon Schwab',
    period: '4',
    periodClock: '',
    status: '3',
    statusDesc: 'Final',
    ties: '7',
  },
  urls: [],
  broadcasters: [],
  homeTeam: {
    profile: {
      abbr: 'CHA',
      city: 'Charlotte',
      cityEn: 'Charlotte',
      code: 'hornets',
      conference: 'Eastern',
      displayAbbr: 'CHA',
      displayConference: 'Eastern',
      division: 'Southeast',
      id: '1610612766',
      isAllStarTeam: false,
      isLeagueTeam: true,
      leagueId: '00',
      name: 'Hornets',
      nameEn: 'Hornets',
    },
    matchup: {
      confRank: '14',
      divRank: '5',
      losses: '26',
      seriesText: null,
      wins: '10',
    },
    score: {
      assists: 33,
      biggestLead: 10,
      blocks: 11,
      blocksAgainst: 1,
      defRebs: 40,
      disqualifications: 0,
      ejections: 0,
      fastBreakPoints: 15,
      fga: 84,
      fgm: 46,
      fgpct: 54.8,
      flagrantFouls: 0,
      fouls: 17,
      fta: 29,
      ftm: 19,
      ftpct: 65.5,
      fullTimeoutsRemaining: 2,
      mins: 240,
      offRebs: 12,
      ot10Score: 0,
      ot1Score: 0,
      ot2Score: 0,
      ot3Score: 0,
      ot4Score: 0,
      ot5Score: 0,
      ot6Score: 0,
      ot7Score: 0,
      ot8Score: 0,
      ot9Score: 0,
      pointsInPaint: 66,
      pointsOffTurnovers: 13,
      q1Score: 36,
      q2Score: 21,
      q3Score: 28,
      q4Score: 36,
      rebs: 52,
      score: 121,
      seconds: 0,
      shortTimeoutsRemaining: 0,
      steals: 8,
      technicalFouls: 0,
      tpa: 32,
      tpm: 10,
      tppct: 31.3,
      turnovers: 18,
    },
    pointGameLeader: {
      profile: {
        code: 'lamelo_ball',
        country: 'United States',
        countryEn: 'United States',
        displayAffiliation: 'Illawarra/United States',
        displayName: 'LaMelo Ball',
        displayNameEn: 'LaMelo Ball',
        dob: '998452800000',
        draftYear: '2020',
        experience: '2',
        firstInitial: 'L',
        firstName: 'LaMelo',
        firstNameEn: 'LaMelo',
        height: '2.01',
        jerseyNo: '1',
        lastName: 'Ball',
        lastNameEn: 'Ball',
        leagueId: '00',
        playerId: '1630163',
        position: 'G',
        schoolType: 'International',
        weight: '81.6 kg',
      },
      statTotal: {
        assists: 9,
        blocks: 2,
        defRebs: 8,
        efficiency: 28,
        fga: 15,
        fgm: 9,
        fgpct: 60,
        fouls: 3,
        fta: 4,
        ftm: 4,
        ftpct: 100,
        mins: 36,
        offRebs: 2,
        points: 27,
        rebs: 10,
        secs: 13,
        steals: 1,
        technicalFouls: 0,
        tpa: 10,
        tpm: 5,
        tppct: 50,
        turnovers: 3,
      },
    },
    assistGameLeader: {
      profile: {
        code: 'lamelo_ball',
        country: 'United States',
        countryEn: 'United States',
        displayAffiliation: 'Illawarra/United States',
        displayName: 'LaMelo Ball',
        displayNameEn: 'LaMelo Ball',
        dob: '998452800000',
        draftYear: '2020',
        experience: '2',
        firstInitial: 'L',
        firstName: 'LaMelo',
        firstNameEn: 'LaMelo',
        height: '2.01',
        jerseyNo: '1',
        lastName: 'Ball',
        lastNameEn: 'Ball',
        leagueId: '00',
        playerId: '1630163',
        position: 'G',
        schoolType: 'International',
        weight: '81.6 kg',
      },
      statTotal: {
        assists: 9,
        blocks: 2,
        defRebs: 8,
        efficiency: 28,
        fga: 15,
        fgm: 9,
        fgpct: 60,
        fouls: 3,
        fta: 4,
        ftm: 4,
        ftpct: 100,
        mins: 36,
        offRebs: 2,
        points: 27,
        rebs: 10,
        secs: 13,
        steals: 1,
        technicalFouls: 0,
        tpa: 10,
        tpm: 5,
        tppct: 50,
        turnovers: 3,
      },
    },
    reboundGameLeader: {
      profile: {
        code: 'mark_williams',
        country: 'United States',
        countryEn: 'United States',
        displayAffiliation: 'Duke/United States',
        displayName: 'Mark Williams',
        displayNameEn: 'Mark Williams',
        dob: '1008478800000',
        draftYear: '2022',
        experience: '0',
        firstInitial: 'M',
        firstName: 'Mark',
        firstNameEn: 'Mark',
        height: '2.13',
        jerseyNo: '5',
        lastName: 'Williams',
        lastNameEn: 'Williams',
        leagueId: '00',
        playerId: '1631109',
        position: 'C',
        schoolType: 'College',
        weight: '108.9 kg',
      },
      statTotal: {
        assists: 2,
        blocks: 2,
        defRebs: 9,
        efficiency: 22,
        fga: 7,
        fgm: 7,
        fgpct: 100,
        fouls: 2,
        fta: 5,
        ftm: 3,
        ftpct: 60,
        mins: 21,
        offRebs: 4,
        points: 17,
        rebs: 13,
        secs: 17,
        steals: 2,
        technicalFouls: 0,
        tpa: 0,
        tpm: 0,
        tppct: 0,
        turnovers: 1,
      },
    },
  },
  awayTeam: {
    profile: {
      abbr: 'OKC',
      city: 'Oklahoma City',
      cityEn: 'Oklahoma City',
      code: 'thunder',
      conference: 'Western',
      displayAbbr: 'OKC',
      displayConference: 'Western',
      division: 'Northwest',
      id: '1610612760',
      isAllStarTeam: false,
      isLeagueTeam: true,
      leagueId: '00',
      name: 'Thunder',
      nameEn: 'Thunder',
    },
    matchup: {
      confRank: '12',
      divRank: '5',
      losses: '20',
      seriesText: null,
      wins: '15',
    },
    score: {
      assists: 15,
      biggestLead: 3,
      blocks: 1,
      blocksAgainst: 11,
      defRebs: 30,
      disqualifications: 0,
      ejections: 0,
      fastBreakPoints: 6,
      fga: 99,
      fgm: 42,
      fgpct: 42.4,
      flagrantFouls: 0,
      fouls: 27,
      fta: 21,
      ftm: 18,
      ftpct: 85.7,
      fullTimeoutsRemaining: 1,
      mins: 240,
      offRebs: 11,
      ot10Score: 0,
      ot1Score: 0,
      ot2Score: 0,
      ot3Score: 0,
      ot4Score: 0,
      ot5Score: 0,
      ot6Score: 0,
      ot7Score: 0,
      ot8Score: 0,
      ot9Score: 0,
      pointsInPaint: 56,
      pointsOffTurnovers: 22,
      q1Score: 30,
      q2Score: 30,
      q3Score: 24,
      q4Score: 29,
      rebs: 41,
      score: 113,
      seconds: 0,
      shortTimeoutsRemaining: 0,
      steals: 9,
      technicalFouls: 0,
      tpa: 36,
      tpm: 11,
      tppct: 30.6,
      turnovers: 12,
    },
    pointGameLeader: {
      profile: {
        code: 'shai_gilgeous-alexander',
        country: 'Canada',
        countryEn: 'Canada',
        displayAffiliation: 'Kentucky/Canada',
        displayName: 'Shai Gilgeous-Alexander',
        displayNameEn: 'Shai Gilgeous-Alexander',
        dob: '900216000000',
        draftYear: '2018',
        experience: '4',
        firstInitial: 'S',
        firstName: 'Shai',
        firstNameEn: 'Shai',
        height: '1.98',
        jerseyNo: '2',
        lastName: 'Gilgeous-Alexander',
        lastNameEn: 'Gilgeous-Alexander',
        leagueId: '00',
        playerId: '1628983',
        position: 'G',
        schoolType: 'College',
        weight: '88.5 kg',
      },
      statTotal: {
        assists: 5,
        blocks: 0,
        defRebs: 1,
        efficiency: 19,
        fga: 23,
        fgm: 11,
        fgpct: 47.8,
        fouls: 4,
        fta: 7,
        ftm: 5,
        ftpct: 71.4,
        mins: 35,
        offRebs: 2,
        points: 28,
        rebs: 3,
        secs: 59,
        steals: 2,
        technicalFouls: 0,
        tpa: 3,
        tpm: 1,
        tppct: 33.3,
        turnovers: 2,
      },
    },
    assistGameLeader: {
      profile: {
        code: 'shai_gilgeous-alexander',
        country: 'Canada',
        countryEn: 'Canada',
        displayAffiliation: 'Kentucky/Canada',
        displayName: 'Shai Gilgeous-Alexander',
        displayNameEn: 'Shai Gilgeous-Alexander',
        dob: '900216000000',
        draftYear: '2018',
        experience: '4',
        firstInitial: 'S',
        firstName: 'Shai',
        firstNameEn: 'Shai',
        height: '1.98',
        jerseyNo: '2',
        lastName: 'Gilgeous-Alexander',
        lastNameEn: 'Gilgeous-Alexander',
        leagueId: '00',
        playerId: '1628983',
        position: 'G',
        schoolType: 'College',
        weight: '88.5 kg',
      },
      statTotal: {
        assists: 5,
        blocks: 0,
        defRebs: 1,
        efficiency: 19,
        fga: 23,
        fgm: 11,
        fgpct: 47.8,
        fouls: 4,
        fta: 7,
        ftm: 5,
        ftpct: 71.4,
        mins: 35,
        offRebs: 2,
        points: 28,
        rebs: 3,
        secs: 59,
        steals: 2,
        technicalFouls: 0,
        tpa: 3,
        tpm: 1,
        tppct: 33.3,
        turnovers: 2,
      },
    },
    reboundGameLeader: {
      profile: {
        code: 'jaylin_williams',
        country: 'United States',
        countryEn: 'United States',
        displayAffiliation: 'Arkansas/United States',
        displayName: 'Jaylin Williams',
        displayNameEn: 'Jaylin Williams',
        dob: '1025323200000',
        draftYear: '2022',
        experience: '0',
        firstInitial: 'J',
        firstName: 'Jaylin',
        firstNameEn: 'Jaylin',
        height: '2.06',
        jerseyNo: '6',
        lastName: 'Williams',
        lastNameEn: 'Williams',
        leagueId: '00',
        playerId: '1631119',
        position: 'F',
        schoolType: 'College',
        weight: '108.9 kg',
      },
      statTotal: {
        assists: 1,
        blocks: 1,
        defRebs: 8,
        efficiency: -2,
        fga: 5,
        fgm: 0,
        fgpct: 0,
        fouls: 5,
        fta: 0,
        ftm: 0,
        ftpct: 0,
        mins: 24,
        offRebs: 2,
        points: 0,
        rebs: 10,
        secs: 19,
        steals: 0,
        technicalFouls: 0,
        tpa: 1,
        tpm: 0,
        tppct: 0,
        turnovers: 2,
      },
    },
  },
  ifNecessary: false,
  seriesText: null,
};

describe('Scoreboard utils', () => {
  it('should transform response to scoreboard', () => {
    expect(createGameDetailsProps(mockGame)).toMatchSnapshot();
  });
});
