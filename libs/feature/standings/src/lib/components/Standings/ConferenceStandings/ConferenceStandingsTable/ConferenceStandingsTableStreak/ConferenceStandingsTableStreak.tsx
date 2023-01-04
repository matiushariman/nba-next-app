import TableCell from '@mui/material/TableCell';

export interface ConferenceStandingsTableStreakProps {
  readonly streak: string;
}

const ConferenceStandingsTableStreak = ({
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

export default ConferenceStandingsTableStreak;
