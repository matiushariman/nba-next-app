import TableCell from '@mui/material/TableCell';

export interface ConferenceStandingsTableWinLoseRecordProps {
  readonly wins: number | string;
  readonly losses: number | string;
  readonly displayName?: string;
}

const ConferenceStandingsTableWinLoseRecord = ({
  wins,
  losses,
  displayName = '',
}: ConferenceStandingsTableWinLoseRecordProps) => {
  const isWinningRecord = Number(wins) >= Number(losses);
  const isTieRecord = wins === losses;
  const record = `${wins} - ${losses}`;

  return (
    <TableCell
      align="right"
      aria-label={`${displayName} ${
        isWinningRecord ? 'Winning' : 'Losing'
      } record of ${record}`}
      sx={(theme) => ({
        ...(!isTieRecord && {
          color: isWinningRecord
            ? theme.palette.success.main
            : theme.palette.error.main,
        }),
      })}
    >
      {record}
    </TableCell>
  );
};

export default ConferenceStandingsTableWinLoseRecord;
