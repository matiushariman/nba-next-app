import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { ConferenceStandingsTableTeamName } from './ConferenceStandingsTableTeamName';
import { ConferenceStandingsTableWinPct } from './ConferenceStandingsTableWinPct';
import { ConferenceStandingsTableWinLoseRecord } from './ConferenceStandingsTableWinLoseRecord';
import { ConferenceStandingsTableStreak } from './ConferenceStandingsTableStreak';
import { displayGameBehind } from './ConferenceStandingsTable.utils';

import type { ConferenceStandingsTableProps } from './ConferenceStandingsTable.types';

const HEADER = [
  { label: 'Team', minWidth: 225 },
  { label: 'W', minWidth: 60 },
  { label: 'L', minWidth: 60 },
  { label: 'Win%', minWidth: 90 },
  { label: 'GB', minWidth: 70 },
  { label: 'Conf', minWidth: 90 },
  { label: 'Div', minWidth: 90 },
  { label: 'Home', minWidth: 90 },
  { label: 'Road', minWidth: 90 },
  { label: 'OT', minWidth: 90 },
  { label: 'Streak', minWidth: 105 },
];

export const ConferenceStandingsTable = ({
  conference,
}: ConferenceStandingsTableProps) => (
  <Stack spacing={1}>
    <Typography fontWeight="bold">
      {conference.displayConference} Conference
    </Typography>
    <Box
      sx={(theme) => ({
        maxWidth: '100%',
        overflowX: 'scroll',
        [theme.breakpoints.down('md')]: {
          maxWidth: 'calc(100vw - 32px)',
        },
      })}
    >
      <Table>
        <TableHead>
          <TableRow>
            {HEADER.map((header, i) => (
              <TableCell
                key={header.label}
                align={String(i) !== '0' ? 'right' : 'left'}
                sx={(theme) => ({
                  minWidth: header.minWidth,
                  ...(String(i) === '0' && {
                    position: 'sticky',
                    left: 0,
                    backgroundColor: theme.palette.background.paper,
                  }),
                })}
              >
                {header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {conference.teams.map((team, i) => (
            <TableRow key={team.profile.id}>
              <TableCell
                sx={(theme) => ({
                  minWidth: 225,
                  display: 'flex',
                  alignItems: 'center',
                  position: 'sticky',
                  left: 0,
                  backgroundColor: theme.palette.background.paper,
                })}
              >
                <ConferenceStandingsTableTeamName
                  teamName={`${team.profile.city} ${team.profile.name}`}
                  teamRank={i + 1}
                  teamId={team.profile.id}
                />
              </TableCell>
              <TableCell align="right">{team.standings.wins}</TableCell>
              <TableCell align="right">{team.standings.losses}</TableCell>
              <ConferenceStandingsTableWinPct winPct={team.standings.winPct} />
              <TableCell align="right">
                {displayGameBehind(String(team.standings.confGamesBehind))}
              </TableCell>
              <ConferenceStandingsTableWinLoseRecord
                wins={team.standings.confWin}
                losses={team.standings.confLoss}
                displayName="Conference"
              />
              <ConferenceStandingsTableWinLoseRecord
                wins={team.standings.divWin}
                losses={team.standings.divLoss}
                displayName="Division"
              />
              <ConferenceStandingsTableWinLoseRecord
                wins={team.standings.homeWin}
                losses={team.standings.homeLoss}
                displayName="Home"
              />
              <ConferenceStandingsTableWinLoseRecord
                wins={team.standings.roadWin}
                losses={team.standings.roadLoss}
                displayName="Road"
              />
              <ConferenceStandingsTableWinLoseRecord
                wins={team.standings.otwin}
                losses={team.standings.otloss}
                displayName="OT"
              />
              <ConferenceStandingsTableStreak streak={team.standings.streak} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  </Stack>
);
