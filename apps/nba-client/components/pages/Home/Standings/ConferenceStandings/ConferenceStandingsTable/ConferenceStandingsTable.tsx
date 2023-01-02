import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';

import { ConferenceStandingsTableTeamName } from './ConferenceStandingsTableTeamName';
import type { ConferenceStandingsTableProps } from './ConferenceStandingsTable.types';

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
          <TableCell>Team</TableCell>
          <TableCell>W</TableCell>
          <TableCell>L</TableCell>
          <TableCell>Win%</TableCell>
          <TableCell>GB</TableCell>
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
            <TableCell>{team.standings.wins}</TableCell>
            <TableCell>{team.standings.losses}</TableCell>
            <TableCell
              sx={(theme) => ({
                color:
                  team.standings.winPct < 50
                    ? theme.palette.error.main
                    : theme.palette.success.main,
              })}
            >
              {(team.standings.winPct / 100).toFixed(3)}
            </TableCell>
            <TableCell>{team.standings.confGamesBehind}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Stack>
);
