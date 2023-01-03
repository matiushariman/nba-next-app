import { render, screen } from '@nba-app/scores-test-utils';
import { GamesList } from '../GamesList';

jest.mock('../../../context/ScoresContext', () => ({
  useScoresContext: jest
    .fn()
    .mockReturnValueOnce({
      isLoading: false,
      games: [],
    })
    .mockReturnValueOnce({
      games: [
        {
          profile: {
            arenaLocation: 'Memphis, TN',
            arenaName: 'FedExForum',
            awayTeamId: '1610612758',
            dateTimeEt: '2023-01-01T20:00',
            gameId: '0022200547',
            homeTeamId: '1610612763',
            number: '547',
            scheduleCode: null,
            seasonType: '2',
            sequence: '1',
            utcMillis: '1672621200000',
          },
          boxscore: {
            attendance: '17,794',
            awayScore: 108,
            gameLength: '131',
            homeScore: 118,
            leadChanges: 11,
            officialsDisplayName1: 'Gediminas Petraitis',
            officialsDisplayName2: 'Jason Goldenberg',
            officialsDisplayName3: 'Jacyn Goble',
            period: '4',
            periodClock: '',
            status: '3',
            statusDesc: 'Final',
            ties: '8',
          },
          urls: [],
          broadcasters: [],
          homeTeam: {
            profile: {
              abbr: 'MEM',
              city: 'Memphis',
              cityEn: 'Memphis',
              code: 'grizzlies',
              conference: 'Western',
              displayAbbr: 'MEM',
              displayConference: 'Western',
              division: 'Southwest',
              id: '1610612763',
              isAllStarTeam: false,
              isLeagueTeam: true,
              leagueId: '00',
              name: 'Grizzlies',
              nameEn: 'Grizzlies',
            },
            matchup: {
              confRank: '2',
              divRank: '1',
              losses: '13',
              seriesText: null,
              wins: '23',
            },
            score: {
              assists: 25,
              biggestLead: 14,
              blocks: 8,
              blocksAgainst: 4,
              defRebs: 36,
              disqualifications: 0,
              ejections: 0,
              fastBreakPoints: 18,
              fga: 100,
              fgm: 46,
              fgpct: 46,
              flagrantFouls: 0,
              fouls: 18,
              fta: 24,
              ftm: 16,
              ftpct: 66.7,
              fullTimeoutsRemaining: 2,
              mins: 240,
              offRebs: 21,
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
              pointsInPaint: 64,
              pointsOffTurnovers: 24,
              q1Score: 27,
              q2Score: 32,
              q3Score: 32,
              q4Score: 27,
              rebs: 57,
              score: 118,
              seconds: 0,
              shortTimeoutsRemaining: 0,
              steals: 11,
              technicalFouls: 0,
              tpa: 32,
              tpm: 10,
              tppct: 31.3,
              turnovers: 12,
            },
            pointGameLeader: {
              profile: {
                code: 'ja_morant',
                country: 'United States',
                countryEn: 'United States',
                displayAffiliation: 'Murray State/United States',
                displayName: 'Ja Morant',
                displayNameEn: 'Ja Morant',
                dob: '934257600000',
                draftYear: '2019',
                experience: '3',
                firstInitial: 'J',
                firstName: 'Ja',
                firstNameEn: 'Ja',
                height: '1.88',
                jerseyNo: '12',
                lastName: 'Morant',
                lastNameEn: 'Morant',
                leagueId: '00',
                playerId: '1629630',
                position: 'G',
                schoolType: 'College',
                weight: '78.9 kg',
              },
              statTotal: {
                assists: 5,
                blocks: 1,
                defRebs: 7,
                efficiency: 26,
                fga: 23,
                fgm: 13,
                fgpct: 56.5,
                fouls: 4,
                fta: 10,
                ftm: 8,
                ftpct: 80,
                mins: 32,
                offRebs: 1,
                points: 35,
                rebs: 8,
                secs: 47,
                steals: 1,
                technicalFouls: 0,
                tpa: 5,
                tpm: 1,
                tppct: 20,
                turnovers: 3,
              },
            },
            assistGameLeader: {
              profile: {
                code: 'tyus_jones',
                country: 'United States',
                countryEn: 'United States',
                displayAffiliation: 'Duke/United States',
                displayName: 'Tyus Jones',
                displayNameEn: 'Tyus Jones',
                dob: '831700800000',
                draftYear: '2015',
                experience: '7',
                firstInitial: 'T',
                firstName: 'Tyus',
                firstNameEn: 'Tyus',
                height: '1.88',
                jerseyNo: '21',
                lastName: 'Jones',
                lastNameEn: 'Jones',
                leagueId: '00',
                playerId: '1626145',
                position: 'G',
                schoolType: 'College',
                weight: '88.9 kg',
              },
              statTotal: {
                assists: 8,
                blocks: 0,
                defRebs: 6,
                efficiency: 21,
                fga: 10,
                fgm: 5,
                fgpct: 50,
                fouls: 0,
                fta: 4,
                ftm: 3,
                ftpct: 75,
                mins: 32,
                offRebs: 0,
                points: 18,
                rebs: 6,
                secs: 18,
                steals: 1,
                technicalFouls: 0,
                tpa: 7,
                tpm: 5,
                tppct: 71.4,
                turnovers: 0,
              },
            },
            reboundGameLeader: {
              profile: {
                code: 'steven_adams',
                country: 'New Zealand',
                countryEn: 'New Zealand',
                displayAffiliation: 'Pittsburgh/New Zealand',
                displayName: 'Steven Adams',
                displayNameEn: 'Steven Adams',
                dob: '743140800000',
                draftYear: '2013',
                experience: '9',
                firstInitial: 'S',
                firstName: 'Steven',
                firstNameEn: 'Steven',
                height: '2.11',
                jerseyNo: '4',
                lastName: 'Adams',
                lastNameEn: 'Adams',
                leagueId: '00',
                playerId: '203500',
                position: 'C',
                schoolType: 'College',
                weight: '120.2 kg',
              },
              statTotal: {
                assists: 3,
                blocks: 2,
                defRebs: 10,
                efficiency: 15,
                fga: 12,
                fgm: 5,
                fgpct: 41.7,
                fouls: 4,
                fta: 2,
                ftm: 1,
                ftpct: 50,
                mins: 34,
                offRebs: 13,
                points: 11,
                rebs: 23,
                secs: 29,
                steals: 1,
                technicalFouls: 0,
                tpa: 0,
                tpm: 0,
                tppct: 0,
                turnovers: 4,
              },
            },
          },
          awayTeam: {
            profile: {
              abbr: 'SAC',
              city: 'Sacramento',
              cityEn: 'Sacramento',
              code: 'kings',
              conference: 'Western',
              displayAbbr: 'SAC',
              displayConference: 'Western',
              division: 'Pacific',
              id: '1610612758',
              isAllStarTeam: false,
              isLeagueTeam: true,
              leagueId: '00',
              name: 'Kings',
              nameEn: 'Kings',
            },
            matchup: {
              confRank: '6',
              divRank: '2',
              losses: '16',
              seriesText: null,
              wins: '19',
            },
            score: {
              assists: 24,
              biggestLead: 7,
              blocks: 4,
              blocksAgainst: 8,
              defRebs: 33,
              disqualifications: 0,
              ejections: 0,
              fastBreakPoints: 17,
              fga: 96,
              fgm: 39,
              fgpct: 40.6,
              flagrantFouls: 0,
              fouls: 18,
              fta: 15,
              ftm: 15,
              ftpct: 100,
              fullTimeoutsRemaining: 2,
              mins: 240,
              offRebs: 14,
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
              pointsInPaint: 44,
              pointsOffTurnovers: 7,
              q1Score: 26,
              q2Score: 32,
              q3Score: 29,
              q4Score: 21,
              rebs: 47,
              score: 108,
              seconds: 0,
              shortTimeoutsRemaining: 0,
              steals: 7,
              technicalFouls: 0,
              tpa: 43,
              tpm: 15,
              tppct: 34.9,
              turnovers: 16,
            },
            pointGameLeader: {
              profile: {
                code: "de'aaron_fox",
                country: 'United States',
                countryEn: 'United States',
                displayAffiliation: 'Kentucky/United States',
                displayName: "De'Aaron Fox",
                displayNameEn: "De'Aaron Fox",
                dob: '882594000000',
                draftYear: '2017',
                experience: '5',
                firstInitial: 'D',
                firstName: "De'Aaron",
                firstNameEn: "De'Aaron",
                height: '1.90',
                jerseyNo: '5',
                lastName: 'Fox',
                lastNameEn: 'Fox',
                leagueId: '00',
                playerId: '1628368',
                position: 'G',
                schoolType: 'College',
                weight: '83.9 kg',
              },
              statTotal: {
                assists: 6,
                blocks: 0,
                defRebs: 3,
                efficiency: 10,
                fga: 18,
                fgm: 7,
                fgpct: 38.9,
                fouls: 1,
                fta: 3,
                ftm: 3,
                ftpct: 100,
                mins: 35,
                offRebs: 1,
                points: 19,
                rebs: 4,
                secs: 32,
                steals: 1,
                technicalFouls: 0,
                tpa: 4,
                tpm: 2,
                tppct: 50,
                turnovers: 5,
              },
            },
            assistGameLeader: {
              profile: {
                code: "de'aaron_fox",
                country: 'United States',
                countryEn: 'United States',
                displayAffiliation: 'Kentucky/United States',
                displayName: "De'Aaron Fox",
                displayNameEn: "De'Aaron Fox",
                dob: '882594000000',
                draftYear: '2017',
                experience: '5',
                firstInitial: 'D',
                firstName: "De'Aaron",
                firstNameEn: "De'Aaron",
                height: '1.90',
                jerseyNo: '5',
                lastName: 'Fox',
                lastNameEn: 'Fox',
                leagueId: '00',
                playerId: '1628368',
                position: 'G',
                schoolType: 'College',
                weight: '83.9 kg',
              },
              statTotal: {
                assists: 6,
                blocks: 0,
                defRebs: 3,
                efficiency: 10,
                fga: 18,
                fgm: 7,
                fgpct: 38.9,
                fouls: 1,
                fta: 3,
                ftm: 3,
                ftpct: 100,
                mins: 35,
                offRebs: 1,
                points: 19,
                rebs: 4,
                secs: 32,
                steals: 1,
                technicalFouls: 0,
                tpa: 4,
                tpm: 2,
                tppct: 50,
                turnovers: 5,
              },
            },
            reboundGameLeader: {
              profile: {
                code: 'domantas_sabonis',
                country: 'Lithuania',
                countryEn: 'Lithuania',
                displayAffiliation: 'Gonzaga/Lithuania',
                displayName: 'Domantas Sabonis',
                displayNameEn: 'Domantas Sabonis',
                dob: '831096000000',
                draftYear: '2016',
                experience: '6',
                firstInitial: 'D',
                firstName: 'Domantas',
                firstNameEn: 'Domantas',
                height: '2.16',
                jerseyNo: '10',
                lastName: 'Sabonis',
                lastNameEn: 'Sabonis',
                leagueId: '00',
                playerId: '1627734',
                position: 'F-C',
                schoolType: 'College',
                weight: '108.9 kg',
              },
              statTotal: {
                assists: 4,
                blocks: 0,
                defRebs: 8,
                efficiency: 20,
                fga: 14,
                fgm: 8,
                fgpct: 57.1,
                fouls: 4,
                fta: 2,
                ftm: 2,
                ftpct: 100,
                mins: 32,
                offRebs: 6,
                points: 18,
                rebs: 14,
                secs: 57,
                steals: 1,
                technicalFouls: 0,
                tpa: 2,
                tpm: 0,
                tppct: 0,
                turnovers: 0,
              },
            },
          },
          ifNecessary: false,
          seriesText: null,
        },
      ],
      isLoading: false,
    }),
}));

describe('GamesList', () => {
  beforeEach(() => {
    render(<GamesList isExpandedMode />);
  });

  it('should render no games scheduled message when there is no game', () => {
    expect(screen.getByText(/no games/i)).toBeVisible();
  });

  it('should render list of games when there is game', () => {
    expect(screen.getByLabelText(/list of games/i)).toBeVisible();
  });
});