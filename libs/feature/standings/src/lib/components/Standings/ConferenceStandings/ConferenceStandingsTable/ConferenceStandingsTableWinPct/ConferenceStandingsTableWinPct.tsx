import TableCell from '@mui/material/TableCell';

export interface ConferenceStandingsTableWinPctProps {
  readonly winPct: number;
}

const ConferenceStandingsTableWinPct = ({
  winPct,
}: ConferenceStandingsTableWinPctProps) => {
  const isWinningRecord = winPct >= 50;

  return (
    <TableCell
      align="right"
      aria-label={`${
        isWinningRecord ? 'Winning' : 'Losing'
      } record of ${winPct}%`}
      sx={(theme) => ({
        color: isWinningRecord
          ? theme.palette.success.main
          : theme.palette.error.main,
      })}
    >
      {(winPct / 100).toFixed(3)}
    </TableCell>
  );
};

export default ConferenceStandingsTableWinPct;
