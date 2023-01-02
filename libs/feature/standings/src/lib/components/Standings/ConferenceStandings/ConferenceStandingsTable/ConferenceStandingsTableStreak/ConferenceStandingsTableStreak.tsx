import TableCell from '@mui/material/TableCell';

import type { ConferenceStandingsTableStreakProps } from './ConferenceStandingsTableStreak.types';

export const ConferenceStandingsTableStreak = ({
  streak,
}: ConferenceStandingsTableStreakProps) => {
  const isWinningRecord = streak.includes('Won');

  return (
    <TableCell
      align="right"
      aria-label={`${isWinningRecord ? 'Winning' : 'Losing'} streak`}
      sx={(theme) => ({
        color: isWinningRecord
          ? theme.palette.success.main
          : theme.palette.error.main,
      })}
    >
      {streak}
    </TableCell>
  );
};
