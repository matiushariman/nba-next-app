import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';

import { ConferenceStandingsTableTeamName } from './ConferenceStandingsTableTeamName';
import { ConferenceStandingsTableWinPct } from './ConferenceStandingsTableWinPct';
import { ConferenceStandingsTableWinLoseRecord } from './ConferenceStandingsTableWinLoseRecord';
import { ConferenceStandingsTableStreak } from './ConferenceStandingsTableStreak';
import { displayGameBehind } from './ConferenceStandingsTable.utils';

import type { ConferenceStandingsTableProps } from './ConferenceStandingsTable.types';

const HEADER = [
  'Team',
  'W',
  'L',
  'Win%',
  'GB',
  'Conf',
  'Div',
  'Home',
  'Road',
  'OT',
  'Streak',
];

export const ConferenceStandingsTable = ({
  conference,
}: ConferenceStandingsTableProps) => (
  <Stack spacing={1}>
    <Typography fontWeight="bold">
      {conference.displayConference} Conference
    </Typography>
    <Table>
      <TableHead>
        <TableRow>
          {HEADER.map((header, i) => (
            <TableCell
              key={header}
              align={String(i) !== '0' ? 'right' : 'left'}
            >
              {header}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {conference.teams.map((team, i) => (
          <TableRow key={team.profile.id}>
            <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
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
  </Stack>
);
