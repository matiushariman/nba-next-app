import { convertESTtoLocalTime, formatDate } from '@nba-app/date-utils-old';
import Typography from '@mui/material/Typography';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { displayLiveGameStatusText } from '@nba-app/formatting-utils';

import type { TodayGameStatusProps } from './TodayGameStatus.types';

export const TodayGameStatus = ({
  statusDesc,
  status,
  dateTimeEt,
  period,
  periodClock,
}: TodayGameStatusProps) => {
  if (status === '1') {
    const localDate = convertESTtoLocalTime(dateTimeEt);

    return (
      <Typography
        aria-label="game starting time"
        textTransform="uppercase"
        fontWeight="bold"
      >
        {formatDate(localDate, 'H:mm A')}
      </Typography>
    );
  } else if (status === '2') {
    return (
      <Typography
        textTransform="uppercase"
        sx={(theme) => ({
          color: theme.palette.error.main,
          display: 'flex',
          alignItems: 'center',
        })}
      >
        <span>
          <LiveTvIcon sx={{ mr: 1 }} />
        </span>
        <span>
          {displayLiveGameStatusText(period, periodClock, statusDesc)}
        </span>
      </Typography>
    );
  }

  return <Typography textTransform="uppercase">{statusDesc}</Typography>;
};
